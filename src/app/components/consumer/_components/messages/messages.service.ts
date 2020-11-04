import { Message, MessagePage } from 'src/app/shared/_models/message.model';
import { Project } from '../../../../shared/_models/project.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, zip } from 'rxjs';
import { Pagination } from '../../../../shared/_models/pagination.model'
import { environment } from 'src/environments/environment';
import { map, switchMap } from 'rxjs/operators';
import { ServiceAdapter } from '../../../utilities/service-adapter';
import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MessagesService extends ServiceAdapter {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    super(http);
  }

  getPage(page: number, pageSize: number): Observable<Pagination<Project>> {
    const url = 'https://test.api.xpbids.com/api/v1/provider-projects';

    let params = new HttpParams();
    params = params.append('HasMessages', String(true));
    params = params.append('page', page.toString());
    params = params.append('page-size', pageSize.toString());

    return this.http.get<Pagination<Project>>(url, { params }).pipe(
      map(pageData => {
        pageData.results.map(res => {
          res.lastUpdated = moment(res.lastUpdated).format('MM-DD-YYYY');
          return res;
        });
        return pageData;
      })
    );
  }

  getMessagesByProjectId(projectId: string): Observable<MessagePage> {
    const url = `https://test.api.xpbids.com/api/v1/provider-projects/${projectId}/messages`;

    return this.http.get<MessagePage>(url).pipe(
      switchMap(res =>
        zip(of(res), this.getImages([res.consumerId, res.providerId]))
      ),
      map(([res, userImages]) => {
        console.log(res, userImages);
        res.messages = res.messages.map(m => {
          m.messageDate = moment.utc(m.messageDate).fromNow();
          m.consumerFirstName = res.consumerFirstName;
          m.consumerLastName = res.consumerLastName;
          m.providerFirstName = res.providerFirstName;
          m.providerLastName = res.providerLastName;

          m.consumerImage = userImages[0]
            ? userImages[0].data
            : 'defaulurlhere';
          m.providerImage = userImages[1]
            ? userImages[1].data
            : 'defaulurlhere';
          return m;
        });
        return res;
      })
    );
  }

  sendMessage(projectId: string, message: string) {
    const url = `https://test.api.xpbids.com/api/v1/provider-projects/${projectId}/messages`;
    return this.postaction({ message }, url);
  }

  getImages(ids: string[]) {
    let commaDelimitedIds = '';

    ids.forEach(id => (commaDelimitedIds += `${id},`));
    commaDelimitedIds = commaDelimitedIds.substr(
      0,
      commaDelimitedIds.length - 1
    );

    const url = `https://test.api.xpbids.com/api/v1/accounts/images/${commaDelimitedIds}`;
    let params = new HttpParams();
    params = params.append('width', '50');
    return this.http.get(url, { params }).pipe(
      map((res: any[]) => {
        console.log(res);
        res
          .filter(x => x !== null)
          .map(
            image =>
              (image.data = this.sanitizer.bypassSecurityTrustUrl(
                `data:image/png;base64, ${image.data}`
              ))
          );

        return res;
      })
    );
  }
}

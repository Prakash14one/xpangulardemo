import { ConsumerPost } from '../consumer/_models/consumer-post.model';
import { Pagination } from './../../shared/_models/pagination.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { ServiceAdapter } from '../utilities/service-adapter';

const httpOptions = { headers: new HttpHeaders({ 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Methods': 'POST,GET', 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Authorization': 'Bearer 6iBWVdBcp0mMK/U30WKfAPYEF/n5npkWcZBvlqmJpjQU2H/d5PTUyudTboAlMfwQiwaF9krm20lsbDPk84qug' }) };
@Injectable({
	providedIn: 'root'
})

export class ProjectsService extends ServiceAdapter {
	url = "https://test.api.xpbids.com/api/v1/consumer-projects";
	URL = 'https://test.api.xpbids.com/api/v1/showcase/providers';
	Url = "https://test.api.xpbids.com/api/v1/consumer-accounts";
	
	// private _consumerProjectsUrl = `${environment.apiUrl}/consumer-projects`;

	constructor(private http: HttpClient) {
		super(http);
	}


	getConsumerProjects(page: number): Observable<any> {

		let params = new HttpParams();
		params = params.append('page', page.toString());
		// params = params.append('page-size', '10');

		//return this.getactionwithparams<Pagination<ConsumerPost>>(params, this._consumerProjectsUrl);
		return of(this.getConsumerProjectsData() as any);
	}
	getcategories(): Observable<any>
	{
		 return this.http.get<Observable<any>>('https://test.api.xpbids.com/api/v1/service-categories', httpOptions);
	}
	getsubcategories(id): Observable<any>	{
		return this.http.get<Observable<any>>('https://test.api.xpbids.com/api/v1/service-categories?Categoryid='+ id , httpOptions);
	}

	getConsumerProjectsData(): any {
		return {
			links: { hRef: 'http://local.api.xpbids.com/api/v1/consumer-projects?page=1', rel: 'self', method: 'GET' },

			totalCount: 5,
			resultCount: 5,
			pageSize: 10,
			currentPage: 1,
			totalPages: 1,

			results: [
				{
					link: { hRef: 'http://local.api.xpbids.com/api/v1/consumer-projects/620b1239-f7ae-47a7-8388-348cf65899b4', rel: 'self', method: 'GET' },
					id: '620b1239-f7ae-47a7-8388-348cf65899b4',
					title: 'New Gutters',
					category: 'Home Service',
					subCategory: 'Roofing/Gutters',
					description: 'I am looking for someone to install new gutters.',
					status: 'Bidding',
					zipCode: '55555',
					serviceType: 'Licensed/Verified',
					desiredRangeStart: '2019-04-08T00:00:00',
					desiredRangeEnd: '2019-07-24T00:00:00',
					desiredTimeOfDay: 'Afternoon',
					desiredLocation: 'Licenced/Verified',
					postDate: '2019-03-09T00:00:00',
					imageMetaData: null
				},
				{
					link: { hRef: 'http://local.api.xpbids.com/api/v1/consumer-projects/b2a77d9e-d7cb-4aaf-b662-23598f2f0cd6', rel: 'self', method: 'GET' },
					id: 'b2a77d9e-d7cb-4aaf-b662-23598f2f0cd6',
					title: 'Painting',
					category: 'Home Service',
					subCategory: 'Painting',
					description: 'I need someone to paint my living room.',
					status: 'Bidding',
					zipCode: '55555',
					serviceType: 'Licensed/Verified',
					desiredRangeStart: '2019-05-12T00:00:00',
					desiredRangeEnd: '2019-07-24T00:00:00',
					desiredTimeOfDay: 'Morning',
					desiredLocation: 'Licenced/Verified',
					postDate: '2019-03-05T00:00:00',
					imageMetaData: null
				}
			],
			length: 2
		};

	}
	getConsumerManagePosts() {
		return this.http.get<any>(this.url + '?activeprojects=true', httpOptions);
	}
	getProjectDetailinfo(projectId) {
		return this.http.get<any>(this.url + '/' + projectId + '', httpOptions);
	}
	sendProjectMessage(projectId, message) {
		return this.http.post<any>(this.url + '/' + projectId + '/messages', message, httpOptions);
	}
	addAppointment(data){
		return this.http.post<any>('https://test.api.xpbids.com/api/v1/calendar-events', data, httpOptions);
	}
	getProjectImages(projectId){
		return this.http.get<any>('https://test.api.xpbids.com/api/v1/accounts/account-images' + '/' + projectId, httpOptions);
	}
	getsowData(projectId){
		return this.http.get<any>(this.url + '/' + projectId + '/sow', httpOptions);
	}
	getbiddata(){
		return this.http.get<any>(this.url + '?liveBids=true', httpOptions);
	}
	getProjectBid(projectId){
		return this.http.get<any>(this.url + '/' + projectId + '/bids', httpOptions);
	}

	getProjectBidDetail()
	{
		return this.http.get<any>(this.URL, httpOptions);
	}
	getCompleteProjects(){
		return this.http.get<any>(this.url + '?completedprojects=true' , httpOptions);
	}
	getmyposts(){
		return this.http.get<any>(this.url,httpOptions);
	}
	createNewProject(data:any) {
		return this.http.post<any>(this.url,data,httpOptions);
		// console.log("wait a few seconds");
		// this.sleep(5000);
		// console.log("timeout over, continue");
		// return of(true);
		// this wait timer is just here so the loading in the message box displays
		// return new Promise(resolve => {
		// 	setTimeout(resolve, 50000);
		// 	console.log('timeout over, continue');
		// });
	}
	// sleep(milliseconds) {
	// 	const date = Date.now();
	// 	let currentDate = null;
	// 	do {
	// 	  currentDate = Date.now();
	// 	} 
	// 	while (currentDate - date < milliseconds);
	// }
	getAccountdata(){
		return this.http.get<any>(this.Url,httpOptions);
	}
	getAccountimage(){
		return this.http.get<any>(this.Url + '/account-image',httpOptions);
	}
	postaccountdata(data){
		return this.http.post<any>(this.Url,data,httpOptions);
	}

	getCompletedSow(){
		// console.log(id);
		return this.http.get<any>('https://test.api.xpbids.com/api/v1/consumer-sow',httpOptions);
	}
	getAccountImage(){
		return this.http.get<any>('https://test.api.xpbids.com/api/v1/consumer-accounts/account-image',httpOptions);
	}
}
import { PaginationLink } from './../../../shared/_models/pagination.model';

export interface ConsumerPost {
  link: PaginationLink;
  id: string;
  title: string;
  category: string;
  subCategory: string;
  description: string;
  status: string;
  zipCode: number;
  serviceType: string;
  desiredRangeStart: string;
  desiredRangeEnd: string;
  desiredTimeOfDay: string;
  desiredLocation: string;
  postDate: string;
}

export interface IDataModel {
  totalCount: number;
  result: IResult[];
  message: null | string;
  success: boolean;
  exception: any;
}

export interface IResult {
  postId: number;
  userId: number;
  totalReadingTime: number;
  postType: number;
  banner: string;
  image: string;
  imageAlt?: string;
  order: number;
  title: string;
  summary: string;
  content: string;
  tag: number;
  lang: number;
  url: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
  isFirstPost: boolean;
  createdAt: string;
  modifiedAt: string;
  createdBy: number;
  modifiedBy: number;
  isRemoved: boolean;
  author: any;
  users: IUsers;
}

export interface IUsers {
  userId: number;
  email: string;
  name: string;
  surname: string;
  password: any;
  roleId: number;
  avatar: string;
  isRemoved: boolean;
  createdAt: string;
  createdBy: number;
  modifiedAt: any;
  modifiedBy: any;
  role: any;
}

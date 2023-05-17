import {IResult} from './IDataModel';

export interface IDataContext {
  data: IResult[];
  loading: boolean;
  pageNumber: number;
  content: string;
  setLoading: (loading: boolean) => void;
  setData: (data: IResult[]) => void;
  setPageNumber: (page: number) => void;
  setContent: (content: string) => void;
}

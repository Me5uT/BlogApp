import React, {useState} from 'react';
import {IResult} from '../models/IDataModel';
import {DataContext} from './DataContext';
import {IDataContext} from '../models/IDataContext';

interface DataProviderProps {
  children: React.ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({children}) => {
  const [data, setData] = useState<IResult[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [content, setContent] = useState<string>('');

  const contextValue: IDataContext = {
    data,
    loading,
    pageNumber,
    content,
    setLoading,
    setData,
    setPageNumber,
    setContent,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

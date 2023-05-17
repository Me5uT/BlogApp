import {useContext} from 'react';
import DataContext, {IDataContext} from './DataContext';

const useData = (): IDataContext => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }

  return context;
};

export default useData;

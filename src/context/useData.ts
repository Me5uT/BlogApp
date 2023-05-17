import {useContext} from 'react';
import {DataContext} from './DataContext';
import {IDataContext} from '../models/IDataContext';

export const useData = (): IDataContext => {
  // Access the data context using the 'useContext' hook
  const context = useContext(DataContext);

  // Throw an error if the context is not available
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }

  return context;
};

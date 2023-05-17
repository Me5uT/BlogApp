import {ActivityIndicator} from 'react-native';
import {useData} from '../../context/useData';

export const RenderLoader = () => {
  const {loading} = useData();

  return loading ? <ActivityIndicator size={'large'} color={'black'} /> : null;
};

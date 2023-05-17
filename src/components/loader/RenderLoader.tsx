import useData from '../../context/useData';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './RenderLoader.styles';

export const RenderLoader = () => {
  const {loading} = useData();

  return loading ? (
    <View style={styles.spinner}>
      <ActivityIndicator />
    </View>
  ) : null;
};

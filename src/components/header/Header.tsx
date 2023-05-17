import {View, Text} from 'react-native';
import {styles} from './Header.styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Infinite Scroll FlatList</Text>
    </View>
  );
};

export default Header;

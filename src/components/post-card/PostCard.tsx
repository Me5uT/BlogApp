/* eslint-disable react/react-in-jsx-scope */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './PostCard.styles';
import {useNavigation} from '@react-navigation/native';
import {useData} from '../../context/useData';
import {totalReadingTimeFixer} from '../../utils/service/UtilityService';

export interface IBlogCardProps {
  banner: string;
  title: string;
  summary: string;
  totalReadingTime: number;
  postContent: string;
}

export const PostCard = ({
  banner,
  title,
  summary,
  totalReadingTime,
  postContent,
}: IBlogCardProps) => {
  const {setContent} = useData();
  const navigation = useNavigation();

  const handleTouch = () => {
    // Set the content to the value of postContent
    setContent(postContent);

    // Navigate to the 'PostDetail' screen using the navigation object
    navigation.navigate('PostDetail');
  };

  return (
    <TouchableOpacity onPress={() => handleTouch()}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: banner,
              }}
            />
          </View>
          <View style={styles.summaryContainer}>
            <Text style={styles.summary} numberOfLines={5}>
              {'\t'}
              {'\t'}
              {summary}
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.totalReadingTime}>
            {`Total Reading Time: ${totalReadingTimeFixer(
              totalReadingTime,
            )} mins`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

/* eslint-disable react/react-in-jsx-scope */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './PostCard.styles';
import {useNavigation} from '@react-navigation/native';
import useData from '../../context/useData';

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
    setContent(postContent);
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
            <Text style={styles.summary}>{summary}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.totalReadingTime}>
            {`${totalReadingTime} mins`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

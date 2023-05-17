import React from 'react';
import RenderHTML from 'react-native-render-html';
import {useData} from '../../context/useData';
import {ScrollView, View, useWindowDimensions} from 'react-native';
import {styles} from './PostDetails.styles';

export const PostDetails = () => {
  const {width} = useWindowDimensions();
  const {content} = useData();

  return (
    <View style={styles.container}>
      <ScrollView>
        <RenderHTML contentWidth={width} source={{html: content}} />
      </ScrollView>
    </View>
  );
};

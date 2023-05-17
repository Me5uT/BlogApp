/* eslint-disable react/react-in-jsx-scope */
import {useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {PostCard} from '../../components/post-card/PostCard';
import {RenderLoader} from '../../components/loader/RenderLoader';
import useData from '../../context/useData';
import {fetchDataOnPage} from '../../utils/service/API';

export const Posts = () => {
  const {data, pageNumber, setData, setLoading, setPageNumber} = useData();

  useEffect(() => {
    const fetchData = () => {
      fetchDataOnPage(pageNumber)
        .then(response => response.json())
        .then(jsonData => {
          setData([...data, ...jsonData.result]);
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
          setLoading(false);
        });
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  const loadMoreItem = () => {
    if (pageNumber < 3) setPageNumber(pageNumber + 1);
    else return;
  };

  console.log('pageNumber:', pageNumber);
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <PostCard
            title={item.title}
            summary={item.summary}
            banner={item.banner}
            totalReadingTime={item.totalReadingTime}
            postContent={item.content}
          />
        )}
        ListFooterComponent={RenderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
        contentContainerStyle={{paddingBottom: 120}}
      />
    </SafeAreaView>
  );
};

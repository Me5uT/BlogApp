import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleContainer: {
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  imageContainer: {
    flex: 1,
    aspectRatio: 1.5,
    marginRight: 8,
  },
  image: {
    flex: 1,
    borderRadius: 8,
  },
  summaryContainer: {
    flex: 2,
    paddingHorizontal: 15,
  },
  summary: {
    fontSize: 14,
    color: '#666666',
  },
  totalReadingTime: {
    fontSize: 12,
    color: '#999999',
  },
});

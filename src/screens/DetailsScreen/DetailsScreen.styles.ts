import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemBox: {
    marginBottom: 10,
    alignItems: 'center',
    elevation: 7,
    padding: 20,
    width: (90 / 100) * width,
    borderRadius: 10,
  },
  chorusView: {
    alignItems: 'center',
    marginBottom: 20,
  },
  itemText: {
    fontSize: 20,
    textAlign: 'center',
  },
  verseView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  number: {
    fontWeight: 'bold',
  },
  headerView: {
    height: (12 / 100) * height,
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: 'row',
    elevation: 9,
  },
  titleStyle: {
    width: '80%',
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;

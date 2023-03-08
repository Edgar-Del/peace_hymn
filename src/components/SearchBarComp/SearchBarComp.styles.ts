import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 7,
    paddingBottom: 20,
    paddingTop: 10,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  barStyle: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    elevation: 10,
    backgroundColor: '#fff',
  },
});

export default styles;

import colors from 'configs/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    alignItems: 'center',
  },
  hymnCard: {
    width: '85%',
  },
  listIconView: {
    paddingTop: 7,
  },
  descriptionStyle: {
    color: colors.peaceBlack,
  },
});

export default styles;

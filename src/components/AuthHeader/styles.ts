import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    top: 0,
  },

  background: {
    width: '100%',
    top: -75,
  },

  titleContainer: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '15%',
  },

  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 32,
    alignSelf: 'center',
    margin: 0,
    color: '#FFFFFF',
    lineHeight: 32,
  },

  subTitle: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    alignSelf: 'center',
    color: '#FFFFFF',
    lineHeight: 16,
  }
});

export default styles;
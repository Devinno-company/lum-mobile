import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: '10%',
    width: '80%',
    padding: '5%',
    borderRadius: 5,
    height: '80%',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    minHeight: 325,
  },

  footer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    color: '#052377',
    marginBottom: '15%',
  },

  subText: {
    fontSize: 8,
    fontFamily: 'Poppins_700Bold',
    color: '#052377',
    marginTop: 20,
  },

  subTitle: {
    fontSize: 12,
    fontFamily: 'Poppins_700Bold',
    color: '#052377',
  },

  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#052377',
    marginBottom: 20,
    width: '95%',
    paddingLeft: 35,
  },

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 40,
    marginTop: '20%',
  },

  checkboxContainer: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    width: '100%',
  },

  checkbox: {
    transform: [
      {scale: 0.6},
      {translateX: -12},
      {translateY: -2},
    ]
  },

  checkboxLabel: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 8,
    color: '#052377',
    left: -6,
  },

  errorText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 8,
    color: '#ED3F62',
  },

  buttonWrapper: {
    alignItems: 'center',
    width: '100%',
  },

  formWrapper: {
    width: '100%',
    flex: 1,
  }
});

export default styles;
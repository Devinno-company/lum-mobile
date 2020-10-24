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
  
  formStep: {
    width: '100%',
  }
});

export default styles;
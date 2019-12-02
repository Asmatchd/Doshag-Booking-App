import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  MainContainer: {
    flexGrow: 2,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
  },
  logoImage: {
    width: 120,
    height: 120,
  },

  inputContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    marginBottom: 14,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: '#fff',

  },
  textInputContainer: {
    width: '90%',
    // backgroundColor: '#250',
  },
  phoneInputContainer: {
    width: '70%',
    // backgroundColor: '#250',
  },
  icContainer: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#faf',
  },
});

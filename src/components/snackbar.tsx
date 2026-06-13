import { Snackbar } from 'react-native-snackbar';

export const showSnackbar = (message: string) => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: '#F5F5F5',
    textColor: '#000',
  });
};
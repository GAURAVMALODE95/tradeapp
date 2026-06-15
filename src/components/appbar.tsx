import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { FONT_DEFAULT } from '../constants/Constants';

interface Props {
  title: string;
  showBack?: boolean;
  onBackPress?: () => void;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

const CustomAppBar = ({
  title,
  showBack = false,
  onBackPress,
  leftComponent,
  rightComponent,
}: Props) => {
  const navigation = useNavigation();

  return (
    
      <View style={styles.container}>
        <View style={styles.side}>
          {showBack ? (
            <TouchableOpacity
              onPress={() =>
                onBackPress
                  ? onBackPress()
                  : navigation.goBack()
              }>
              <Text style={styles.icon}>←</Text>
            </TouchableOpacity>
          ) : (
            leftComponent
          )}
        </View>

        <View style={styles.center}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>

        <View style={styles.side}>
          {rightComponent}
        </View>
      </View>
  );
};

export default CustomAppBar;

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: '#1E293B',
    flexDirection: 'row',
    alignItems: 'center',
    color:'#1E293B',  
    paddingVertical: 8,
  },
  side: {
    width: 30,
    color:'#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: FONT_DEFAULT,
    color:'#FFF'
  },
  icon: {
    fontSize: 22,
  },
});
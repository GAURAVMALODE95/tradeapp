import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FONT_DEFAULT, SAFE_AREA_BACKGROUND_COLOR } from '../constants/Constants';
import { ArrowLeft, ArrowLeftIcon } from 'lucide-react-native';

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
            <ArrowLeftIcon
              size={24}
              color="#FFF"

            />
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
    backgroundColor: SAFE_AREA_BACKGROUND_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    // color:'#1E293B',  
    paddingVertical: 8,
  },
  side: {
    width: 30,
    color: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: FONT_DEFAULT,
    color: '#FFF'
  },
  icon: {
    fontSize: 24,
    color: '#FFF',
  },
});
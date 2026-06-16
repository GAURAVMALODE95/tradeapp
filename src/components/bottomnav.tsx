import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  House,
  Wallet,
  Newspaper,
  Bookmark,
  User,
  Ellipsis,
} from 'lucide-react-native';
import { GLOBAL_BACKGROUND_COLOR, SAFE_AREA_BACKGROUND_COLOR } from '../constants/Constants';

type BottomNavProps = {
    state: any;
    navigation: any;
  };
  const renderIcon = (
    routeName: string,
    isFocused: boolean,
  ) => {
    const color = isFocused ? '#FEFCFA' : '#737A80';
    const size = isFocused ? 26 : 22;

    switch (routeName) {
      case 'Home':
        return <House color={color} size={size} strokeWidth={2.2} />;
  
      case 'Portfolio':
        return <Wallet color={color} size={size} strokeWidth={2.2} />;
  
      case 'News':
        return <Newspaper color={color} size={size} strokeWidth={2.2} />;
  
      case 'Watchlist':
        return <Bookmark color={color} size={size} strokeWidth={2.2} />;
  
      case 'Profile':
        return <User color={color} size={size} strokeWidth={2.2} />;
  
      default:
        return <Ellipsis color={color} size={size} strokeWidth={2.2} />;
    }
  };

const Bottomnav = ({ state, navigation }: BottomNavProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route : any, index : any) => {
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tab}
            onPress={() => navigation.navigate(route.name)}
          >
            {renderIcon(route.name, isFocused)}
            <Text
              style={{
                color: isFocused ? '#FEFCFA' : '#737A80',
              }}
            >
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Bottomnav;

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#2B343B',
    
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
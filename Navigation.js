import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, Icon } from 'react-native-elements';
import Colors from './screens/Colors';

import Home from './screens/Main';
import ProductDetails from './screens/ProductDetails';
import ProductBuy from './screens/ProductBuy';

import HomeScreen from './screens/Home';
import ProductsScreen from './screens/Products';
import ShopScreen from './screens/Shop';
import ProfileScreen from './screens/Profile';

const MyFirstStack = createStackNavigator();

export const MyStack = () => {
  return (
    <MyFirstStack.Navigator>
      <MyFirstStack.Screen name="Home" component={Home} />
      <MyFirstStack.Screen name="Match" component={ProductDetails} />
      <MyFirstStack.Screen name="Buy" component={ProductBuy} />
    </MyFirstStack.Navigator>
  );
}

const MyTabs = createBottomTabNavigator();

export const AppTabsNavigation = () => {
  return(
    <MyTabs.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, iconColor, iconSize }) => {
          let iconName;
          if(route.name === 'Home'){
            iconName = focused ? 'home' : 'home-outline';
            iconSize = focused ? 34 : 26;
            iconColor = focused ? Colors.menu_item_active_color : Colors.menu_item_inactive_color;
          }
          else if(route.name === 'Products'){
            iconName = focused ? 'shopping' : 'shopping-outline';
            iconSize = focused ? 34 : 26;
            iconColor = focused ? Colors.menu_item_active_color : Colors.menu_item_inactive_color;
          }
          else if(route.name === 'Shop'){
            iconName = focused ? 'storefront' : 'storefront-outline';
            iconSize = focused ? 34 : 26;
            iconColor = focused ? Colors.menu_item_active_color : Colors.menu_item_inactive_color;
          }
          else if(route.name === 'Profile'){
            iconName = focused ? 'account' : 'account-outline';
            iconSize = focused ? 34 : 26;
            iconColor = focused ? Colors.menu_item_active_color : Colors.menu_item_inactive_color;
          }
          return <Icon type='material-community' name={iconName} size={iconSize} color={iconColor} />
        }
      })
      }
      tabBarOptions={{
        style:{height:100},
        activeTintColor: Colors.menu_item_active_color,
        inactiveTintColor: Colors.menu_item_inactive_color,
        activeBackgroundColor: Colors.menu_dark100_green,
        inactiveBackgroundColor: Colors.menu_dark50_green
      }}
    >
      <MyTabs.Screen name="Home" component={HomeScreen} />
      <MyTabs.Screen name="Products" component={MyStack} />
      <MyTabs.Screen name="Shop" component={ShopScreen} />
      <MyTabs.Screen name="Profile" component={ProfileScreen} />
    </MyTabs.Navigator>
  );
}
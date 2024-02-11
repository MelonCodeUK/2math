// меню має 5 менюшек:
// 1- lvls та загальні тести:
//      1-спід тест(треба як умого швидше пройти кількіть завдань)
//      2- це неначе бескінечний lvl, у якому треба пройти як умого дальніше
// 2- це пошук правил
// 3- мій акканут(лвл в перщій вкладці, класс, спід тест, бескінечний лвл, таблиця найкрашчих результатів)
// 4- про додаток та налаштування



//menu.js:
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Image} from 'react-native';
import Levels from './levels';
import InfoApp from './infoApp';
import Tipp from './tipp'; // Проверьте правильность пути
import Konto from './konto';


const tabBarData = [
  { "name": "levels", "icon": require("./../assets/levels.png"), "component": Levels},
  { "name": "tipp", "icon": require("./../assets/Rules.png"), "component": Tipp},
  { "name": "konto", "icon": require("./../assets/myProfil.png"), "component": Konto},
  { "name": "infoApp", "icon": require("./../assets/settings.png"), "component": InfoApp }
];


const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        labelStyle: { display: 'none' }, // Это скроет текст под иконками
        tabBarStyle:{
            position:'absolute',
            bottom:16,
            right:16,
            left:16,
            borderRadius:10
        },
        tabBarIcon: ({ focused, color, size }) => {
          const item = tabBarData.find(item => item.name === route.name);
          return <Image source={item.icon} style={{ width: 30, height: 30, tintColor: color }} />;
        },
      })}
    >
      {tabBarData.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{ headerShown: false, tabBarShowLabel: false}}
        />
      ))}
    </Tab.Navigator>
  );
}

export default HomeScreen;
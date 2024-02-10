import { StatusBar } from 'expo-status-bar';
import {Text, View, Animated, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useRef, useState, useEffect } from 'react';
import {styles} from "./styles/ALLSTYLE.js";
import {Registration} from "./levels/Registration.js"
import LottieView from "lottie-react-native";

export const Stack = createNativeStackNavigator();

function StartScreen({navigation}) {
  const moveAnimation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Здесь вы можете установить время загрузки
  }, []);

  const moveButton = () => {
    Animated.timing(moveAnimation, {
      toValue: { x: 100, y: -100 },
      useNativeDriver: false,
    }).start(() => {
      navigation.navigate('ПершийВхіднийТест')
    });
  };

  if (isLoading) {
    
    return (
      <View style={styles.container}>
    <LottieView source={require('./assets/loading.json')} style={{width: 100, height: 100, }}
    autoPlay
    loop/>
    </View>
    )}

  return (
    <View style={styles.container}>
      <View >
        <Text style={[styles.number, { top: 0, left: -100 }]}>1</Text>
        <Text style={[{ position: 'absolute', top: 5, left: -30, fontSize: 35 }]}>+</Text>
        <Text style={[styles.number, { top: 0, left: 0 }]}>1</Text>
        <Text style={[{ position: 'absolute', top: 5, left: 60, fontSize: 35 }]}> = </Text>
        <Text style={[styles.number, { borderColor: '#636363', top: 0, left: 100 }]}></Text>
        <Animated.View style={[moveAnimation.getLayout(), { width: 50, height: 50 }]}>
          <TouchableOpacity onPress={moveButton}>
            <Text style={[{ position: 'absolute', top: 100, left: 0 }, styles.number]}>2</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}

export default function App() {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);
  return (
    <NavigationContainer style={styles.container}>
       <LottieView
      source={require("./assets/loading.json")}
      ref={animation}
      style={{width: 700, height: 700, position:"absolute", justifyContent: 'center',
      alignItems: 'center'}}
      autoPlay
    />
  <StatusBar style="auto" />
  <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
  <Stack.Screen
    name="Start"
    component={StartScreen}
  />
  <Stack.Screen 
    name="ПершийВхіднийТест" 
    component={Registration}
  />
</Stack.Navigator>

    </NavigationContainer>
  );
}


// import React, { useRef, useEffect } from 'react';
// import { Button, StyleSheet, View } from 'react-native';
// import LottieView from 'lottie-react-native';


// export default function Animation() {
//   const animation = useRef(null);
//   useEffect(() => {
//     // You can control the ref programmatically, rather than using autoPlay
//     // animation.current?.play();
//   }, []);
//   return (
//     <View style={styles.container}>
//     <LottieView
//       source={require("./assets/loading.json")}
//       ref={animation}
//       style={{width: 700, height: 700, position:"absolute", justifyContent: 'center',
//       alignItems: 'center'}}
//       autoPlay
//     />
//     </View>
//   );
// }





//код для загрузки!!!!!!!!!!!!!
// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import LottieView from 'lottie-react-native';

// export default function App() {
//   const [numbers, setNumbers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const newNumbers = Array.from({length: 1000}, () => Math.floor(Math.random() * 101));
//       setNumbers(newNumbers);
//       setLoading(false); // Завершение загрузки
//     }); // Задержка 5000 мс соответствует длительности анимации

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      // {loading && (
        // <LottieView
        //   source={require('./assets/loading.json')} // Замените на свой файл анимации
        //   autoPlay
        //   loop={true}
      //   />
      // )}
//       {numbers.length > 0 && numbers.map((num, index) => <Text key={index}>{num}</Text>)}
//     </View>
//   );
// }

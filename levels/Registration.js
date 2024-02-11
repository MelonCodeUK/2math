import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Animated, Image , Button, ScrollView, TouchableOpacity} from 'react-native';
import { styles } from './../styles/ALLSTYLE.js';
import { NavigationContainer } from '@react-navigation/native';
import { shuffleArray, saveFirstInputTest, twoRandomNumbers, GrosserKleinerGleich, loadFirstInputTest, clearFirstInputTest, getEndeLevels} from './../func.js';
import {Stack} from "./../App.js"
import { AnswerButton, ColumnAdditionAndAubtraction, WidgetEndeScreen} from '../src/moduls/widgets.js';
import LottieView from "lottie-react-native";
import {vieleFrageTest} from "./../src/settings.js"





export function Registration({navigation}){
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => false, // Hide the back button
    });
  }, [navigation])
  return(
    // <View style={styles.container}>
    <Stack.Navigator style={styles.container}>
        <Stack.Screen name="ПершийВхіднийТест_1"
         component={RegistrationScreen_Test_1}
         options={{ title: 'Почнімо✏️'}}
         />
        <Stack.Screen name="ПершийВхіднийТест_2"
         component={RegistrationScreen_Test_2}
         options={{title: "Далі🫤"}}
         />
          <Stack.Screen name="ПершийВхіднийТест_3"
         component={RegistrationScreen_Test_3}
         options={{title: "Складніше🤓"}}
         />
        <Stack.Screen name="ПершийВхіднийТест_4"
         component={RegistrationScreen_Test_4}
         options={{title: "Тепер це🫡"}}
         />
          <Stack.Screen name="ПершийВхіднийТест_5"
         component={RegistrationScreen_Test_5}
         options={{title: "Це точно не зможешь😉"}}
         />
         <Stack.Screen name="ПершийВхіднийТест_6"
         component={RegistrationScreen_Test_6}
         options={{title: "Добре думай😜"}}
         />
          <Stack.Screen name="ПершийВхіднийТест_Кінець"
         component={RegistrationScreen_Ende}
         options={{title: "Подивимось на твої результати😜"}}
         />
    </Stack.Navigator>
    // </View>
  )
}

// ➖✖️➗🟰➕✔️▶️⏸️⏯️⏹️


export function RegistrationScreen_Test_1({ navigation }) {
  const randomNumber1 = Math.floor(Math.random() * 60) + 1;
  const randomNumber2 = Math.floor(Math.random() * 40) + 1;
  const ready_number = randomNumber1 + randomNumber2;
  let endeScreen = 1
  if (parseInt(endeScreen) != 1){
    clearFirstInputTest('ПершийВхіднийТест')
    endeScreen = 1
  }
  const readys = shuffleArray([
    Math.floor(Math.random() * 60) + 1,
    Math.floor(Math.random() * 60) + 1,
    ready_number,
  ]);
  const moveAnimations = readys.map((item, index) => new Animated.ValueXY({ x: -125 + index*100, y: 100 }));

  const moveButton = (index) => {

    Animated.spring(moveAnimations[index], {
      toValue: { x: 70, y: 5 },
      useNativeDriver: false, // add this line
    }).start(async () =>{
      await saveFirstInputTest(1, "default",[randomNumber1, "+", randomNumber2], readys[index], ready_number)
      navigation.navigate("ПершийВхіднийТест_2")
    });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => false, // Hide the back button
    });
  }, [navigation]);
  return (
    
    <View style={styles.container}>
       <Text style={[styles.answer,
        { 
          width: 100,
          position: 'absolute',
          top: 0,
          right: 0,
          borderColor: '#FFFF00',
 }
      ]}
        >{endeScreen}/{vieleFrageTest}</Text>
    <View>
      <Text style={[styles.number, { top: 0, left: -130 }]}>{randomNumber1}</Text>
      <Text style={[{ position: 'absolute', top: 5, left: -60, fontSize: 35 }]}>+</Text>
      <Text style={[styles.number, { top: 0, left: -30 }]}>{randomNumber2}</Text>
      <Text style={[{ position: 'absolute', top: 5, left: 35, fontSize: 35 }]}>=</Text>
      <Text style={[styles.number, { borderColor: '#636363', top: 0, left: 65 }]}></Text>
      {readys.map((item, index) => (
          <Animated.View
            key={index}
            style={[
              {
                position: 'absolute',
                top: moveAnimations[index].y,
                left: moveAnimations[index].x,
                width: 50,
                height: 50,
              },
            ]}
          >
            <Text key={index} title={item} style={styles.answer} onPress={() => moveButton(index)}>
              {item}
            </Text>
          </Animated.View>
      ))}
    </View>
    </View>
  );
}


export function RegistrationScreen_Test_2({ navigation }) {
  const randomNumber1 = Math.floor(Math.random() * 60) + 1;
  const randomNumber2 = Math.floor(Math.random() * 40) + 1;
  const ready_number = randomNumber1 - randomNumber2;
  let endeScreen = 2
  const readys = shuffleArray([
    Math.floor(Math.random() * 60) + 1,
    Math.floor(Math.random() * 60) + 1,
    ready_number,
  ]);
  const moveAnimations = readys.map((item, index) => new Animated.ValueXY({ x: -125 + index*100, y: 100 }));

  const moveButton = (index) => {

    Animated.spring(moveAnimations[index], {
      toValue: { x: 70, y: 5 },
      useNativeDriver: false, // add this line
    }).start(async () =>{
      await saveFirstInputTest(2, "default",[randomNumber1,"-",randomNumber2], readys[index], ready_number)
      navigation.navigate("ПершийВхіднийТест_3")
    });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => false, // Hide the back button
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
<Text style={[styles.answer,
        { 
          width: 100,
          position: 'absolute',
          top: 0,
          right: 0,
          borderColor: '#FFFF00',
 }
      ]}
        >{endeScreen}/{vieleFrageTest}</Text>
    <View>
    <Text style={[styles.number, { top: 0, left: -130 }]}>{randomNumber1}</Text>
      <Text style={[{ position: 'absolute', top: 5, left: -60, fontSize: 35 }]}>—</Text>
      <Text style={[styles.number, { top: 0, left: -30 }]}>{randomNumber2}</Text>
      <Text style={[{ position: 'absolute', top: 5, left: 35, fontSize: 35 }]}>=</Text>
      <Text style={[styles.number, { borderColor: '#636363', top: 0, left: 65 }]}></Text>
      {readys.map((item, index) => (
          <Animated.View
            key={index}
            style={[
              {
                position: 'absolute',
                top: moveAnimations[index].y,
                left: moveAnimations[index].x,
                width: 50,
                height: 50,
              },
            ]}
          >
            <Text key={index} title={item} style={styles.answer} onPress={() => moveButton(index)}>
              {item}
            </Text>
          </Animated.View>
      ))}
    </View>
    </View>
  );
}


export function RegistrationScreen_Test_3({ navigation }) {
  let endeScreen = 3
  const randomNumber1 = Math.floor(Math.random() * 15) + 1;
  const randomNumber2 = Math.floor(Math.random() * 15) + 1;
  const ready_number = randomNumber1 * randomNumber2;
  const readys = shuffleArray([
    Math.floor(Math.random() * ready_number) + 1,
    Math.floor(Math.random() * ready_number) + 1,
    ready_number,
  ]);
  const moveAnimations = readys.map((item, index) => new Animated.ValueXY({ x: -125 + index*100, y: 100 }));

  const moveButton = (index) => {

    Animated.spring(moveAnimations[index], {
      toValue: { x: 70, y: 0 },
      useNativeDriver: false, // add this line
    }).start(async () =>{
      await saveFirstInputTest(3, "default",[randomNumber1,"x",randomNumber2], readys[index], ready_number)
      navigation.navigate("ПершийВхіднийТест_4")
    });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => false, // Hide the back button
    });
  }, [navigation]);

  return (
    
    <View style={styles.container}>
<Text style={[styles.answer,
        { 
          width: 100,
          position: 'absolute',
          top: 0,
          right: 0,
          borderColor: '#FFFF00',
 }
      ]}
        >{endeScreen}/{vieleFrageTest}</Text>
    <View>
    <Text style={[styles.number, { top: 0, left: -130 }]}>{randomNumber1}</Text>
      <Text style={[{ position: 'absolute', top: 5, left: -60, fontSize: 35 }]}>x</Text>
      <Text style={[styles.number, { top: 0, left: -30 }]}>{randomNumber2}</Text>
      <Text style={[{ position: 'absolute', top: 5, left: 35, fontSize: 35 }]}>=</Text>
      <Text style={[styles.number, { borderColor: '#636363', top: 0, left: 65 }]}></Text>
      {readys.map((item, index) => (
          <Animated.View
            key={index}
            style={[
              {
                position: 'absolute',
                top: moveAnimations[index].y,
                left: moveAnimations[index].x,
                width: 50,
                height: 50,
              },
            ]}
          >
            <AnswerButton onPress={() => moveButton(index)} text={item} fontSize={25}></AnswerButton>
            {/* <Text key={index} title={item} style={[styles.answer, { fontSize: 28, width: 50, // размер квадрата 
      height: 50,}]} onPress={() => moveButton(index)}> */}
              {/* {item}
            </Text> */}
          </Animated.View>
      ))}
    </View>
    </View>
  );
}

export function RegistrationScreen_Test_4({ navigation }) {
  let endeScreen = 4
  const {randomNumber1, randomNumber2} = twoRandomNumbers();
  const ready_number = randomNumber1 / randomNumber2;
  const readys = shuffleArray([
    Math.floor(Math.random() * 60) + 1,
    Math.floor(Math.random() * 40) + 1,
    ready_number,
  ]);
  const moveAnimations = readys.map((item, index) => new Animated.ValueXY({ x: -125 + index*100, y: 100 }));

  const moveButton = (index) => {

    Animated.spring(moveAnimations[index], {
      toValue: { x: 70, y: 0 },
      useNativeDriver: false, // add this line
    }).start(async () =>{
      await saveFirstInputTest(4, "default",[randomNumber1,":",randomNumber2], readys[index], ready_number)
      navigation.navigate("ПершийВхіднийТест_5")
    });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => false, // Hide the back button
    });
  }, [navigation]);

  return (
    
    <View style={styles.container}>
<Text style={[styles.answer,
        { 
          width: 100,
          position: 'absolute',
          top: 0,
          right: 0,
          borderColor: '#FFFF00',
 }
      ]}
        >{endeScreen}/{vieleFrageTest}</Text>
    <View>
    <Text style={[styles.number, { top: 0, left: -130 }]}>{randomNumber1}</Text>
      <Text style={[{ position: 'absolute', top: 5, left: -60, fontSize: 35 }]}>:</Text>
      <Text style={[styles.number, { top: 0, left: -30 }]}>{randomNumber2}</Text>
      <Text style={[{ position: 'absolute', top: 5, left: 35, fontSize: 35 }]}>=</Text>
      <Text style={[styles.number, { borderColor: '#636363', top: 0, left: 65 }]}></Text>
      {readys.map((item, index) => (
          <Animated.View
            key={index}
            style={[
              {
                position: 'absolute',
                top: moveAnimations[index].y,
                left: moveAnimations[index].x,
                width: 50,
                height: 50,
              },
            ]}
          >
            <AnswerButton onPress={() => moveButton(index)} text={item} fontSize={25}></AnswerButton>
            {/* <Text key={index} title={item} style={[styles.answer, { fontSize: 28, width: 50, // размер квадрата 
      height: 50,}]} onPress={() => moveButton(index)}> */}
              {/* {item}
            </Text> */}
          </Animated.View>
      ))}
    </View>
    </View>
  );
}


export function RegistrationScreen_Test_5({ navigation }) {
  const randomNumber1 = Math.floor(Math.random() * 60) + 1;
  const randomNumber2 = Math.floor(Math.random() * 40) + 1;
  let endeScreen = 5
  const readys = shuffleArray([
">",
"<",
"="
  ]);
  const moveAnimations = readys.map((item, index) => new Animated.ValueXY({ x: -120 + index*100, y: 100 }));

  const moveButton = (index) => {

    Animated.spring(moveAnimations[index], {
      toValue: { x: -20, y: 0 },
      useNativeDriver: false, // add this line
    }).start(async () =>{
      await saveFirstInputTest(5, "vergleichen",[randomNumber1,randomNumber2], readys[index], GrosserKleinerGleich(randomNumber1,randomNumber2))
      navigation.navigate("ПершийВхіднийТест_6")
    });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => false, // Hide the back button
    });
  }, [navigation]);


  return (
    
    <View style={styles.container}>
<Text style={[styles.answer,
        { 
          width: 100,
          position: 'absolute',
          top: 0,
          right: 0,
          borderColor: '#FFFF00',
 }
      ]}
        >{endeScreen}/{vieleFrageTest}</Text>
    <View>
    
      <Text style={[styles.number, { top: 0, left: -125 }]}>{randomNumber1}</Text>
      <Text style={[styles.number, { top: 0, left: 75 }]}>{randomNumber2}</Text>
      <Text style={[styles.number, { borderColor: '#636363',  top: 0, left: -25}]}></Text>
      {readys.map((item, index) => (
          <Animated.View
            key={index}
            style={[
              {
                position: 'absolute',
                top: moveAnimations[index].y,
                left: moveAnimations[index].x,
                width: 50,
                height: 50,
              },
            ]}
          >
            <AnswerButton onPress={() => moveButton(index)} text={item} fontSize={25}></AnswerButton>
            {/* <Text key={index} title={item} style={[styles.answer, { fontSize: 28, width: 50, // размер квадрата 
      height: 50,}]} onPress={() => moveButton(index)}> */}
              {/* {item}
            </Text> */}
          </Animated.View>
      ))}
    </View>
    </View>
  );
}



export function RegistrationScreen_Test_6({ navigation }) {

  let endeScreen = 6
  const randomNumber1 = Math.floor(Math.random() * 1600) + 10;
  const randomNumber2 = Math.floor(Math.random() * 1000) + 10;
  const randomNumber3 = Math.floor(Math.random() * 1000) + 10;
  const ready_number = randomNumber1 + randomNumber2 + randomNumber3;
  console.log("1:", randomNumber1)
  console.log("2:", randomNumber2)
  console.log("3:", randomNumber3)
  const operator1 = "+"
  const operator2 = "-"

  const handleOnSubmitEditing = async (inputValue, CELL_COUNTq) => { // логика для обработки нажатия Enter и получения значения ввода
    console.log('Enter pressed! Value:', inputValue);
    console.log('Enter pressed! Value`:', CELL_COUNTq);
    navigation.navigate("ПершийВхіднийТест_Кінець")

    await saveFirstInputTest(6, "onDefault",[randomNumber1,operator1, randomNumber3,operator2,randomNumber2], parseInt(inputValue),  ready_number)
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => false, // Hide the back button
    });
  }, [navigation]);
  

  return (
    
    <View style={styles.container}>
      <Text style={[styles.answer,
        { 
          width: 100,
          position: 'absolute',
          top: 0,
          right: 0,
          borderColor: '#FFFF00',
 }
      ]}
        >{endeScreen}/{vieleFrageTest}</Text>
      <ColumnAdditionAndAubtraction numbers={[randomNumber1,randomNumber2, randomNumber3]} operations={[operator1, operator2]} onClickEnter={handleOnSubmitEditing}></ColumnAdditionAndAubtraction>
    </View>
  );
}



export default RegistrationScreen_Ende = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => false, // Hide the back button
    });
  }, [navigation]);
  const [data, setData] = useState(null);
  console.log(123, typeof data)

  useEffect(() => {
    // Вызываем вашу функцию загрузки данных
    const fetchData = async () => {
      setTimeout(async() => {
      try {
        const loadedData = await loadFirstInputTest('ПершийВхіднийТест'); // Замените 'your_key' на ваш ключ
        console.log(loadedData)
        setData(loadedData);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }})
    };
    
    fetchData();
  }, []); // Пустой массив зависимостей означает, что useEffect будет вызван только при монтировании компонента
  const go2TheHome = () => {
    navigation.navigate("Home")
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#98EB9E"}}>
      {/* ScrollView для текстового элемента */}
      <ScrollView style={{ flex: 1,
        //  backgroundColor: ""
         }}>

        {data ?(
         Object.keys(data).map((key) => ( 
          <React.Fragment key={key}>
            <WidgetEndeScreen key={key} listData={data[key]}></WidgetEndeScreen>
            <View style={{margin:10}}></View>
        </React.Fragment>
          ))
        ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LottieView
          source={require('./../assets/loading.json')} // Замените на свой файл анимации
          autoPlay
          // ref={animation}
          style={{ width: 700, height: 700 }}
          loop={true}
        />
      </View>
      )}
      </ScrollView>

      {/* Кнопка "Продолжить" */}
      
      <View style={{ backgroundColor: 'white', 
      padding: 10, 
      borderTopLeftRadius: 20, 
      borderTopRightRadius:20, 
      borderColor:"#707070", 
      borderWidth: 2}}>
      <TouchableOpacity onPress={go2TheHome}>
      <View style={{
         flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: 10, 
      backgroundColor: '#BAF1C3',
       borderRadius:20, 
       borderColor: "#707070",
        borderWidth: 2 }}>
      <Text style={{fontSize:35}}>Продовжити</Text>
  <Image source={require('./../assets/play-button.png')} style={{width:50, 
    height:50, 
    backgroundColor: '#BAF1C3', 
    borderRadius:20, 
    borderColor: "#707070"}} />
  </View>
  </TouchableOpacity>
        </View>
        
    </View>
  );
};

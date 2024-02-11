import { View, Text, TouchableOpacity} from 'react-native';
import React, { useRef, useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { styles } from './../../styles/ALLSTYLE.js';
import { calculateWithOperations, loadFirstInputTest, maxKeyTest} from './../../func.js'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';


export const AnswerButton = ({onPress, text, fontSize}) => {
    return(
        <View >
            <TouchableOpacity onPress={onPress} style={[{
            width: 50, // размер квадрата 
            height: 50, // размер квадрата
            margin: 5, // отступ между квадратами 
            backgroundColor: '#fff', // Цвет квадрата
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            borderColor: '#00FF80', // Цвет контура
            borderWidth: 2, // Ширина контура
            borderRadius: 10, // радиус скругления
            alignSelf: 'center'
        }]}>
            
        <Text  style={[{
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: fontSize,
            textAlign: 'center',
            alignSelf: 'center'
        }]}>
            {text}

            </Text>
            </TouchableOpacity>
            </View>
    )
}



export let WriteZahl = ({ lang, onClickEnter }) => {
  let CELL_COUNT = lang;
  const [value, setValue] = useState(''); // ваше значение
  const ref = useRef();

  const getCellOnLayoutHandler = (index) => {
    return ({ nativeEvent }) => {
      // обработчик настройки ячеек
    };
  };
  const enterClick = () => {
    // Передаем значение ввода в родительский компонент
    onClickEnter(value);
  };

;
  // Используйте метод reverse для инвертирования порядка отображаемых символов
  const reversedValue = value.split('').reverse().join('');

  return (
    <View style={[{
      marginLeft: 'auto', // Align to the right edge
    }]}>
    <CodeField
      ref={ref}
      value={value}
      onChangeText={(text) => setValue(text)}
      onSubmitEditing={enterClick} // Добавлен обработчик для события Submit Editing
      cellCount={CELL_COUNT}
      keyboardType="numeric"
      textContentType="oneTimeCode"
      renderCell={({ index, isFocused }) => (
        <Text
          key={index}
          style={{
            width: 50,
            height: 50,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 35,
            textAlign: 'center',
            borderColor: '#00FF80',
            borderWidth: 2,
            borderRadius: 10,
            alignSelf: 'center',
            margin: 1,
          }}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {reversedValue[index] || (isFocused && <Cursor />)}
        </Text>
      )}
    />
    </View>
  );
};




export const ColumnAdditionAndAubtraction = ({numbers, onClickEnter, operations}) => { // Додавання та віднімання стовпчиком
  let CELL_COUNTq = calculateWithOperations(numbers, operations)//сумма

  let CELL_COUNT = CELL_COUNTq.toString().length;//довжина сумми
  const enterClick = (value) => { // Передаем значение ввода в родительский компонент
    let onRichtigVaule = CELL_COUNTq
    onClickEnter(value.split('').reverse().join(''), onRichtigVaule);
  };

  console.log(CELL_COUNT)
const maxLength = Math.max(...numbers.map(num => num.toString().length));// Вычисляем максимальную длину числа в массиве
console.log(maxLength)
const arrayOfArrays = numbers.map(number => Array.from(String(number), digit => parseInt(digit)));// Преобразование в массив массивов чисел
console.log(CELL_COUNT)
const numberes = arrayOfArrays.map(arr => {
    // console.log(padding.concat(arr))
    const padding = Array(CELL_COUNT < arr.length ? 0 : (maxLength - CELL_COUNT) + (CELL_COUNT - arr.length) == 0 ? CELL_COUNT - arr.length : (maxLength - CELL_COUNT) + (CELL_COUNT - arr.length)).fill("");
    // console.log("r",arr)
    console.log(arr)
    return padding.concat(arr);
})  
console.log("111", numberes)
    return(
        <View>
          <View style={{ borderBottomWidth: 3, borderBottomColor: '#707070'}}>
        {numberes.map((row, rowIndex) => (
          <View key={rowIndex} style={[{
            flexDirection: 'row',
        }]}>
            <View style={[{
                width: 30,
                right: 10,
                top:30
                }]}>
            <Text style={[{
                fontSize: 35,
                textAlign: 'center'
                }]}>{operations[rowIndex]}</Text>
          </View>

            {row.map((digit, digitIndex) => (
              <View key={digitIndex} style={[{
                width: 50, // размер квадрата 
                height: 50, // размер квадрата
                margin: 1, // отступ между квадратами 
            }]}>
                <Text style={[styles.number, {
                    margin:0,
                    backgroundColor: digit === "" ? 'transparent' : "#fff",
                    borderColor: digit === "" ? 'transparent' : '#00FF80'

                    }]}>{digit}</Text>
              </View>
              
            ))}
           
          </View>
          
        ))}
        </View>
        
        <WriteZahl lang={CELL_COUNT} onClickEnter={enterClick}></WriteZahl>
      </View>
    )
    

}












// <TouchableOpacity onPress={onPress} style={[{
//   width: 50, // размер квадрата 
//   height: 50, // размер квадрата
//   margin: 5, // отступ между квадратами 
//   backgroundColor: '#fff', // Цвет квадрата
//   justifyContent: 'center',
//   alignItems: 'center',
//   textAlign: 'center',
//   borderColor: '#00FF80', // Цвет контура
//   borderWidth: 2, // Ширина контура
//   borderRadius: 10, // радиус скругления
//   alignSelf: 'center'
// }]}>


// const DataList = [
//   ["", 1, 0],
//   [1, 0, 0],
//   ["", 3, 7],
//   ["", 8, 7]
// ];

// const App = () => {
//   return (
//     <View style={styles.container}>
//       {DataList.map((row, rowIndex) => (
//         <View key={rowIndex} style={styles.row}>
//           {row.map((digit, digitIndex) => (
//             <View key={digitIndex} style={styles.square}>
//               <Text style={styles.text}>{digit}</Text>
//             </View>
//           ))}
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   row: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   square: {
//     width: 30,
//     height: 30,
//     backgroundColor: 'transparent', // Прозрачный цвет фона
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 2,
//   },
//   text: {
//     fontSize: 16,
//   },
// });

// export default App;


const Widgetfor_WidgetEndeScreen = ({ title, style, styleForText }) => {
  return (
    <View style={[stylesFortestEnde.rect8, style, {
      justifyContent: 'center',
      alignItems: 'center',
    }]}>
      <Text style={[{
        fontSize: 35,
        textAlign: 'center',
      }, styleForText]}>{title}</Text>
    </View>
  );
};



export const ColumnAdditionAndAubtractionReader = ({isAntvorteColor, rechnenList, rechnenAntwortetMan, rechnenAntwortetGut}) => { // Додавання та віднімання стовпчиком
const CELL_COUNT = rechnenAntwortetGut;
const numbers = [21, 214, 65];
const operations = [];
for (let i = 0; i < rechnenList.length; i++) {
  const currentItem = rechnenList[i];
  
  if (typeof currentItem === 'number') {
      // numbers.push(currentItem);
  } else if (typeof currentItem === 'string' && currentItem.length === 1) {
    operations.push(currentItem);}}

const maxLength = Math.max(...numbers.map(num => num.toString().length));// Вычисляем максимальную длину числа в массиве
console.log(maxLength, String(CELL_COUNT).length)
const arrayOfArrays = numbers.map(number => Array.from(String(number), digit => parseInt(digit)));// Преобразование в массив массивов чисел
console.log(Array((maxLength - String(rechnenAntwortetMan).length)).fill("").concat(Array.from(String(rechnenAntwortetMan))))
const numberes = arrayOfArrays.map(arr => {
    // console.log(padding.concat(arr))
    const padding = Array(CELL_COUNT < arr.length ? 0 : (maxLength - CELL_COUNT) + (CELL_COUNT - arr.length)).fill("");
    // console.log("r",arr)
    console.log(arr)
    return padding.concat(arr);
})  
// console.log(Math.max(...numbers).toString().length); // Выводим максимальную длину числа в массиве чисел
const [isFirstView, setFirstView] = useState(true);

const toggleView = () => {
  setFirstView(!isFirstView);
};
rechnenAntwortetMan = rechnenAntwortetMan.toString()
const renderFirstView = () => {
  return(
  <View style={stylesFortestEnde.container}>
  <Widgetfor_WidgetEndeScreen title={rechnenList[0].toString().length >= 2 ? rechnenList[0].toString().substring(0, 2)+".." : rechnenList[0]} styleForText={{fontSize: 25}}/>
  <Text style={stylesFortestEnde.loremIpsum}>{rechnenList[1]}</Text>
  <Widgetfor_WidgetEndeScreen title={'...'} styleForText={{fontSize: 25}}/>
  <Text style={stylesFortestEnde.loremIpsum}>=</Text>
  <Widgetfor_WidgetEndeScreen
    title={rechnenAntwortetMan.toString().length >= 2 ? rechnenAntwortetMan.toString().substring(0, 2)+".." : rechnenAntwortetMan}
    style={{ 
      borderColor: isAntvorteColor,
      borderWidth: 3,
  }
  } styleForText={{fontSize: 25}}
  />
</View>)
}

const renderSecondView = () => (
  <View style={[stylesFortestEnde.container,{alignItems: "center", flexDirection: 'colum', 
  justifyContent: "center"}]}>
  <View style={{ borderBottomWidth: 3, borderBottomColor: '#707070' }}>
    {numberes.map((row, rowIndex) => (
      <View key={rowIndex} style={[{ flexDirection: 'row' }]}>
        <View
          style={[
            {
              width: 30,
              right: 10,
              top: 30,
            },
          ]}
        >
          <Text
            style={[
              {
                fontSize: 35,
                textAlign: 'center',
              },
            ]}
          >
            {operations[rowIndex]}
          </Text>
        </View>

        {row.map((digit, digitIndex) => (
          <View
            key={digitIndex}
            style={[
              {
                width: 60,
                height: 60,
                margin: 1,
              },
            ]}
          >
            <Widgetfor_WidgetEndeScreen
            key={digitIndex}
              style={
                {
                  margin: 0,
                  backgroundColor: digit === '' ? 'transparent' : '#fff',
                  borderColor: digit === '' ? 'transparent' : 'rgba(112,112,112,1)',
                }}
                title={digit}
            >
            </Widgetfor_WidgetEndeScreen>
          </View>
        ))}
      </View>
    ))}
  </View>
  <View style={{ flexDirection: 'row', textAlign: 'center' }}>
  <View style={{width:35}}></View>
  {Array((maxLength < String(rechnenAntwortetMan).length ? String(rechnenAntwortetMan).length - maxLength : maxLength - String(rechnenAntwortetMan).length )).fill("").concat(Array.from(String(rechnenAntwortetMan))).map((row, rowIndex) => (
    //  console.log(row)
     <Widgetfor_WidgetEndeScreen key={rowIndex} title={row} style={{margin:0 }}></Widgetfor_WidgetEndeScreen>
     
     ))}

  </View>
  </View>
);

return (
  <TouchableOpacity onPress={toggleView}>
    {isFirstView ? renderFirstView() : renderSecondView()}
  </TouchableOpacity>
);
};
    







export const WidgetEndeScreen = ({listData }) => {
  if (listData["type"] == "default"){
    const num1 = listData["task"][0]
    const num2 = listData["task"][2]
    const antvorteGut = listData["antvorteGut"]
    const antworteMann = listData["antvorteMan"]
    const operation = listData["task"][1]
    return (
      <View style={stylesFortestEnde.container}>
        <Widgetfor_WidgetEndeScreen title={num1} />
        <Text style={stylesFortestEnde.loremIpsum}>{operation}</Text>
        <Widgetfor_WidgetEndeScreen title={num2} />
        <Text style={stylesFortestEnde.loremIpsum}>=</Text>
        <Widgetfor_WidgetEndeScreen
          title={antworteMann}
          style={{ 
            borderColor: antvorteGut === antworteMann ? 'green' : 'red',
            borderWidth: 3,
        }
        }
        />
      </View>
    );
  } else if(listData["type"]=="vergleichen"){
    const num1 = listData["task"][0]
    const num2 = listData["task"][1]
    const antvorteGut = listData["antvorteGut"]
    const antworteMann = listData["antvorteMan"]
    return (
      <View style={[stylesFortestEnde.container, {justifyContent: 'center'}]}>
        <Widgetfor_WidgetEndeScreen title={num1} />
        <Widgetfor_WidgetEndeScreen
          title={antworteMann}
          style={{ 
            borderColor: antvorteGut === antworteMann ? 'green' : 'red',
            borderWidth: 3,
            marginHorizontal:35,

        }
        }
        />
        <Widgetfor_WidgetEndeScreen title={num2} />
      </View>)
  } else if(listData["type"]=="onDefault"){
    return(
      <View>
      <ColumnAdditionAndAubtractionReader isAntvorteColor={listData["antvorteGut"] === listData["antvorteMan"] ? 'green' : 'red'} rechnenList={listData["task"]} rechnenAntwortetMan={listData["antvorteMan"]} rechnenAntwortetGut={listData["antvorteGut"]}></ColumnAdditionAndAubtractionReader>
      </View>
    )

  }
  // console.log(listData)
  // const num1 = listData["task"][0]
  // const num2 = listData["task"][2]
  // const antvorteGut = listData["antvorteGut"]
  // const antworteMann = listData["antvorteMan"]
  // const operation = listData["task"][1]
  // return (
  //   <View style={stylesFortestEnde.container}>
  //     <Widgetfor_WidgetEndeScreen title={num1} />
  //     <Text style={stylesFortestEnde.loremIpsum}>{operation}</Text>
  //     <Widgetfor_WidgetEndeScreen title={num2} />
  //     <Text style={stylesFortestEnde.loremIpsum}>=</Text>
  //     <Widgetfor_WidgetEndeScreen
  //       title={antworteMann}
  //       style={{ 
  //         borderColor: antvorteGut === antworteMann ? 'green' : 'red',
  //         borderWidth: 3,
  //     }
  //     }
  //     />
  //   </View>
  // );
};

export const stylesFortestEnde = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
   //  alignItems: 'center',
    backgroundColor: "#3EE665",
    borderRadius:20, 
    borderColor: "#707070",
   borderWidth: 2,
   flex: 100
   
  },
  rect8: {
    
    backgroundColor: "rgba(252, 252, 252,1)",
    borderWidth: 2,
    borderColor: "rgba(112,112,112,1)",
    margin: 5,
    overflow: "visible",
    borderRadius: 14,
    width: 60,
    height: 60,
    fontSize: 35,
    textAlign: 'center',
    justifyContent: 'center',
  },
  loremIpsum: {
    color: "#121212",
    overflow: "visible",
    fontSize: 50,
    textAlign: "center",
  }
});


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
  let CELL_COUNTq = calculateWithOperations(numbers, operations)

  let CELL_COUNT = CELL_COUNTq.toString().length;
  const enterClick = (value) => { // Передаем значение ввода в родительский компонент
    let onRichtigVaule = CELL_COUNTq
    onClickEnter(value.split('').reverse().join(''), onRichtigVaule);
  };


const maxColumnLength = CELL_COUNT; // Вычисляем максимальную длину числа в массиве
const numberes = numbers.map(number => { // Преобразуем каждое число в массив цифр с дополнительными нулями для выравнивания
  const digits = number.toString().split('').map(digit => parseInt(digit)); // Разбиваем число на массив цифр
  const padding = Array(maxColumnLength - digits.length).fill(""); // Заполняем пустыми значениями   // Вычисляем количество дополнительных нулей для выравнивания
  return padding.concat(digits);   // Объединяем массив дополнительных нулей с массивом цифр
});
// console.log(Math.max(...numbers).toString().length); // Выводим максимальную длину числа в массиве чисел
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




export const WidgetEndeScreen =({}) => {
  // const antworteList = await loadFirstInputTest("ПершийВхіднийТест")
  return (
    <View style={stylesFortestEnde.container}>
      <View style={stylesFortestEnde.rect8}></View>
      <Text style={stylesFortestEnde.loremIpsum}>+</Text>
      <View style={stylesFortestEnde.rect8}></View>
      <Text style={stylesFortestEnde.loremIpsum}>=</Text>
      <View style={stylesFortestEnde.rect8}></View>
    </View>
  );
}

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
    height: 60
  },
  loremIpsum: {
    color: "#121212",
    overflow: "visible",
    fontSize: 50,
    textAlign: "center",
  }
});


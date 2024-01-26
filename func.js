import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useRef, useState, useEffect} from 'react';
// Сохранение данных
const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Ошибка сохранения данных:', error);
  }
};

// Получение данных
const loadData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
  }
};


export const calculateWithOperations = (numbers, operations) => {
  if (numbers.length !== operations.length + 1) {
    console.error('Неправильное количество чисел или операций');
    return null;
  }

  let result = numbers[0];

  for (let i = 0; i < operations.length; i++) {
    const number = numbers[i + 1];

    switch (operations[i]) {
      case '+':
        result += number;
        break;
      case '-':
        result -= number;
        break;
      case '*':
        result *= number;
        break;
      case '/':
        // Добавляем проверку деления на ноль
        if (number === 0) {
          console.error('Ошибка: деление на ноль');
          return null;
        }
        result /= number;
        break;
      default:
        console.error(`Неизвестная операция: ${operations[i]}`);
        return null;
    }
  }

  return result;
};

// Функция для очистки данных прогресса уровней
export const clearFirstInputTest = async (nameTest) => {
  try {
    // Очищаем данные для указанного уровня
    await saveData(nameTest, {});
    console.log('Данные успешно очищены');
  } catch (error) {
    console.error('Помилка очищення даних:', error);
  }
};




// Функция для сохранения прогресса уровней
export const saveFirstInputTest = async (level, task, antvorteMan, antvorteGut) => {
  try {
    // Загружаем текущие данные или создаем новый объект, если данных нет
    const levelProgress = (await loadData('ПершийВхіднийТест')) || {};

    // Обновляем данные для указанного уровня
    levelProgress[parseInt(level)] = {task, antvorteMan, antvorteGut};

    // Выводим данные в консоль перед сохранением
    // console.log('Данные перед сохранением:', levelProgress);

    // Сохраняем обновленные данные
    await saveData('ПершийВхіднийТест', levelProgress);
  } catch (error) {
    console.error('Помилка збереження процессу:', error);
  }
};

// Функция для загрузки прогресса уровней
export const loadFirstInputTest = async (nameTest) => {
  try {
    // Загружаем текущие данные или возвращаем пустой объект, если данных нет
    const loadedData = await loadData(nameTest);

    // Выводим данные в консоль после загрузки
    // console.log('Данные после загрузки:', loadedData);

    return loadedData || {};
  } catch (error) {
    console.error('Помилка завантаження прогрессу:', error);
    return {};
  }
};


export function twoRandomNumbers() {
  let randomNumber1, randomNumber2;

  while (true) {
    randomNumber1 = Math.floor(Math.random() * 60) + 1;
    randomNumber2 = Math.floor(Math.random() * 40) + 1;
    let rn = randomNumber1 / randomNumber2;
    console.log("twoRandomNumbers:"+rn);
    if(randomNumber2 == 1 || randomNumber2 == 2) {

    } else if(rn % 1 === 0){
      console.log("twoRandomNumbers: true");
      break;
    }
  }

  return {randomNumber1, randomNumber2};
}




export function GrosserKleinerGleich(number1, number2) {
  if (number1 > number2) {
    return '>';
  } else if (number1 < number2) {
    return '<';
  } else {
    return '=';
  }
}



// // Пример использования
// saveLevelProgress('уровень_1', 'пройден');
// saveLevelProgress('уровень_2', 'пройден');
// saveLevelProgress('уровень_3', 'не пройден');

// const levelProgress = await loadLevelProgress();
// console.log(levelProgress); // Вывод: { уровень_1: 'пройден', уровень_2: 'пройден', уровень_3: 'не пройден' }



export function maxKeyTest(keysList){

let maxKey = null;
let maxObject = null;

// Итерируемся по объекту
for (const key in keysList) {
  if (!maxKey || key > maxKey) {
    maxKey = key;
    maxObject = keysList[key];
  }
}

// Проверяем, были ли найдены значения
if (maxObject) {
  return parseInt(maxKey)+1
} else {
  return 1
}}




export const getEndeLevels = (nameFrage) => {
  const [zahlFrage, setZahlFrage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const testName = await loadFirstInputTest(nameFrage);
        console.log(testName);
        const maxKey = maxKeyTest(testName);
        setZahlFrage(maxKey);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [nameFrage]); // Зависимость массива указывает, что useEffect должен выполниться при изменении nameFrage

  if (zahlFrage === null) {
    // Пока данные не загружены, можно отобразить заглушку или спиннер
  }

  return zahlFrage
};















export function shuffleArray(array) {
    let currentIndex = array.length;
  
    // Пока остаются элементы для перемешивания
    while (currentIndex !== 0) {
      // Выбираем случайный индекс
      const randomIndex = Math.floor(Math.random() * currentIndex);
  
      // Уменьшаем текущий индекс
      currentIndex--;
  
      // Обмениваем элементы местами
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  
    return array; // Возвращаем перемешанный массив
  }
  
import React from 'react';
import { Text, View, Button } from 'react-native';
import { clearFirstInputTest } from '../func';



const InfoApp = ({ navigation }) => {
  const progressExit = () => {
    clearFirstInputTest("ПершийВхіднийТест");
    navigation.navigate("Start")
}

  return (
    <View>
      <Text>infoApp</Text>
      <Button onPress={progressExit} title="Зтерти прогресс"/>
    </View>
  );
}

export default InfoApp;
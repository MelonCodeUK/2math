import React from 'react';
import { Text, View, Button } from 'react-native';
import { clearFirstInputTest } from '../func';

const progressExit = () => {
    clearFirstInputTest("ПершийВхіднийТест");
}

const InfoApp = ({ navigation }) => {
  return (
    <View>
      <Text>infoApp</Text>
      <Button onPress={progressExit} title="Зтерти прогресс"/>
    </View>
  );
}

export default InfoApp;
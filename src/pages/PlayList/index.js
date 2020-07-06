import React from "react";
import * as ScreenOrientation from 'expo-screen-orientation';
import {View,TextInput} from 'react-native';

async function changeScreenOrientation(){
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
    );
}

export default function PlayList() {
    changeScreenOrientation();
  
     
    return (
      <View>
          <TextInput placeholder="aqui"></TextInput>
      </View>
    );
  }
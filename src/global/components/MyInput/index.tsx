import React, { useEffect, useState } from 'react';

import * as S from './styles';

import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


interface MyInputProps {
  label: string;
}


function MyInput({ label }: MyInputProps) {
  const [isFocus, setIsFocus] = useState(false);
  const titlePosition = useSharedValue(0);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: titlePosition.value}],
    }
  });


  function inFocus() {
    setIsFocus(true);
    titlePosition.value = withTiming(RFValue(-25), {
      duration: 300,
    });
  }

  function outFocus() {
    setIsFocus(false);
    titlePosition.value = withTiming(0, {
      duration: 300,
    });
  }


  return(
    
    <S.InputSingle focus={isFocus}>

      <S.Input 
        onFocus={inFocus} 
        onBlur={outFocus} 
        blurOnSubmit
      />

      <S.InputLabel type='filled' focus={isFocus} style={titleStyle}>
        {label}
      </S.InputLabel>
      
    </S.InputSingle>
  );
}

export { MyInput }
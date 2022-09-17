import React, { useState } from 'react';

import * as S from './styles';

function MyInput() {
  const [isFocus, setIsFocus] = useState(false);

  return(
    
    <S.InputSingle focus={isFocus}>

      <S.Input 
        onFocus={() => setIsFocus(true)} 
        onBlur={() => setIsFocus(false)} 
        blurOnSubmit
      />

      <S.InputLabel
        focus={isFocus}
      >
        First Name
      </S.InputLabel>
      
    </S.InputSingle>
  );
}

export { MyInput }
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Image, TextInput, Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const Sanitize = (txt, setter) =>{
  if (txt.length === 0 || Number.isNaN(txt, setter)) {
    setter = 0;
    return 0;
  }
  else{
    return parseFloat(txt);
  }
};


const GPA = () =>{
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [total, setTotal] = useState(0);

  return (
  <View style = {styles.container}>

  <Image />

<Text> course GPA
  </Text>
<TextInput style={{
height: 40,
borderColor: 'gray',
borderWidth: 1,
width: 130,
marginBottom: 5,

}}
defaultValue="0"
value={num1.toString()}
onChangeText={
  (txt) => {
    setNum1(txt);
  }}/>

<TextInput style={{
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  width: 130,
  marginBottom: 5,
  
  }}
  defaultValue="0"
  value={num2.toString()}
  onChangeText={
    (txt) => {
      setNum2(txt);
    }}/>

    <TextInput style={{
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  width: 130,
  marginBottom: 5,
  
  }}
  defaultValue="0"
  value={num3.toString()}
  onChangeText={
    (txt) => {
      setNum3(txt);
    }}/>

    <Button
            onPress={() => {
              

              if(num1 > 100 || num2 > 100 || num3 > 100){
                setTotal("error");
              }
              else{


               console.log((Sanitize(num1, setNum1) + Sanitize(num2, setNum2) + Sanitize(num3, setNum3)) / 3);
               

                if(((Sanitize(num1, setNum1) + Sanitize(num2, setNum2) + Sanitize(num3, setNum3)) / 3) >= 90){
                  setTotal("4.0");
                }
                else if(((Sanitize(num1, setNum1) + Sanitize(num2, setNum2) + Sanitize(num3, setNum3)) / 3) > 85){
                  setTotal("3.7");
                }
                else if(((Sanitize(num1, setNum1) + Sanitize(num2, setNum2) + Sanitize(num3, setNum3)) / 3) > 80){
                  setTotal("3.3");
                }
                else if(((Sanitize(num1, setNum1) + Sanitize(num2, setNum2) + Sanitize(num3, setNum3)) / 3) > 75){
                  setTotal("3.0");
                }
                else if(((Sanitize(num1, setNum1) + Sanitize(num2, setNum2) + Sanitize(num3, setNum3)) / 3) > 70){
                  setTotal("2.7");
                }
                else if(((Sanitize(num1, setNum1) + Sanitize(num2, setNum2) + Sanitize(num3, setNum3)) / 3) > 65){
                  setTotal("2.3");

                }
                else if(((Sanitize(num1, setNum1) + Sanitize(num2, setNum2) + Sanitize(num3, setNum3)) / 3) > 60){
                  setTotal("2.0");
                }
                else if(((Sanitize(num1, setNum1) + Sanitize(num2, setNum2) + Sanitize(num3, setNum3)) / 3) > 55){
                  setTotal("1.3");
                }
                else if(((Sanitize(num1, setNum1) + Sanitize(num2, setNum2) + Sanitize(num3, setNum3)) / 3) > 50){
                  setTotal("1.0");
                }
                else{
                  setTotal("0.0");
                }

              }
            }}
            title="Calculate GPA"
          />
          <View>
            <Text>
            Result =
          {' your GPA is '}
          {total}
        </Text>
      </View>
      </View>
  );

};

export default GPA;
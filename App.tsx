import { StatusBar } from 'expo-status-bar';

import React, {useState} from 'react';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
      //    get \/      set \/
  const [outputText,  onChangeText]= useState('Enter data to transmit to server');
  
  
  return (
    <View style={styles.container}>
     <Text> <h1> Welkommen!</h1> </Text>
      
      
      <Button style= {styles.button} 
      title="Click me to search!" 
      
            onPress={ async function Anon(req,res){ 
               console.log(outputText);
            
        
        
           const settings={  
             method:'POST',
             body: JSON.stringify({
                                    outputText
                                  }),
          // no-cors as a mode was giving me trouble: unexpected end of input errors.
          
          headers: {
             
              Accept: 'application/json',
              'Content-Type': 'application/json',} 
              }
                                        // Must put IP instead of LocalHost because when the iphone connects it needs an address instead of "refer to myself"
              const getRes= await fetch('http://192.168.1.2:4000',settings)
        try{                             ////////////////// leave port same chang # to your IPV4 (ipconfig)
        // check this block for errors(try)
          const outputText = await getRes.json();
          outputText;
          console.log(outputText);
       
          

          
        }
        // if error is found in try block execute below code (catch)
        catch(error)  {
          console.log(error);
          alert(error);
         }
      
        
        }
        
     
             } /> 
      
      
    
     
   

  <TextInput
//set default place holder value
  value={outputText}

//on input change default text into user input
  onChangeText={text => onChangeText(text)}
  
// when user clicks box (on focus) delete default text
  onFocus = {text => onChangeText("")}

// text allign: center necesary to make first few text characters visible on Iphone SE
  style={{ height: 40, borderColor: 'red', borderWidth: 10, textAlign: 'center'}}
     
        
              /> 
    
    
      
     
    </View>
  );
}
// just css javascript'ed
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
color:'black',
  },


});

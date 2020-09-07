import { StatusBar } from 'expo-status-bar';

import React, {useState} from 'react';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText,  onChangeText]= useState('Enter a media title');
  
  
  return (
    <View style={styles.container}>
    
      
      
      <Button color="green" title="Click me to search!" 
      
      onPress={ async function Anon(){ 
        try{
        const proxyurl = 'https://cors-anywhere.herokuapp.com/'
        let response = await fetch
              (proxyurl+ 'http://andpermission.byethost5.com/PermissionList.php?i=1',{
              
                headers: {
                  'Content-Type': 'application/json',
                }
               // body: JSON.stringify(response.body),
               
              })
        
              
         
          console.log(JSON.stringify(response));
          console.log(outputText);
        
        return response.body;
      }
        
          catch (error){
            console.error(error)}
        
        
        }
                
      
       
        
      
      
      
        
             } /> 
      
      
    
     
   

  <TextInput
//set default place holder value
  value={outputText}
//on input into text box change text
  onChangeText={text => onChangeText(text)}
  
  // when user clicks box delete default text
  onFocus = {text => onChangeText("         ")}

        // text allign necesary to make first few text characters visible on Iphone SE
     style={{ height: 40, borderColor: 'red', borderWidth: 1, textAlign: 'left'}}
     
        
              /> 
    
    
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
// this displays the search

// https://flixable.com/?s=abc

// the displays the pictures

// fetch("https://occ-0-116-114.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSuRZFdjY_M38bdyTNxyqzasRUdvqBO-1gOeRGQppAOiSA84O3MWL3BUAMybJ-tzHM-USD0aKUhK1u78v9i9QfZE9R0.jpg?r=6c6", {
//   "referrer": "https://flixable.com/?s=busan",
//   "referrerPolicy": "no-referrer-when-downgrade",
//   "body": null,
//   "method": "GET",
//   "mode": "cors"
// });
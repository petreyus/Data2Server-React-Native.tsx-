import { StatusBar } from 'expo-status-bar';

import React, {useState} from 'react';

import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

// I have to use image background to work on IOS regular style prop with backgroundImage will not work on ios
import { ImageBackground } from 'react-native';

//relative file path 2 clicks (..) from root
import relax1 from '../reactapp/public/breath1.jpeg'
import relax2 from '../reactapp/public/breath2.jpeg'



export default function App() {
  
//     get \/       set \/                    current \/ 
const [outputText,  onChangeText]=            useState('Enter data to transmit');

const [currentBackground,  changeBackground]= useState(relax1);

const [button,  setButton]=                   useState('Analyze');  

const [opacity,  setOpacity]=                 useState(0);  

function testbuttonPressed(){
    // back ground on press change.
    changeBackground(relax2);
    setButton("Press me to start");                
    setOpacity(1);
  }

  
  
  
  return (
    <View style={styles.container}>
     <Text> "Hallo welt"</Text>

     
<ImageBackground
  source={currentBackground}
  style={{width: '100%', height: '100%'}}
  > 
  {/* I had to nest this view inside the image background to center the button on top of the background */}
            <View style={styles.centerButton}>
              
              
                  <TouchableOpacity
                    style={styles.button3}
                    onPress={testbuttonPressed}
                                      >
                    <Text> {button} </Text>
            
                  </TouchableOpacity>


            </View>


</ImageBackground>


<TouchableOpacity
        style={styles.button2}
        onPress={testbuttonPressed}
                             // title= {button} 
    
     >
        <Text>{button} </Text>
 
 </TouchableOpacity>

{/* <Button 
// does not work -> style= {styles.button2}

color='black'
title="Analyze" 
              onPress={ async function benchMark(){} } /> */}
              





    
      <Button 
      style= {styles.button} 
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
              try{
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
    backgroundColor:'black',
  },

  button2: {
    alignItems: "center",
    justifyContent: 'center',
    
    backgroundColor: "#DDDDDD",
    padding: 10,
   // color:'red',
      },

      button3: {
        alignItems: "center",
        justifyContent: 'center',
        opacity:0,
        backgroundColor: "clear",
        padding: 10,
       // color:'red',
        backgroundColor: "#DDDDDD",   
      },

  centerButton: {
        position: 'absolute', 
        top: 0, left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center'},

});



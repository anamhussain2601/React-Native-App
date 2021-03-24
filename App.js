import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const[outputText, setOutputText] = useState('Open up App.js to start working on you r app!')
  return (
    <View style={{padding: 80}} >
       <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}  >
        <TextInput placeholder='Course Goal' style={{ width:'80%',  borderColor:'black', borderWidth: 1}}/>
        <Button title='ADD' />
      </View>
      <View >
      
      </View>
      
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

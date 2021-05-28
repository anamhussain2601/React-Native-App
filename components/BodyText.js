import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'; 

const BodyText = props => <Text style={styles.body}>{props.children}</Text>

const styles = StyleSheet.create({
    body: {
        fontFamily:'open-sans'
    }
})

export default BodyText
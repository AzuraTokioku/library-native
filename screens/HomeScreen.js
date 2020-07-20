import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

function HomeScreen({navigation, route}) {
    
    function navigateToLibrairy() {
        navigation.reset({
            index: 0,
            routes: [
                {name: "librairy"}
            ]
        });
    }

    return(
        <View style={styles.container}>
            <Entypo name="book" size={350} color="black" />
            <Button title="Entre ,Mais chut on est dans une bibliothèque quand même !" onPress={navigateToLibrairy} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
export default HomeScreen;
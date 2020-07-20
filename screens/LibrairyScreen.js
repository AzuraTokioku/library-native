import React from 'react';
import { Button,StyleSheet, Text,View} from 'react-native';


import SearchBar from '../components/SearchBar'

function LibrairyScreen({navigation, route}) {
    return(
        <View style={styles.container}>
            <SearchBar/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    searchBar: {
      margin : 10,
    }
  });
  

export default LibrairyScreen;
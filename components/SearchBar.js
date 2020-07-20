import React from 'react';
import { Button,StyleSheet, Text,View} from 'react-native';
import { Input } from 'react-native-elements';

function SearchBar({navigation, route}) {

    return(
        <View style={styles.container}>
            <Input style={styles.searchBar} placeholder="Entre ton bouquin"/>
            <Button title="Chercher" color='black'/>
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
  

export default SearchBar;
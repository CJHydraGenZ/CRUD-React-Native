import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, YellowBox, FlatList, Button, Alert } from 'react-native';
import { styles } from './component/styles';

import axios from 'axios'
YellowBox.ignoreWarnings(['Remote debugger']);




export default function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)



  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => {

        setData(json)
        setLoading(false)
      }
      )

  }, [])
  console.log(data);

  //! Bug Delete
  const Delete = (id) => {
    // e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
      method: 'DELETE',
    })
    Alert.alert(`Berhasil Menghapus  ${id}`)
  }




  return (
    <View style={styles.container}>
      {
        loading ? <Text>Loading...</Text> :
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <View style={styles.container}>
                  <Text>{item.title}</Text>
                  <Button title='click' onPress={() => { Alert.alert('hallo world') }} />
                  <Button color='red' onPress={() => Delete(item.id)} title='delete' />
                </View>
              )
            }}
          />
      }
      {/* {data.length ? <Text>Loading</Text> : data.map(d => {
        <View key={d.id}>
          <Text>{d.title}</Text>
        </View>
      })} */}
      {/* <StatusBar style="auto" /> */}
    </View >
  );
}


import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, ActivityIndicator, View, TextInput, TouchableOpacity, Button, FlatList, Image } from 'react-native';

export default function App() {

  const [term, setTerm] = useState('');
  const [limit, setLimit] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadMusic = async () => {

    setIsLoading(true);

    let search = '';
    let count = term.trim().split(/\s+/).length;
    if (count == 1) {
      search = term;
    } else {
      search = term.replace(/ /g, '+')
    }

    const url = `https://itunes.apple.com/search?term=${search}&limit=${limit}`;
    const response = await fetch(url, { method: 'GET' })

    const _data = await response.json();
    setData(_data.results);


    setIsLoading(false);
  }



  return (
    <View style={styles.container}>
      <View
        style={{ height: '20%', width: '100%'}}>
        <TextInput value={term} onChangeText={text => setTerm(text)} placeholder='Artist name' style={{ paddingHorizontal: 20, width: '100%', height: 40, backgroundColor: '#ccc', borderRadius: 20 }} />
        <TextInput value={limit} onChangeText={text => setLimit(text)} placeholder='Limit results' style={{ paddingHorizontal: 20, width: '100%', height: 40, backgroundColor: '#ccc', borderRadius: 20, marginTop: 12 }} />
        <View style={{ marginTop: 12 }}>
          <Button title='Search' onPress={loadMusic} />
        </View>
      </View>
      <View style={{ height: '80%', width: '100%', padding: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ebebeb' }}>

        {
          isLoading ?
            (
              <ActivityIndicator size='large' color='#99cc00' />
            ) :
            (
              <View>
                {
                  data.length > 0 ?
                    (
                      <FlatList
                        data={data}
                        keyExtractor={item => item.trackId.toString()}
                        renderItem={itemData =>
                          (
                            <View style={{width:'100%', flexDirection:'row', padding:12, backgroundColor:'#fff', borderRadius:10, marginTop:10}}>
                              <View style={{width:'25%'}}>
                                <Image source={{uri: itemData.item.artworkUrl100}} style={{width:100, height:100}}/>
                              </View>
                              <View style={{paddingLeft:20, width:'50%'}}>
                                <Text style={{fontSize:18}}>{itemData.item.trackName}</Text>
                                <Text style={{fontSize:12, fontWeight:'700'}}>{itemData.item.collectionName}</Text>
                              </View>
                              <View style={{width:'25%', backgroundColor:'#0099cc', alignItems:'center', justifyContent:'center', borderRadius:10}}>
                                <Text style={{fontSize:22, fontWeight:'700', color:'#ffffff'}}>${itemData.item.trackPrice}</Text>
                              </View>
                            </View>
                          )
                        }
                      />
                    ) :
                    (
                      <Text>No data to display</Text>
                    )
                }
              </View>
            )
        }

      </View>
      <StatusBar style="auto" />
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

/*import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}*/
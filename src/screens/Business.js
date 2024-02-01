import { React, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getData } from '../../services/serverservices'
import { NativeBaseProvider, Box, FlatList, Image } from "native-base";
import moment from 'moment/moment';

export default function Business() {
  const [newsData, setNewsData] = useState([])

  const fetchNews = async () => {
    var result = await getData('business');
    setNewsData(result);
   
  };


  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <NativeBaseProvider>
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>Business News</Text>
        </View>
        <FlatList
          data={newsData}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <View>
                <Image
                width={500}
                height={200}
                resizeMode={"cover"}
                 source={{
                  uri: item.urlToImage ? item.urlToImage : "data:image/jpeg;base64,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",
                }} alt="Alternate Text"  />
              </View>
              <View >
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View >
                <Text style={styles.description}>{item.description}</Text>
              </View>
              <View >
                <Text style={styles.date}>{moment(item.publishedAt).format('LLL')}</Text>
              </View>
            </View>


          )}
          keyExtractor={(item) => item.id}
        />


      </View>

    </NativeBaseProvider>



  )
}

const styles = StyleSheet.create({
  container: {

    padding: 11,
    height: 65,
    borderWidth: 1,
    borderColor: 'gray',

  },
  text: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 10

  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop:5,
    textAlign:"justify"
  },
  description: {
    marginTop: 10,
    fontSize:17,
    textAlign:"justify"
  },
  date:{
    fontSize:12
  }
})
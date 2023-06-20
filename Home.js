/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "./redux/actions";


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const Home = () => {

  const users = useSelector((state) => state.users.users)
  const loader = useSelector((state) => state.users.loading)
  const dispatch = useDispatch();

  
  const renderUserCard = ({ item, index }) => {
    return (
      <View style={styles.userCard} key={index}>
        <Image style={styles.userImg} resizeMode='contain' source={{ uri: item?.image || 'https://robohash.org/hicveldicta.png' }} />
        <Text style={styles.username}>{`${item?.firstName} ${item?.lastName}`}</Text>
      </View>
    )
  }

  return (

    <SafeAreaView>

      <FlatList data={users} renderItem={renderUserCard}

        ListFooterComponent={<TouchableOpacity style={styles.button} onPress={() => dispatch(getUserList())}>
          <Text>Add users</Text>
        </TouchableOpacity>}
      />

      {loader && <ActivityIndicator size={'large'} />}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userCard: {
    width: '100%',
    height: 80,
    backgroundColor: '#c2c2c2',
    margin: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  userImg: {
    width: 70,
    height: 70
  },
  username: {
    marginLeft: 10
  },
  button: {
    width: '50%',
    height: 35,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20
  }
});

export default Home;

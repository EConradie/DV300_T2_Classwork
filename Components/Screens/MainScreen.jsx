import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderView } from '../Views/HeaderView'
import { Input } from '../Input'
import { MainCard, SmallCard } from '../Cards'

export const MainScreen = () => {
    return (
        <View style={MainStyles.container}>
            <View style={MainStyles.header}>
            <HeaderView />
            </View>
            <View style={MainStyles.input}>
              <Input />
            </View>
            <Text style={MainStyles.title}>Continue Course</Text>
            <MainCard />
            <Text style={MainStyles.title}>Top Courses</Text>
            <View style={MainStyles.cardContainer}>
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </View>
        </View>
    )
}

const MainStyles = StyleSheet.create({
 container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginTop: 65,
    marginLeft: 30,
    marginRight: 30,
    gap: 25
  },
  header: {
    gap: 0
  },
  input: {
    gap: 5
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 30
  }
})




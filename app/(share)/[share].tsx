import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Share = () => {
    const { share } = useLocalSearchParams()
  return (
    <View>
      <Text>Shear
      {share}
      </Text>
    </View>
  )
}

export default Share

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

const AppProvider = (
    { children }: { children: React.ReactNode }
) => {
  return (
    <BottomSheetModalProvider>
        {children}
    </BottomSheetModalProvider>
  )
}

export default AppProvider

const styles = StyleSheet.create({})
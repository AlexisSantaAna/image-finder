import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { colors } from '../constants/colors'

const Loader = () => {
  return (
    <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.primary} />
    </View>
  )
}

export default Loader
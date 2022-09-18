import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Card from './Card'
import { styles } from './styles'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>IMAGE FINDER</Text>
            <Card style={styles.input}>
                <TextInput placeholder='Search Image...'/>
            </Card>

        </View>
    )
}

export default Header
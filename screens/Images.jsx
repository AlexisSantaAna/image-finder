import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import Loader from '../components/Loader'
import { styles } from './styles'

const Images = ({ url }) => {
    const [loading, setLoading] = useState(false)

    const onHandleLoading = () => {
        setLoading(true)
    }

    const onHandleLoadingEnd = () => {
        setLoading(false)
    }

    let content = loading ? <Loader /> : null

    return (
        <View style={styles.startContainer}>
            <Text style={styles.startText}>Here are the images</Text>
            {content}
            <Image onLoadStart={onHandleLoading} onLoadEnd={onHandleLoadingEnd} source={{ uri: url }} style={{ width: 350, height: 450 }} />

        </View>
    )
}

export default Images
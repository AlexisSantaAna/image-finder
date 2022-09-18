import { View, Text, TextInput } from 'react-native'
import Card from './Card'
import { styles } from './styles'

const Header = ({ setImage, setConfirmed, image }) => {
    const onHandleSubmit = () => {
        setConfirmed(image)
        setImage("")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>IMAGE FINDER</Text>
            <Card style={styles.input}>
                <TextInput value={image} onSubmitEditing={() => onHandleSubmit()} onChangeText={(e) => setImage(e)} placeholder='Search Image...' style={styles.inputText}/>
            </Card>
        </View>
    )
}

export default Header
import { View } from "react-native";

export default function displayData () {
    return(
        <>
        <View>
            <Text>Data Description</Text>
            <Image
                style={styles.tinyLogo}
                source={require('@expo/snack-static/react-native-logo.png')}
                
            />
        </View>
        </>
    );
}
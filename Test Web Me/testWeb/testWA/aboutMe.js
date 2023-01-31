import { StyleSheet, View } from "react-native";

export default function aboutMe () {
    return(
        <>
            <View style={styles.content}>
                <Text>
                    <h1>...Fancy About Me...</h1>
                    <p>as each day backs awy, we grow up little by little. courage is knowing what not to tear</p>
                </Text>

            </View>
        </>
    );

    const styles = StyleSheet.create(
        {
            content: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            },
        }
    );
}
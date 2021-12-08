import React from "react";
import { 
    TouchableOpacity,
    TouchableOpacityProps,
    Text, 
    StyleSheet
    } from "react-native";

interface IButtonProps extends TouchableOpacityProps{
    title: string;
}

export function Button({ title, ...rest }: IButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            {...rest}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A370F7',
        borderRadius: 7,
        padding: 20,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
})
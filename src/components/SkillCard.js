import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

export function SkillCard({ skill }) {
    return (
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
            <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 20,
        marginTop: 10,
    },
    textSkill: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
})
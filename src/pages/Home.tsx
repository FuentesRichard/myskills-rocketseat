import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList,
} from 'react-native';

import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

interface ISkillData{
    id: string;
    name: string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<ISkillData[]>([]);
    const [greetings, setGreetings] = useState('');

    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }
        
        setMySkills(oldSkills => [...oldSkills, data]);
    }

    function handleRemoveSkill(id: string) {
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ));
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGreetings('Good morning')
        }
        else if (currentHour >= 12 && currentHour <= 18) {
            setGreetings('Good afternoon')
        }
        else {
            setGreetings('Good night')
        }
    }, [])

    return (
        <View style={styles.container}>
                <Text
                    style={styles.title}>Welcome, Richard</Text>

                <Text style={styles.greetings}>
                    {greetings}
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="New skill"
                    placeholderTextColor="#444"
                    onChangeText={setNewSkill}
                />

                <Button 
                onPress={handleAddNewSkill} 
                title='Add'
                activeOpacity={0.4}
                />

                <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

                <FlatList
                    data={mySkills}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <SkillCard skill={item.name} 
                        onPress={() => handleRemoveSkill(item.id)}
                        />
                        )}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 70,
        backgroundColor: '#121015'
    },
    title: {
        color: '#fff',
        fontSize: 24,
    },
    input: {
        backgroundColor: '#1F1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    greetings: {
        color: '#fff',
    }
})

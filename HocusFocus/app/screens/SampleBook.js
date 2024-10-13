// SampleBook.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SampleBook = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>The Atlantic</Text>
            <Text style={styles.subtitle}>The Elite College Students Who Cannot Read Books</Text>
            <Text style={styles.content}>
                Nicholas Dames has taught Literature Humanities, Columbia University’s required great-books course, since 1998. He loves the job, but it has changed. Over the past decade, students have become overwhelmed by the reading. College kids have never read everything they’re assigned, of course, but this feels different. Dames’s students now seem bewildered by the thought of finishing multiple books a semester. His colleagues have noticed the same problem. Many students no longer arrive at college—even at highly selective, elite colleges—prepared to read books.
            </Text>
            <Text style={styles.content}>
                This development puzzled Dames until one day during the fall 2022 semester, when a first-year student came to his office hours to share how challenging she had found the early assignments. Lit Hum often requires students to read a book, sometimes a very long and dense one, in just a week or two. But the student told Dames that, at her public high school, she had never been required to read an entire book. She had been assigned excerpts, poetry, and news articles, but not a single book cover to cover.
            </Text>
            
            {/* Buttons at the bottom */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QuizScreen')}>
                    <Text style={styles.buttonText}>Quiz</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '18%',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#FFF4F2',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        paddingTop: 5,
        fontSize: 18,
    },
    content: {
        fontSize: 16,
        margin: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto', // Push the buttons to the bottom
        marginBottom: 45, // Add some margin at the bottom
    },
    button: {
        backgroundColor: '#FF69B4', // Button color
        padding: 10,
        borderRadius: 7,
        flex: 1,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff', // Text color of the button
        fontSize: 16,
    },
});

export default SampleBook;

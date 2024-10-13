// QuizScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const QuizScreen = ({ navigation }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerSelect = (answer) => {
        setSelectedAnswer(answer);
        // You can add functionality here to check the answer if needed
        console.log("Selected Answer:", answer);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quiz Screen</Text>

            {/* Question Section */}
            <View style={styles.questionContainer}>
                <Text style={styles.question}>
                    What are the two typical reactions adults have when discussing reading?
                </Text>
                {['Anger and frustration', 'Enthusiasm and confidence', 'Dreaminess and reluctance', 'Dreaminess and loss of confidence'].map((answer) => (
                    <TouchableOpacity
                        key={answer}
                        style={[
                            styles.answerButton,
                            selectedAnswer === answer && styles.selectedAnswer
                        ]}
                        onPress={() => handleAnswerSelect(answer)}
                    >
                        <Text style={styles.answerText}>{answer}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Buttons at the bottom */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => console.log("Next pressed")}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF4F2',
    },
    title: {
        fontSize: 30,
        top: '9%',
        fontWeight: 'bold',
        marginBottom: 20, // Add some space below the title
    },
    questionContainer: {
        top: '23%',
        marginVertical: 20,
        width: '90%', // Width of the question container
    },
    question: {
        fontSize: 18,
        marginBottom: 15, // Space below the question
        textAlign: 'center', // Center the question text
    },
    answerButton: {
        backgroundColor: '#FFB6C1', // Background color for answer buttons
        padding: 20,
        borderRadius: 5,
        marginVertical: 5,
    },
    selectedAnswer: {
        backgroundColor: '#FF69B4', // Color for the selected answer
    },
    answerText: {
        fontSize: 16,
        textAlign: 'center', // Center the answer text
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto', // Push the buttons to the bottom
        marginBottom: 45, // Add some margin at the bottom
        width: '90%', // Ensure buttons fit nicely
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

export default QuizScreen;
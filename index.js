import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';

export default function Movements({ data }) {
    const [showValue, setShowValue] = useState(false);
    const [message, setMessage] = useState('');

    function sendMessage() {
        // lógica para enviar mensagem
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
            <Text style={styles.date}>{data.date}</Text>

            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>

                {showValue ? (
                    <Text style={data.type === 1 ? styles.value : styles.despesas}>
                        {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                    </Text>
                ) : (
                    <View style={styles.skeleton}></View>
                )}
            </View>
        </TouchableOpacity>       
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date: {
        color: '#dadada',
        fontWeight: 'bold'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold',
    },
    despesas: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold',
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#dadada',
        borderRadius: 8,
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#f0f0f0',
    },

    input2: {
        flex: 1,
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    button2: {
        marginLeft: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#0080ff',
        borderRadius: 5,
    },
    buttonText2: {
        color: '#fff',
    },

});

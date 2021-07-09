import React, { useEffect, useRef, useState } from 'react'
import { View, KeyboardAvoidingView, Text, StyleSheet, SafeAreaView, TextInput, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import useMessages from '../../hooks/useMessages'
import MessagingService from '../../services/Messaging'
import * as firebase from 'firebase'
import ChatInput from '../../components/ChatInput'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#363636',
        flex: 1
    },
    messages: {
        padding: 10,
        margin: 10,
        marginTop: 25,

    },
    message: {
        borderRadius: 7,
        margin: 5,
        width: '50%',
        textAlign: 'left',
        justifyContent: 'flex-start'
    },
    textMessage: {
        marginVertical: 8,
        padding: 3,
        fontSize: 15,
        textAlign: 'left',
        width: '100%',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        color: '#000',
        fontWeight: '400'
    },
    messageSender: {
        padding: 5,
        backgroundColor: 'rgba(252,220,244,0.7)',
        borderRadius: 7,
    },
    input: {
        flexGrow: 1,
        borderRadius: 7,
        padding: 8,
        flexWrap: 'wrap',
        fontSize: 15,
        color: '#000',
    }
})

export default ({ navigation }) => {
    const user = useSelector(state => state.save.user)
    const { messages } = useMessages()
    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight
    }, [messages])
    const [message, setMessage] = useState('')
    const [state, setState] = useState({
        messages: []
    })

    function handleSubmit() {
        if (!!message) {

            MessagingService.sendMessage(message, user, firebase)
            setMessage('')
        }
    }
    const getUser = () => {
        return {
            _id: user.uid,
            name: navigation.state.params.name
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={styles.messages} ref={ref}>
                    {
                        messages.map(message => {
                            const user = firebase.auth().currentUser
                            const styleMessage = styles.message
                            const messageClass = message.user.uid === user.uid
                                ? {
                                    ...styleMessage,
                                    backgroundColor: 'rgba(254,217,217,0.7)',
                                    alignSelf: 'flex-end',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',



                                }
                                : {
                                    ...styleMessage,
                                    backgroundColor: 'rgba(255,255,255,0.7)',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    textAlign: 'left',
                                    alignSelf: 'flex-start'
                                }

                            console.log('mess')
                            console.log(message)
                            return (
                                <View key={message.key} style={messageClass}>
                                    <Text
                                        style={[styles.textMessage]}>
                                        {message.message}
                                    </Text>
                                </View>)

                        })
                    }
                </View>
            </ScrollView>

            <KeyboardAvoidingView>
                <ChatInput styleView={styles.messageSender} value={message}
                    placeholder="Escreva sua mensagem..."
                    placeholderTextColor='#000'
                    onChangeText={e => setMessage(e)}
                    IconName='send'
                    styleInput={styles.input}
                    onPress={handleSubmit}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
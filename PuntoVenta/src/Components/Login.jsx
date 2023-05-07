import React, { useState } from 'react'
import { Text, View, TextInput, Platform, StyleSheet, Button, Image, Alert, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import imgBee from './img/bee-gradient.gif'
import usuario from './img/id.gif'
import apellidos from './img/apellido.gif'
import password from './img/password.gif'
import passwordVerificar from './img/passwordVerificar.gif'
import { LinearGradient } from 'expo-linear-gradient';
const Separator = () => (
    <View style={styles.separator} />
);

const Login = ({ navigation }) => {

    const [nombre, setNombre] = useState('');
    const [contraseña, setContraseña] = useState('');

    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1, backgroundColor: 'black' }}>

            {/*}<LinearGradient
                colors={['#122750', '#122750', '#a7763d']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.box}>*/}
            {/*<Image style={styles.logo} source={imgBee} />*/}

            {/*}<LinearGradient
                    colors={['#a7763d', '#122750', '#122750']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ width: '80%', marginLeft: '10%' }}>*/}
            <Text style={styles.login}>
                LOGIN
            </Text>
            <Separator />
            <View style={styles.SectionStyle}>
                <Image style={styles.ImageStyle} source={usuario} />
                <TextInput
                    style={styles.estiloInput}
                    placeholder="Usuario"
                    onChangeText={newText => setNombre(newText)}
                    defaultValue={nombre}
                />
            </View>
            <Separator />
            <View style={styles.SectionStyle}>
                <Image style={styles.ImageStyle} source={password} />
                <TextInput
                    style={styles.estiloInput}
                    placeholder="Contraseña"
                    onChangeText={newText => setContraseña(newText)}
                    defaultValue={contraseña}
                />
            </View>

            <Separator />
            {/*}<LinearGradient
                colors={['#a7763d', '#a7763d', '#122750']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 1 }}
                style={styles.button}
            >*/}
            <TouchableOpacity onPress={() => navigation.navigate('menu')}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            {/*}</LinearGradient>*/}
            <Text />
            <TouchableOpacity onPress={() => { navigation.navigate('registrarse') }} style={{ marginTop: '5%' }}>
                <Text style={{ color: 'white', textAlign: 'center', textDecorationLine: 'underline' }}>¿Aun no tienes una cuenta? Registrate aqui</Text>
            </TouchableOpacity>
            <Text /><Text /><Text />
            {/*}</LinearGradient>*/}
            {/*}</View></LinearGradient>*/}

        </View>
    )
}
const styles = StyleSheet.create({
    separator: {
        marginVertical: 8,
        borderBottomColor: '737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginLeft: '5%',
        marginRight: '5%'

    },
    box: {
        width: '100%',
        height: '100%',
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginLeft: '5%',
        marginRight: '5%',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    },
    estiloInput: {
        height: 40,
        color: 'black',
        // marginLeft: '5%',
        // marginRight: '5%',
        backgroundColor: 'white',
        flex: 1
    },
    logo: {
        marginTop: '5%',
        marginLeft: '35%',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: "center",
        width: 130,
        height: 100
    },
    login: {
        color: 'white',
        textAlign: 'center',
        marginTop: '5%',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 45,
        borderRadius: 5,
        margin: 5,
        marginLeft: '5%',
        marginRight: '6%'
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    }
});
export default Login
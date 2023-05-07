import React, { useState } from 'react'
import { Text, View, TextInput, Platform, StyleSheet, Button, Image, Alert, TouchableOpacity} from 'react-native'
import Constants from 'expo-constants'
import imgBee from './img/bee-gradient.gif'
import id from './img/id.gif'
import apellidos from './img/apellido.gif'
import password from './img/password.gif'
import passwordVerificar from './img/passwordVerificar.gif'
import asistencia from './img/asistencia.gif'
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginLeft: '5%',
        marginRight: '5%'

    },
    estiloInput: {
        height: 40,
        color: 'black',
        backgroundColor: 'white',
        flex: 1
    },
    estiloBoton: {
        marginLeft: '5%',
        marginRight: '5%',
    },
    logo: {
        marginTop: '5%',
        marginLeft: '40%',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: "center",
        width: 90,
        height: 80,
    },
    login: {
        color: 'white',
        textAlign: 'center',
        marginTop: '5%',
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic'
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
    },
    box: {
        width: '100%',
        height: '100%'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginLeft: '5%',
        marginRight: '5%',
    },
});
const Separator = () => (
    <View style={styles.separator} />
);

const Registrarse = ({ navigation }) => {

    const [usuario, setUsuario] = useState('')
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [date, setDate] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [verificarcontraseña, setVerificarContraseña] = useState('');

    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1, backgroundColor: 'black' }}>
            <LinearGradient
                colors={['#122750', '#122750', '#a7763d']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.box}>
                <Image style={styles.logo} source={imgBee} />
                <LinearGradient
                    colors={['#a7763d', '#122750', '#122750']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ width: '80%', marginLeft: '10%' }}>
                    <Text style={styles.login}>
                        REGISTRO
                    </Text>

                    <Separator />
                    <View style={styles.SectionStyle}>
                        <Image style={styles.ImageStyle} source={asistencia} />
                        <TextInput
                            style={styles.estiloInput}
                            placeholder="Usuario"
                            onChangeText={newText => setUsuario(newText)}
                            defaultValue={usuario}
                        />
                    </View>

                    <Separator />
                    <View style={styles.SectionStyle}>
                        <Image style={styles.ImageStyle} source={id} />
                        <TextInput
                            style={styles.estiloInput}
                            placeholder="Nombre"
                            onChangeText={newText => setNombre(newText)}
                            defaultValue={nombre}
                        />
                    </View>

                    <Separator />
                    <View style={styles.SectionStyle}>
                        <Image style={styles.ImageStyle} source={apellidos} />
                        <TextInput
                            style={styles.estiloInput}
                            placeholder="Apellidos"
                            onChangeText={newText => setApellido(newText)}
                            defaultValue={apellido}
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
                    <View style={styles.SectionStyle}>
                        <Image style={styles.ImageStyle} source={passwordVerificar} />
                        <TextInput
                            style={styles.estiloInput}
                            placeholder="Verificar contraseña"
                            onChangeText={newText => setVerificarContraseña(newText)}
                            defaultValue={verificarcontraseña}

                        />
                    </View>

                    <Separator />
                    
                    <LinearGradient
                        colors={['#a7763d', '#a7763d', '#122750']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.button}
                    >
                        <TouchableOpacity style={styles.buttonText} onPress={() => navigation.navigate('login')}>
                            <Text style={styles.buttonText}>Registrar</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <Text /><Text />
                </LinearGradient>
            </LinearGradient>

        </View>
    )
}
export default Registrarse
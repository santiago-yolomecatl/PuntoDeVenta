import React, { useState } from 'react'
import {
    StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView, FlatList,
} from 'react-native';
//import MenuExample from './Screen/MenuExample';
import hacker from './img/hacker.gif'
import { LinearGradient } from 'expo-linear-gradient';

const Menu = ({ navigation }) => {

    const state = {
        data: [
            { id: 1, title: "Option 1", image: './img/hacker.gif' },
            { id: 1, title: "Usuarios", image: "https://img.icons8.com/color/70/000000/administrator-male.png" },
            { id: 2, title: "Option 3", image: "https://img.icons8.com/color/70/000000/filled-like.png" },
            { id: 3, title: "Option 4", image: "https://img.icons8.com/color/70/000000/facebook-like.png" },
            { id: 4, title: "Option 5", image: "https://img.icons8.com/color/70/000000/shutdown.png" },
            { id: 5, title: "Option 6", image: "https://img.icons8.com/color/70/000000/traffic-jam.png" },
            { id: 6, title: "Option 7", image: "https://img.icons8.com/dusk/70/000000/visual-game-boy.png" },
            { id: 8, title: "Option 8", image: "https://img.icons8.com/flat_round/70/000000/cow.png" },
            { id: 9, title: "Option 9", image: "https://img.icons8.com/color/70/000000/coworking.png" },
            { id: 9, title: "Option 10", image: "https://img.icons8.com/nolan/70/000000/job.png" },
        ]
    };
    const clickEventListener = (item) => {
        // Alert.alert(item.title)
        if (item.title === 'Usuarios') {
            navigation.navigate('usuarios')
        }
    }
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#a7763d', '#122750', '#122750']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.box}>
                {/*}<MenuExample />*/}
                <FlatList style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={state.data}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={(item) => {
                        return item.id;
                    }}

                    renderItem={({ item }) => {
                        return (
                            <View>

                                <TouchableOpacity style={styles.card} onPress={() => { clickEventListener(item) }}>
                                    <Image style={styles.cardImage} source={{ uri: item.image }} />
                                </TouchableOpacity>

                                <View style={styles.cardHeader}>
                                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                                        <Text style={styles.title}>{item.title}</Text>
                                    </View>
                                </View>

                            </View>
                        )
                    }} />
            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        backgroundColor: 'black',
    },
    box: {
        width: '100%',
        height: '100%',
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: "#a7763d",
    },
    listContainer: {
        alignItems: 'center'
    },
    /******** card **************/
    card: {
        shadowColor: '#a7763d',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 8,

        elevation: 30,
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: "#122750",
        //flexBasis: '42%',
        width: 150,
        height: 150,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {
        height: 80,
        width: 80,
        alignSelf: 'center'
    },
    title: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#696969"
    },
});
export default Menu
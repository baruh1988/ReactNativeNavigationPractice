import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchhableCmp } from 'react-native';
import Colors from './Colors';

const MatchComponent = props => {

    return (

        <TouchableOpacity onPress={props.matchClick}>
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <View style={{ width: '35%', alignItems: 'center' }}>
                    <Image style={{ width: 60, height: 60, marginBottom: 6 }} source={{ uri: `https://res.cloudinary.com/c2members/image/upload/v1618231291/logos/${props.match.homeTeam.id}.png` }} />
                    <Text style={styles.desc}>{props.match.homeTeam.name}</Text>
                </View>
                <View style={{ width: '30%', alignItems: 'center', backgroundColor: Colors.itemBackground }}>
                    <Text style={styles.score}>{props.match.score.fullTime.homeTeam}:{props.match.score.fullTime.awayTeam}</Text>
                    <Text style={styles.desc}>{props.match.score.halfTime.homeTeam}:{props.match.score.halfTime.awayTeam}</Text>
                </View>
                <View style={{ width: '35%', alignItems: 'center' }}>
                    <Image style={{ width: 60, height: 60, marginBottom: 6 }} source={{ uri: `https://res.cloudinary.com/c2members/image/upload/v1618231291/logos/${props.match.awayTeam.id}.png` }} />
                    <Text style={styles.desc}>{props.match.awayTeam.name}</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({

    perdictBtn_off: { width: '60%', alignItems: 'center', paddingVertical: 10, borderRadius: 6, borderWidth: 1, borderColor: Colors.menu_item_inactive_color, marginTop: 12 },
    predictBtn_text: { fontFamily: 'Poppins-Regular', fontSize: 15, color: Colors.menu_item_inactive_color },
    perdictBtn_on: { width: '60%', backgroundColor:Colors.menu_item_active_color, alignItems: 'center', paddingVertical: 10, borderRadius: 6, borderWidth: 1, borderColor: Colors.menu_item_inactive_color, marginTop: 12 },
    predictBtn_text_on: { fontFamily: 'Poppins-Regular', fontSize: 15, color: Colors.background },
    score: { fontFamily: 'Poppins-Bold', letterSpacing: 1, fontSize: 28, color: Colors.menu_item_inactive_color },
    btn_container: { width: '100%', alignItems: 'flex-end', marginTop: 10 },
    entryFee: { fontFamily: 'Poppins-Bold', color: Colors.menu_dark100_green, fontSize: 20 },
    btn: { flexDirection: 'row', borderRadius: 12, backgroundColor: Colors.menu_item_active_color, paddingHorizontal: 12, paddingVertical: 4 },
    title: { fontFamily: 'Poppins-Medium', marginTop: 15, marginBottom: 5, fontSize: 17, color: Colors.menu_item_inactive_color },
    desc: { fontFamily: 'Poppins-Light', textAlign: 'center', lineHeight: 15, fontSize: 13, color: Colors.menu_item_inactive_color },
    coin: { width: 30, height: 30 },
    coinBtn: { width: 26, height: 26 },
    prizeLbl: { fontFamily: 'Poppins-Bold', marginLeft: 4, letterSpacing: -1, fontSize: 22, color: Colors.menu_item_inactive_color },
    prizeValue: { fontFamily: 'Poppins-Light', fontSize: 12, color: Colors.menu_item_active_color },
    date: { fontFamily: 'Poppins-Light', fontSize: 12, color: Colors.menu_item_inactive_color },
    prize: { width: '35%', alignItems: 'center', justifyContent: 'center', borderRightWidth: 2, borderRightColor: Colors.menu_dark100_green },
    details: { width: '65%', paddingStart: 10 },
    container: {
        width: '100%', borderRadius: 12,
        backgroundColor: Colors.itemBackground,
        padding: 10, marginTop: 14
    },
});

export default MatchComponent;
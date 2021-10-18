import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ProductDetails = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.route.params.match.status}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ProductDetails;
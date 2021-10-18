import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Products = () => {
    return (
        <View style={styles.container}>
            <Text>Products</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:20,
        flex: 1,
        backgroundColor: '#ebebeb',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Products;
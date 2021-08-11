import React from 'react';
import {
    SafeAreaView,
    Text
} from 'react-native';

import { styles } from './style';

export function New() {
    return (
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.text}>
                New
            </Text>
        </SafeAreaView>
    )
}
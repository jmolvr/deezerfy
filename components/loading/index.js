import React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';

const Loading = () => (
    <ActivityIndicator size="large" animating={true} style={{marginTop: 25}}/>
);


export default Loading;
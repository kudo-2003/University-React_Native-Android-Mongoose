import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, Animated, Image, TouchableOpacity } from 'react-native';
import SignInSignUp from './SignInSignUp';
import { IndexStyles } from './styleApp/styles';
const bgImage = require('../assets/mang-hinh.gif');
const textImage = require('../assets/index.png');
const startImage = require('../assets/start.png');
const styles = IndexStyles;
const Introduce = () => {
    const [screen, setScreen] = useState('Index');
    if (screen === 'SignInSignUp') {return <SignInSignUp />;}
    return <Index onNavigate={() => setScreen('SignInSignUp')} />;
};

const Index = ({ onNavigate }) => {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 2500,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 2500,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    }, []);

    return (
        <ImageBackground source={bgImage} style={styles.container}>
            <Animated.Image 
                source={textImage} 
                style={{ 
                    ...styles.overlayImage,
                    opacity: opacity,
                }}/>
            <TouchableOpacity onPress={onNavigate}>
                <Image source={startImage} style={styles.buttonImage}/>
            </TouchableOpacity>
        </ImageBackground>
    );
};


export default Introduce;

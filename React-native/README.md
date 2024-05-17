=================================
= Lương Quang Hùng | ID: 94079  =
= Lê Vũ Trọng Đức  | ID: 95476  =
= Đoàn Ngọc Sơn    | ID: 93131  =
= Dương Bá Thắng   | ID: 93152  =
=================================
###########################################################################
#                             Bảng Công Việc                              #
#                         Làm Việc Cùng Nhau                              #
###########################################################################

import React from 'react-native';
import { ImageBackground, StyleSheet, Image, Text } from 'react-native';

const bgImage = require('../assets/background.gif');
const textImage = require('../assets/index.png');

const Index = () => {
    return (
        <ImageBackground source={bgImage} style={styles.container}>
            <Image source={textImage}/>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
    textindex: {
        width: 50,
        height: 50,
    },
    overlayImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '20%',
        height: '20%',
    },
});


export default Index;

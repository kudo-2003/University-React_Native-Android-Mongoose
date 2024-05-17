import { StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import background from "../assets/background.gif"; //imges background
import axios from 'axios';
import onImage from '../assets/ON.jpg'; //image On
import offImage from '../assets/OFF.jpg'; // image Off

const Home = () => {
    // click ON OFF
    const [isOn, setIsOn] = useState(false);
    //API gửi về ESP32 để click on off
    const toggleSwitch = async () => {
        const newState = !isOn;
        try {
            const response = await axios.post('http://192.168.170.241/toggle', { state: newState });
            if (response.data && response.data.status === 'success') {
                setIsOn(newState);
            }
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
//Màng Hình
    return (
        <ImageBackground source={background} style={styles.container}>
        {/*click on off */}
            <TouchableOpacity
                style={[styles.button, isOn ? styles.onButton : styles.offButton]}
                onPress={toggleSwitch}>{/*dòng dưới đổi hình khi click TouchableOpacity */}
                <Image source={isOn ? onImage : offImage} style={styles.buttonImage}/>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    onButton: {
        
    },
    offButton: {
        
    },
    buttonImage: {
        width: '100%', 
        height: '100%',
        borderRadius: 50, 
    },
});

export default Home;

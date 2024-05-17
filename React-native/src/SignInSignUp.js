/**các thư viện */
import { ImageBackground, TouchableOpacity, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import background from "../assets/background.gif"; 
import axios from 'axios';
import { SignInSignUpStyle } from "./styleApp/styles";
import Home from "./homeOne";

const styles = SignInSignUpStyle;

const SignInSignUp = () => {
    const [isLogin, setIsLogin] = useState(true); 
    const [group, setGroup] = useState(''); 
    const [username, setUsername] = useState('');
    const [idsv, setIdsv] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
//API Post 
    const handlePress = async () => {
        console.log('Dữ liệu gửi đến server:', { group, username, idsv });
        const url = isLogin ? 'http://172.28.128.1:3000/login' : 'http://172.28.128.1:3000/signup';
        const data = isLogin ? { username, idsv } : { group, username, idsv };
        try {
            const response = await axios.post(url, data);
            console.log(response.data);
            if (response.data === 'Đăng nhập thành công!') {
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.error(error);
        }
    }

    if (isLoggedIn) {
        return <Home />;
    }

    return (
        <ImageBackground source={background} style={styles.container}>
            <View style={styles.buttonContainer}>
                {!isLogin && (
                    <TextInput 
                        style={styles.input}
                        placeholder="Tên nhóm"
                        placeholderTextColor="#32CD32" 
                        value={group}
                        onChangeText={setGroup}
                    />
                )}
                <TextInput 
                    style={styles.input}
                    placeholder="Tên"
                    placeholderTextColor="#32CD32" 
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="IDSV"
                    placeholderTextColor="#32CD32" 
                    value={idsv}
                    onChangeText={setIdsv}
                />
                <View style={styles.buttonRow}>
                    <TouchableOpacity 
                        onPress={handlePress} 
                        style={styles.button}>
                        <Text style={styles.buttonText}>
                            {isLogin ? "Đăng nhập" : "Đăng ký"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => setIsLogin(!isLogin)} 
                        style={styles.button}>
                        <Text style={styles.buttonText}>
                            {isLogin ? "Chuyển sang đăng ký" : "Chuyển sang đăng nhập"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

export default SignInSignUp;

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, ImageStyle, TextInput } from 'react-native';
import styles from './styles/LoginScreenStyles.js';
import { Ionicons } from '@expo/vector-icons';

// Function to handle sign in button press
const handleSignInPress = () => {
  // TODO: Implement sign in logic
  console.log('Sign in button pressed');
};

// Function to handle sign up button press
const handleSignUpPress = () => {
  // TODO: Implement sign up logic
}

export default function App() {
  return (
    
      <View style={styles.container}>


        <Text style={styles.signInText}>Sign In</Text>
        <StatusBar style="auto" />
        {/* Sign up button */}
        <View style={styles.newUserButtonContainer}>
          <Text style={styles.newUserText}>New User?</Text>
            <TouchableOpacity onPress={() => {}} style={styles.newUserButton}>
              <Text style={styles.newUserButtonText}>Create an Account</Text>
            </TouchableOpacity>
        </View>


        {/* Email input */}
      <View style={styles.emailTextContainer}>
        <TextInput style={styles.emailText} placeholder="Email address" placeholderTextColor="#ccc" />
      </View>


        {/* Password input */}
      <View style={styles.passwordTextContainer}>
        <TextInput 
          style={styles.passwordText} secureTextEntry placeholder="Password" placeholderTextColor="#ccc" />
      </View>     


        {/* Sign in button */}
        <TouchableOpacity onPress={() => {}} style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>


        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Other Sign In Options */}
      <View style={styles.orTextContainer}>
        <Text style={styles.orText}>or</Text>
      </View>
      {/* Social Media Icons */}
      <View style={styles.socialMediaIconsContainer}>
        <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-google" size={40}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-facebook" size={40}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-apple" size={40}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-yahoo" size={40}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-microsoft" size={40}/>
        </TouchableOpacity>
      </View>


        {/* Images */}
        <Image source={require('./assets/image.png')} style={styles.image}/>
        <Image source={require('./assets/image2.png')} style={styles.image2}/>

      </View>


  );
}
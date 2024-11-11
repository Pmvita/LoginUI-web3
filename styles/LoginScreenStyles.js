import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';


const styles = StyleSheet.create({


    // Main container
    container: {
    flex: 1,
    backgroundColor: 'white',
    },

    // Sign In text
    signInText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    top: 100,
    left: 30
    },

    // newUserButtonContainer
    newUserButtonContainer: {
    backgroundColor: 'transparent',
    top: 110,
    left: 30,
    flexDirection: 'row',
    }, // newUserText
    newUserText: {
    fontSize: 20,
    fontWeight: '',
    color: 'black',
    }, //newUserButton___
    newUserButton: {
    backgroundColor: 'transparent',
    }, //newUserButtonText
    newUserButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0098FF',
    marginLeft : 10,
    },

    // emailTextContainer
    emailTextContainer: {
    backgroundColor: 'transparent',
    width: 300,
    top: 200,
    left: 30,
    borderBottomColor: '#0098FF',
    borderBottomWidth: 1,
    }, // emailText
    emailText: {
    fontSize: 25,
    fontWeight: '#600',
    },

    // passwordTextContainer
    passwordTextContainer: {
    backgroundColor: 'transparent',
    width: 300,
    top: 250,
    left: 30,
    borderBottomColor: '#0098FF',
    borderBottomWidth: 1,
    }, // passwordText
    passwordText: {
    fontSize: 25,
    fontWeight: '#600',
    },

    //signInButton
    signInButton: {
    backgroundColor: '#0098FF',
    width: 300,
    height: 50,
    borderRadius: 25,
    top: 300,
    left: 30,
    justifyContent: 'center',
    alignItems: 'center',
    }, //signInButtonText
    signInButtonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    },

    // forgotPasswordContainer
    forgotPasswordContainer: {
    backgroundColor: 'transparent',
    top: 350,
    left: 30,
    flexDirection: 'row',
    }, // forgotPasswordText
    forgotPasswordText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0098FF',
    marginLeft : 10,
    },

    //otherSignInOptions
    orTextContainer: {
    backgroundColor: 'transparent',
    top: 370,
    left: 30,
    borderBottomColor: '#0098FF',
    borderBottomWidth: 1,
    }, // orText
    orText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
    left : 180,
    },

    // socialMediaIconsContainer
    socialMediaIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    top: 380,   
    
    }, // socialMediaIcon
    socialButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    },




    // Image 2
    image2: {
    width: 150,
    height: 150,
    bottom: 385,
    left: 270,
    borderRadius: 100,
    },
    // Bottom Image
    image: {
        width: 250,
        height: 250,
        top: 400,
        borderRadius: 100,
        },

});

export default styles


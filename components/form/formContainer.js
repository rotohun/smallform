import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native'

import FormInputComponent from './formInputComponent';


export default class FormContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      password: '',
    }
  }

  SendUserInfo = () => {
    const userName = this.userNameInput.getText();
    const password = this.passwordInput.getText();
    this.setState({ userName })
    this.setState({ password })
    console.log(userName, password);
  }

  render(){
    const { userName, password } = this.state;
    return (
      <View>
        <Text> {userName} </Text>
        <Text> {password} </Text>
        <View style={{borderColor: 'gray', borderBottomWidth:1, height: 1, width:300, marginBottom: 50}} />
        <FormInputComponent placeholder={"User Name"} ref={(ref) => this.userNameInput = ref}/>
        <FormInputComponent placeholder={"Password"} ref={(ref) => this.passwordInput = ref} secureTextEntry={true}/>
        <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, justifyContent: 'center', alignItems: 'center'}} onPress={() => this.SendUserInfo()}>
          <Text style={{ color: '#fff' }}> Login </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
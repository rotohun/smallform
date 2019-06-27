import React from 'react';
import { TextInput } from 'react-native'
import PropTypes from 'prop-types';


export default class FormInputComponent extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      text: ''
    }
  }

  getText = () => {
    const {text} = this.state;
    return text;
  }


  render(){
    const {placeholder, secureTextEntry} = this.props;
    const { text } = this.state;
    return(
      <TextInput
        style={{height: 40, width: 300, borderColor: 'gray', borderBottomWidth: 1, marginBottom: 20}}
        onChangeText={(text) => this.setState({text})}
        value={text}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    )
  }
}


FormInputComponent.propTypes = {
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool
}

FormInputComponent.defaultProps = {
  placeholder: "Generic Text",
  secureTextEntry: false
}
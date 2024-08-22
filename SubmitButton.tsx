/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../../assets/style/ButtonStyles';
const SubmitButton = () => {
  return (
    <TouchableOpacity style={styles.submitButton}>
      <Text style={styles.submitButtonText}>Submit</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

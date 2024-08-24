import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SadEmoji from '../../../node_modules/react-native-vector-icons/dist/Entypo';
interface ErrorHandlerProps {
  errorMessage: string;
}

const ErrorHandler: React.FC<ErrorHandlerProps> = ({errorMessage}) => {
  return (
    <View style={styles.errorContainer}>
      <SadEmoji name="emoji-sad" size={50} color="#FFF" />
      <Text style={styles.errorText}>
        Oops something went wrong: Error message is: {errorMessage}
      </Text>
    </View>
  );
};

export default ErrorHandler;

const styles = StyleSheet.create({
  errorContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#FFF',
    fontSize: 24,
    paddingHorizontal: 14,
    paddingVertical: 20,
    textAlign: 'left',
    fontWeight: '300',
  },
});

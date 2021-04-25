import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SingleButton = ({buttonText, handlePress, key, width, colorB, ...styleProps}) => {
	return (
		<TouchableOpacity key={key} onPress={() => handlePress(buttonText)} style={{...styleProps}}>
			<View style={{...styles.button, width: width, backgroundColor: colorB}}>
				<Text style={{...styles.buttonText}}>
					{buttonText}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		height: 80,
		borderRadius: 25
	},
	buttonText: {
		color: "white",
		fontSize: 18
	}
});

export default SingleButton;

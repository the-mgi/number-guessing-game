import React from 'react';
import {Text, View} from "react-native";

const TopHeader = ({stringValue, flex}) => {
	return (
		<View style={{flex: flex, alignItems: "center"}}>
			<Text style={{fontSize: 22, fontWeight: "bold"}}>Guess the Number</Text>
			<Text style={{fontSize: 18}}>Enter a number between 1 and 99</Text>
			<Text style={{fontSize: 16, color: stringValue.color}}>{stringValue.text}</Text>
		</View>
	);
};

export default TopHeader;

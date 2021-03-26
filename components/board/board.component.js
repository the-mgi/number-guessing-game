import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SingleButton from "./button/button.component";

const WIDTH = 80;

const BoardComponent = ({randomNumber, setRandomNumberFunc}) => {
	const [stringValue, setStringValue] = useState({text: "{Your input will appear here}", isFirstTime: true, color: "black"});

	const array = Array.from({length: 9}, (_, index) => index + 1);
	array.push(0, ".");

	const handlePress = (value) => {
		if (stringValue.isFirstTime) {
			setStringValue({...stringValue, text: value, isFirstTime: false});
			return;
		}
		setStringValue({...stringValue, text: stringValue.text + value});
	};

	const handleSubmit = () => {
		if (stringValue.text === randomNumber.toString()) {
			setStringValue({...stringValue, text: "Congratulations! You guessed the number right!", color: "green"})
		} else {
			setStringValue({...stringValue, text: "You guessed the wrong number", color: "#fa344f"})
		}
	};

	const handleReset = () => {
		setRandomNumberFunc();
		setStringValue({color: "black", text: "{Your input will appear here}", isFirstTime: true});
	};

	console.log(randomNumber);

	return (
		<View style={{flex: 7}}>
			<View style={{flex: 2, justifyContent: "flex-end", alignItems: "center"}}>
				<Text style={{fontSize: 22, fontWeight: "bold", ...styles.fontFamily}}>Guess the Number</Text>
				<Text style={{fontSize: 18, ...styles.fontFamily}}>Enter a number between 1 and 99</Text>
				<Text style={{fontSize: 16, ...styles.fontFamily, color: stringValue.color}}>{stringValue.text}</Text>
			</View>
			<View style={{flex: 4}}>
				<FlatList
					data={[...array]}
					numColumns={3}
					renderItem={({item, index}) => (
						<View style={styles.margin} key={index}>
							<SingleButton handlePress={handlePress} buttonText={item.toString()} key={index} width={item.toString() === '0' ? ((WIDTH * 2) + 20) : WIDTH}
														colorB="blue"/>
						</View>
					)}
					contentContainerStyle={styles.center}
				/>
			</View>
			<View style={{flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
				<View>
					<SingleButton key="submit" handlePress={handleSubmit} buttonText="Submit" width={WIDTH * 2} colorB="green"/>
				</View>
				<View>
					<SingleButton key="reset" handlePress={handleReset} buttonText="Reset" width={WIDTH * 2} colorB="red"/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	margin: {
		margin: 10
	},
	upperContainer: {
		flex: 1,
		backgroundColor: "red"
	},
	fontFamily: {
		fontFamily: ""
	}
});

export default BoardComponent;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SingleButton from "../board/button/button.component";
import {GAME_SCREEN} from "../../utils/utils";

const StartScreen = ({setCurrentScreen}) => {
	return (
		<View style={{...styles.center}}>
			<View>
				<Text style={{...styles.fonts, color: "black"}}>
					Welcome to the Number Guessing Game
				</Text>
				<Text style={{...styles.fonts, color: "red"}}>
					Try your luck and win exciting prizes!
					<Text style={{fontSize: 60}}>🎉</Text>
				</Text>
			</View>
			<View>
				<SingleButton handlePress={() => {
					setCurrentScreen(GAME_SCREEN)
				}} width={250} key="start-game" buttonText="Start Game" colorB="green" margin={50}/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	fonts: {
		fontSize: 22,
		marginTop: 10
	}
});

export default StartScreen;

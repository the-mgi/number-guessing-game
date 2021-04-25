import React from 'react';
import {View, Text, StyleSheet, BackHandler} from "react-native";
import SingleButton from "../board/button/button.component";
import {GAME_SCREEN} from "../../utils/constant";

const EndScreen = ({setCurrentScreen, data}) => {
	return (
		<View style={{...styles.center}}>
			<View>
				<Text style={{...styles.fonts}}>
					{JSON.stringify(data)}
				</Text>
			</View>
			<View>
				<View>
					<SingleButton handlePress={() => {
						setCurrentScreen(GAME_SCREEN)
					}} width={250} key="play-game" buttonText="Play Again" colorB="green" marginTop={50}/>

					<SingleButton handlePress={() => {
						BackHandler.exitApp();
					}} width={250} key="quit-game" buttonText="Quit Game" colorB="red" marginTop={30}/>
				</View>
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

export default EndScreen;

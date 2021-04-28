import React from 'react';
import {BackHandler, StyleSheet, Text, View} from "react-native";
import SingleButton from "../board/button/button.component";
import {GAME_SCREEN, SCORE_PER_QUESTION} from "../../utils/utils";

const EndScreen = ({setCurrentScreen, data}) => {

	const FormattedText = ({data}) => {
		let totalScore = 0;
		data.map(singleObject => {
			totalScore = (totalScore + singleObject.isPassed ? SCORE_PER_QUESTION : 0) - 0
		});

		return (
			<View>
				{data.map((singleObject, index) => {
					return (
						<View>
							<Text style={{...styles.fonts}}>Round Number: {index + 1}</Text>
							<Text style={{...styles.fonts}}>Round Score: {singleObject.finalAttempts * SCORE_PER_QUESTION}</Text>
							<View
								style={{
									borderBottomColor: 'black',
									borderBottomWidth: 1,
								}}
							/>
						</View>
					);
				})}
				<View>
					<Text style={{...styles.fonts, ...styles.makeBold}}>Total Game Stats: </Text>
					<Text style={{...styles.fonts}}>Total Number of Rounds Played: {data.length}</Text>
					<Text style={{...styles.fonts}}>Total Game Score of {data.length} Rounds: {totalScore}</Text>
				</View>
			</View>
		);
	}
	
	return (
		<View style={{...styles.center}}>
			<View>
				<Text style={{...styles.fonts}}>
					<FormattedText data={data}/>
				</Text>
			</View>
			<View>
				<View>
					<SingleButton handlePress={() => {
						setCurrentScreen(GAME_SCREEN)
					}} width={250} key="play-game" buttonText="Continue Playing" colorB="green" marginTop={50}/>

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
	},
	makeBold: {
		fontWeight: "bold"
	}
});

export default EndScreen;

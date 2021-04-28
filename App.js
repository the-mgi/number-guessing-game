import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BoardComponent from "./components/board/board.component";
import StartScreen from "./components/start-screen/start-screen.component";
import EndScreen from "./components/end-screen/end-screen.component";
import {GAME_SCREEN, getRandomNumber, START_GAME} from "./utils/utils";

export default function App() {
	const [roundRandom, setRoundRandom] = useState({roundNumber: 1, randomNumber: getRandomNumber()});
	const [currentScreen, setCurrentScreen] = useState(START_GAME);
	const [record, setRecord] = useState([]);

	const setRoundRandomFunc = () => {
		setRoundRandom({roundNumber: roundRandom.roundNumber + 1, randomNumber: getRandomNumber()});
	};

	const resetValues = () => {
		setRoundRandom({roundNumber: 1, randomNumber: getRandomNumber()});
	};

	return (
		<View style={styles.container}>
			<View style={{flex: 2}}>
				{currentScreen === START_GAME ?
					<StartScreen setCurrentScreen={setCurrentScreen}/> : currentScreen === GAME_SCREEN ?
						<BoardComponent resetValues={resetValues} roundRandom={roundRandom}
														setRandomNumberFunc={setRoundRandomFunc} setCurrentScreen={setCurrentScreen} record={record} setRecord={setRecord}/> :
						<EndScreen setCurrentScreen={setCurrentScreen} data={record}/>}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		paddingTop: 80,
	}
});

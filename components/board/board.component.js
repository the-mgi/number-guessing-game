import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import SingleButton from "./button/button.component";
import TopHeader from "./top-header/top-header";
import RoundScoring from "./round-scoring/round-scoring";
import {MAX_ATTEMPTS, MAX_NUMBER_OF_ROUNDS, SCORE_PER_QUESTION, WIDTH} from "../../utils/constant";

const BoardComponent = ({roundRandom, setRandomNumberFunc, resetValues, setCurrentScreen}) => {
	const [stringValue, setStringValue] = useState({
		text: "{Your input will appear here}",
		isFirstTime: true,
		color: "black"
	});
	const [scoreAttempts, setScore] = useState({score: 0, attempts: 1});
	const [record, setRecord] = useState([]);

	const array = Array.from({length: 9}, (_, index) => index + 1);
	array.push(0, ".");

	const handlePress = (value) => {
		if (stringValue.isFirstTime) {
			setStringValue({...stringValue, text: value, isFirstTime: false, color: "black"});
			return;
		}
		setStringValue({...stringValue, text: stringValue.text + value});
	};

	useEffect(() => {
		setRecord([...record, {
			round: roundRandom.roundNumber,
			finalAttempts: 0,
			isPassed: false
		}]);
	}, [roundRandom]);

	const handleSubmit = (txt) => {
		if (txt.indexOf("&") < 0 && roundRandom.roundNumber !== MAX_NUMBER_OF_ROUNDS) {
			let arrayToUpdate = {...record[roundRandom.roundNumber - 1], finalAttempts: scoreAttempts.attempts};

			if (stringValue.text === roundRandom.randomNumber.toString()) {
				setStringValue({
					...stringValue,
					isFirstTime: true,
					text: "Congratulations! You guessed the number right!",
					color: "green"
				});
				setScore({attempts: 1, score: scoreAttempts.score + SCORE_PER_QUESTION});
				setRandomNumberFunc();
				arrayToUpdate = {...arrayToUpdate, isPassed: true}
			} else {
				setStringValue({...stringValue, isFirstTime: true, text: "You guessed the wrong number", color: "#fa344f"});
				setScore({...scoreAttempts, attempts: scoreAttempts.attempts + 1});
			}
			const finalArray = [...record];
			finalArray.splice(roundRandom.roundNumber - 1, 1, arrayToUpdate);
			setRecord(finalArray);
		} else {
			setCurrentScreen("game-end-screen");
		}

		if (scoreAttempts.attempts >= MAX_ATTEMPTS) {
			setScore({score: 0, attempts: 1});
			setRandomNumberFunc();
		}
	};

	const handleReset = () => {
		setRecord([]);
		setScore({attempts: 1, score: 0});
		setStringValue({color: "black", text: "{Your input will appear here}", isFirstTime: true});
		resetValues();
	};

	return (
		<View style={{flex: 1}}>
			<RoundScoring flex={1} roundNumber={roundRandom.roundNumber} scoreAttempts={scoreAttempts}/>
			<TopHeader stringValue={stringValue} flex={1}/>
			<View style={{flex: 5}}>
				<FlatList
					data={[...array]}
					numColumns={3}
					renderItem={({item, index}) => (
						<View style={styles.margin} key={index}>
							<SingleButton handlePress={handlePress} buttonText={item.toString()} key={index}
														width={item.toString() === '0' ? ((WIDTH * 2) + 20) : WIDTH}
														colorB="blue"/>
						</View>
					)}
					contentContainerStyle={styles.center}
				/>
			</View>
			<View style={{flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
				<View>
					<SingleButton
						key="submit"
						handlePress={handleSubmit}
						buttonText={roundRandom.roundNumber > MAX_NUMBER_OF_ROUNDS - 1 ? "Submit & Stats" : "Submit"}
						width={WIDTH * 2}
						colorB="green"
					/>
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

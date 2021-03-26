import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BoardComponent from "./components/board/board.component";

export default function App() {
	const [randomNumber, setRandomNumber] = useState();

	useEffect(() => {
		setRandomNumberFunc();
	}, []);

	const setRandomNumberFunc = () => {
		setRandomNumber((Math.round(1 + Math.random() * 99)));
	};

	return (
		<View style={styles.container}>
			<View style={{flex: 2}}>
				<BoardComponent randomNumber={randomNumber} setRandomNumberFunc={setRandomNumberFunc}/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column"
	},
});

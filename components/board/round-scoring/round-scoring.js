import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const RoundScoring = ({roundNumber, flex, scoreAttempts}) => {
	return (
		<View style={{flex: flex, flexDirection: "row", alignItems: "center"}}>
			<View flex={1} style={{...styles.alignCenter}}>
				<Text style={styles.fontSize}>
					<Text style={{...styles.fontSizeText}}>Round: </Text>
					<Text>{roundNumber}</Text>
				</Text>
			</View>
			<View flex={1} style={styles.alignCenter}>
				<Text style={styles.fontSize}>
					<Text style={{...styles.fontSizeText}}>Score: </Text>
					<Text>{scoreAttempts.score}</Text>
				</Text>
			</View>
			<View flex={1} style={styles.alignCenter}>
				<Text style={styles.fontSize}>
					<Text style={{...styles.fontSizeText}}>Attempt: </Text>
					<Text>{scoreAttempts.attempts}</Text>
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	alignCenter: {
		alignItems: "center"
	},
	fontSizeText: {
		fontWeight: "bold"
	},
	fontSize: {
		fontSize: 20
	}
});

export default RoundScoring;

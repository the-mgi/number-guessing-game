import React from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from "react-native";
import {MAX_NUMBER} from "../../utils/utils";

const ModalComponent = ({modalVisible, setModalVisible, randomNumber, numberOfHintsUsed}) => {
	return (
		<View>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<View style={styles.center}>
							<Text style={{...styles.modalText, fontWeight: "bold", color: "royalblue"}}>HINT</Text>
							<Text style={styles.modalText}>The Current number lies in the range</Text>
							<Text
								style={styles.modalText}>{(Math.round(MAX_NUMBER / numberOfHintsUsed) - randomNumber)} - {(Math.round(MAX_NUMBER / numberOfHintsUsed) + randomNumber)}</Text>
							<Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={() => setModalVisible(!modalVisible)}
							>
								<Text style={{...styles.textStyle, fontSize: 20}}>Close Modal</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		height: 300,
		width: 300
	},
	button: {
		borderRadius: 5,
		padding: 10,
		elevation: 2
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center"
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
		fontSize: 20
	},
	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});

export default ModalComponent;

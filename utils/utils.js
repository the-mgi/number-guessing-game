export const WIDTH = 80;
export const SCORE_PER_QUESTION = 10;
export const MAX_NUMBER_OF_ROUNDS = 2;
export const MAX_ATTEMPTS = 3;
export const SCORE_DEDUCT_USING_HINT = 2;
export const START_GAME = "START_GAME";
export const END_GAME = "END_GAME";
export const GAME_SCREEN = "GAME_SCREEN";

export const getRandomNumber = (lowerRange = 1, upperRange = 99) => {
	return (Math.round(1 + Math.random() * 99))
}

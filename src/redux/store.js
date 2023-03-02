import { configureStore } from '@reduxjs/toolkit';

//Slices
import changeFontSlice from './slices/changeFontSlice';
import getWords from './slices/getWords';

export const store = configureStore({
	reducer: {
		font: changeFontSlice,
		word: getWords,
	},
});

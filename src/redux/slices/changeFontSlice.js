import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	font: "'PT Serif', serif",
	activeFont: 'Serif',
};

export const changeFontSlice = createSlice({
	name: 'font',
	initialState,
	reducers: {
		setFont(state, action) {
			switch (action.payload) {
				case 'Serif':
					state.font = "'PT Serif', serif";

					break;
				case 'Sans-Serif':
					state.font = 'sans-serif';

					break;
				case 'Monospace':
					state.font = 'monospace';
					break;

				default:
					break;
			}
		},

		setActiveFont(state, action) {
			state.activeFont = action.payload;
		},
	},
});

export const { setFont, setActiveFont } = changeFontSlice.actions;

export default changeFontSlice.reducer;

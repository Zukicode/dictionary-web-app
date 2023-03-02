import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWordFromApi } from 'api/api';
import axios from 'axios';

export const fetchWords = createAsyncThunk(
	'words/fetchWords', // отображается в dev tools и должно быть уникально у каждого Thunk
	async word => {
		const response = await axios.get(getWordFromApi(word));
		return response.data;
	}
);

const initialState = {
	wordsInfo: {},
	status: null,
};

export const getWords = createSlice({
	name: 'words',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			// Вызывается прямо перед выполнением запроса
			.addCase(fetchWords.pending, state => {
				state.status = 'loading';
			})
			// Вызывается в том случае если запрос успешно выполнился
			.addCase(fetchWords.fulfilled, (state, action) => {
				state.status = 'success';
				state.wordsInfo = action.payload[0];
			})
			// Вызывается в случае ошибки
			.addCase(fetchWords.rejected, state => {
				state.status = 'failed';
			});
	},
});

export const { setAudio } = getWords.actions;

export default getWords.reducer;

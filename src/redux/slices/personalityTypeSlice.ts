import { createSlice } from "@reduxjs/toolkit";
import { store } from "../store";

export interface Personality {
	 personality: string|number|null ;
}
const initialState: Personality = {
    personality: null,
};
export const PersonalitySlice = createSlice({
	name: "personality",
	initialState,
	reducers: {
		getPersonality: (state, action) => {
			state.personality = action.payload;
		},


	},
});
export type RootState = ReturnType<typeof store.getState>;
export default PersonalitySlice.reducer;
export const { getPersonality } = PersonalitySlice.actions;
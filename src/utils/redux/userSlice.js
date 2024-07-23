import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: "user-slice",
	initialState: null,
	reducers: {
		addUser: (state, action) => {
			return action.payload; // state will assigned with action.payload's data
		},
		removeUser: (state) => {
            return null
        },
	},
});


export const {addUser, removeUser} = userSlice.actions
export default userSlice.reducer
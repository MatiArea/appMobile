import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { User } from '@/types/UserType'

const userSlice = createSlice({
	name: 'user',
	initialState: {} as User,
	reducers: {
		setUser(state, action: PayloadAction<User>) {
			return action.payload
		},
	},
})

export const { setUser } = userSlice.actions
export default userSlice.reducer

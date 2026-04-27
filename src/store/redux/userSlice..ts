import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/models/user";

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    removeUsers: (state, action) => {
      state.users = state.users.filter(
        (user) => !action.payload.includes(user.user_id),
      );
    }
  },
});

export const { addUser, removeUsers} = userSlice.actions;
export default userSlice.reducer;

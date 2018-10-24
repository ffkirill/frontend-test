import * as types from "./types";

import {Actions, SHOW_POPOVER, HIDE_POPOVER, FOLLOW_USER, UNFOLLOW_USER} from "./actions";
import { users, usersUpvotes, usersDownvotes } from "./data";


export interface State {
  readonly isPopoverVisible: boolean;
  readonly currentUser?: types.UserId,
  readonly avatarsList: types.UserId[];
  readonly users: types.UsersDict,
  readonly followed: types.UserIdSet,
  readonly friends: types.UserIdSet,
  readonly userUpvotes: types.UsersVotes,
  readonly userDownvotes: types.UsersVotes
}

export const initialState = {
  isPopoverVisible: false,
  avatarsList: <types.UserId[]>[3, 5, 12],
  users: users,
  followed: new Set([5, 8, 4, 9]),
  friends: new Set([5, 8, 4, 9, 13, 15]),
  userUpvotes: usersUpvotes,
  userDownvotes: usersDownvotes
};

export const reducer = (
  state = initialState,
  action: Actions
): State => {
  switch (action.type) {
    case HIDE_POPOVER: { return {
      ...state,
      isPopoverVisible: false,
      currentUser: undefined
    }}
    case SHOW_POPOVER: { return {
      ...state,
      isPopoverVisible: true,
      currentUser: action.payload.id
    }}
    case FOLLOW_USER: {
      const _followed = new Set(state.followed);
      _followed.add(action.payload.id);
      return {
        ...state,
        followed: _followed
    }}
    case UNFOLLOW_USER: {
      const _followed = new Set(state.followed);
      _followed.delete(action.payload.id);
      return {
        ...state,
        followed: _followed
    }}
    default:
      return state
  }
};

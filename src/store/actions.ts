import { ActionsUnion } from '@martin_hotell/rex-tils';

export const SHOW_POPOVER = 'SHOW';
export const HIDE_POPOVER = 'HIDE';
export const FOLLOW_USER = 'FOLLOW';
export const UNFOLLOW_USER = 'UNFOLLOW';

function createAction(type: string, payload?: any) {
  return payload === undefined ? { type } : { type, payload };
}

export const Actions = {
  showPopover: (userId: number) => createAction(SHOW_POPOVER, {id: userId}),
  hidePopover: () => createAction(HIDE_POPOVER),
  followUser: (userId: number) => createAction(FOLLOW_USER, {id: userId}),
  unfollowUser: (userId: number) => createAction(UNFOLLOW_USER, {id: userId})
};

export type Actions = ActionsUnion<typeof Actions>

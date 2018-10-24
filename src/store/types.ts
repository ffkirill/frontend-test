export type UserId = number;

export interface User {
  readonly id: UserId;
  readonly avatar: string;
  readonly fullname: string;
}

export type UserIdSet = Set<UserId>;

export interface UsersDict {
  [id: number]: User;
}

export interface UsersVotes {
  [id: number]: UserIdSet;
}

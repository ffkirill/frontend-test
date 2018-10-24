import {UsersDict, UsersVotes} from "./types";
export const users: UsersDict = {
  1: {
    "fullname": "tomasz baumeister",
    "id": 1,
    "avatar": "https://randomuser.me/api/portraits/med/men/33.jpg"
  },
  2: {
    "fullname": "peetu huhta",
    "id": 2,
    "avatar": "https://randomuser.me/api/portraits/med/men/65.jpg"
  },
  3: {
    "fullname": "gaël gauthier",
    "id": 3,
    "avatar": "https://randomuser.me/api/portraits/med/men/85.jpg"
  },
  4: {
    "fullname": "henriette severinsen",
    "id": 4,
    "avatar": "https://randomuser.me/api/portraits/med/women/95.jpg"
  },
  5: {
    "fullname": "aiden morris",
    "id": 5,
    "avatar": "https://randomuser.me/api/portraits/med/men/56.jpg"
  },
  6: {
    "fullname": "ella lord",
    "id": 6,
    "avatar": "https://randomuser.me/api/portraits/med/women/23.jpg"
  },
  7: {
    "fullname": "dustin graves",
    "id": 7,
    "avatar": "https://randomuser.me/api/portraits/med/men/14.jpg"
  },
  8: {
    "fullname": "melissa daniels",
    "id": 8,
    "avatar": "https://randomuser.me/api/portraits/med/women/34.jpg"
  },
  9: {
    "fullname": "francisco nogueira",
    "id": 9,
    "avatar": "https://randomuser.me/api/portraits/med/men/27.jpg"
  },
  10: {
    "fullname": "kaitlin frazier",
    "id": 10,
    "avatar": "https://randomuser.me/api/portraits/med/women/85.jpg"
  },
  11: {
    "fullname": "anísio ribeiro",
    "id": 11,
    "avatar": "https://randomuser.me/api/portraits/med/men/58.jpg"
  },
  12: {
    "fullname": "kathy gilbert",
    "id": 12,
    "avatar": "https://randomuser.me/api/portraits/med/women/5.jpg"
  },
  13: {
    "fullname": "elise perez",
    "id": 13,
    "avatar": "https://randomuser.me/api/portraits/med/women/13.jpg"
  },
  14: {
    "fullname": "wilma kim",
    "id": 14,
    "avatar": "https://randomuser.me/api/portraits/med/women/22.jpg"
  },
  15: {
    "fullname": "اميرمحمد سلطانی نژاد",
    "id": 15,
    "avatar": "https://randomuser.me/api/portraits/med/men/35.jpg"
  }
};

export const usersUpvotes: UsersVotes = {
  3: new Set([12, 4, 10]),
  5: new Set([11, 9, 5, 10]),
  12: new Set([8, 1, 11, 6, 10])
};

export const usersDownvotes: UsersVotes = {
  3: new Set([1, 5]),
  5: new Set([1]),
  12: new Set([3, 9])
};
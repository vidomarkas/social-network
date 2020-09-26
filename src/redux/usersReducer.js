import { FOLLOW, UNFOLLOW, SET_USERS } from "./types";

const initialState = {
  users: [
    {
      id: 1,
      fullName: "Viktoras",
      location: { country: "Lithuania", city: "Klaipeda" },
      status: "I like football",
      avatarURL: "https://www.flaticon.com/svg/static/icons/svg/147/147144.svg",
      followed: false,
    },
    {
      id: 2,
      fullName: "Andrew",
      location: { country: "United Kingdom", city: "London" },
      status: "React FTW!",
      avatarURL: "https://www.flaticon.com/svg/static/icons/svg/147/147144.svg",
      followed: false,
    },
    {
      id: 3,
      fullName: "Monica",
      location: { country: "U.S.", city: "Los Angeles" },
      status: "Life coach, ready to help",
      avatarURL: "https://www.svgrepo.com/show/16242/woman.svg",
      followed: true,
    },
    {
      id: 4,
      fullName: "Gloria",
      location: { country: "France", city: "Paris" },
      status: "Bonjour",
      avatarURL: "https://www.svgrepo.com/show/16242/woman.svg",
      followed: true,
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      console.log("users", action.users);
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;

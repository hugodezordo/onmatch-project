import { connect } from "react-redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  UserRequested: "[Request User] Action",
  UserLoaded: "[Load User] Action",
};

const initialAuthState = {
  user: undefined,
  authToken: undefined,
};

const AuthPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["user", "authToken"],
};

export const reducer = persistReducer(
  AuthPersistConfig,
  (state = initialAuthState, action) => {
    switch (action.type) {
      case actionTypes.Login: {
        const { authToken } = action.payload;

        return { authToken, user: undefined };
      }
      case actionTypes.Register: {
        const { authToken } = action.payload;

        return { authToken, user: undefined };
      }
      case actionTypes.Logout: {
        return { authToken: undefined, user: undefined };
      }
      case actionTypes.UserLoaded: {
        const { user } = action.payload;
        return { ...state, user };
      }
      default:
        return state;
    }
  }
);

export const actions = {
  login: (authToken) => ({ type: actionTypes.Login, payload: { authToken } }),
  register: () => ({ type: actionTypes.Register, payload: { authToken } }),
  logout: () => ({ type: actionTypes.Logout }),
  requestuser: (user) => ({
    type: actionTypes.UserRequested,
    payload: { user },
  }),
  fulfillUser: (user) => ({ type: actionTypes.UserLoaded, payload: { user } }),
};

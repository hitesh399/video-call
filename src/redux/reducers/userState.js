import ActionTypes from '../actionTypes';

const INITIAL_STATE = {
  userName: null,
  roomID: null,
  hmsInstance: undefined,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_USER_DATA.REQUEST:
      return {
        ...state,
        ...action.payload,
      };
    case ActionTypes.UPDATE_HMS_INSTANCE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

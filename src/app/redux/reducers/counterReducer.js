import * as actionsTypes from "../actionsTypes";

const DEFAULT_STATE = {
  counter: 0,
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionsTypes.COUNTER_INCREASE:
      return { counter: state.counter + 1 };
    case actionsTypes.COUNTER_INCREASE:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

export const getCounter = ({ getCounter }) => ({
  getCounter,
});

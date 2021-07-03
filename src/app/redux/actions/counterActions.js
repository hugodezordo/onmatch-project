import * as actionsTypes from "../actionsTypes";
import { getCounter } from "../reducers/rootReducer";

export const mapStateToProps = (state) => ({
  ...getCounter(state),
});

export const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch({ type: actionsTypes.COUNTER_INCREASE }),
    decreaseCounter: () => dispatch({ type: actionsTypes.COUNTER_DECREASE }),
  };
};

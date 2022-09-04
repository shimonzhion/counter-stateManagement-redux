import { INCREMENT, DECREMENT, RESET } from "./counter-type";

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
    reset: () => dispatch({ type: RESET }),
  };
};
export { mapDispatchToProps };

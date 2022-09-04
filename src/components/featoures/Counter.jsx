import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../store/actions/counter-actions";

const mapStateToProps = (state) => {
  return { count: state };
};

function Counter({ count, increment, decrement, reset }) {
  return (
    <div className="counter">
      COUNT :{count}
      <br />
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

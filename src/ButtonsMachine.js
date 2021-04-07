import React from "react";
import { connect } from "react-redux";
import { displayText } from "./actions/displayText";
import { counter } from "./actions/counter";

const text = "Hello";

class ButtonsMachine extends React.Component {
  render() {
    const { displayText } = this.props;
    const { counter } = this.props;

    const { display } = this.props;
    const { number } = this.props;

    return (
      <div id="container">
        <button className="display-text" onClick={() => displayText(text)} />
        <button className="count" onClick={() => counter()} />

        <h1>{display}</h1>

        <div id="display">{number}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  display: state.display,
  number: state.number,
});

const mapDispatchToProps = (dispatch) => ({
  displayText: (message) => dispatch(displayText(message)),
  counter: () => dispatch(counter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsMachine);

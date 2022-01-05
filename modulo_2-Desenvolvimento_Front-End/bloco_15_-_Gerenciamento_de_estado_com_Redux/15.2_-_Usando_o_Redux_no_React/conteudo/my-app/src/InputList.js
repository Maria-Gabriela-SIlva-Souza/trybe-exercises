import React from "react";
import PropTypes from 'prop-types';
import addAssingment from "./action";
import { connect } from "react-redux";

class InputList extends React.Component {
  constructor() {
    super();
    this.state = { textValue: '' }
  }

  render() {
    const { add } = this.props;
    const { textValue } = this.state;

    return (
      <div>
        <input
          type='text'
          placeholder='Digite a Tarefa'
          onChange={(event) => this.setState({ textValue: event.target.value })}
        />
        <button type="button" onClick={() => add(textValue)}>
          Adicionar Tarefa
        </button>
      </div>
    )
  }
}

InputList.propTypes = {
  add: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(addAssingment(value)),
});

export default connect(null, mapDispatchToProps)(InputList)
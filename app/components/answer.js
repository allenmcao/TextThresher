import React from 'react';

export default React.createClass({
  displayName: 'Answer',

  propTypes: {
    answer: React.PropTypes.object.isRequired,
    parentId: React.PropTypes.number.isRequired
  },

  render() {
    let answer = this.props.answer;
    let parentId = `parentId-${this.props.parentId}`;

    return (
      <input className='survey-unit__answer' type='radio' value={answer.id} id={answer.answer_id} name={parentId}>
        {answer.text}
      </input>
    );
  }
});
// Components
import QuizContext from 'components/quiz/QuizQuestion'

// React and Redux
import React, { Component } from 'react';
import ReactCSSTransitionsGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import tmpQuestions from 'assets/tmpQuestions.json';

export class QuizAccordion extends Component {
	render() {
		return(
			{this.props.questions.map((question) => {
	            return (
	              <QuizQuestion key={question.id}
	                question={question}
	                onUpdate={this.onUpdate} />
	            );
          	})}
		)
	}
}
import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackBtn, Wrapper } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map((option,i) => (
        <FeedbackBtn key={i} type="button" onClick={onLeaveFeedback}>
          {option}
        </FeedbackBtn>
      ))}
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
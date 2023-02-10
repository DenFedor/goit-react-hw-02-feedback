import React from "react";
import PropTypes from 'prop-types';
import { StatName } from "./Statistics.styled";

export const Statistics = ({good, neutral ,bad ,total, positivePercentage}) => {return (
<div>
<StatName>Good: {good}</StatName>
<StatName>Neutral: {neutral}</StatName>
<StatName>Bad: {bad}</StatName>
<StatName>Total: {total}</StatName>
<StatName>Positive feedback: {positivePercentage} %</StatName>
            </div>)
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
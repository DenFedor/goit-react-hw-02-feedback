import React from "react";
import PropTypes from 'prop-types';
import { TitleName } from "./Section.styled";
export const Section = ({title, children}) => {
return (
    <section>  
    <TitleName>{title}</TitleName>
    {children}
    </section>
  
)
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}
import React from 'react';
import { TittleAccordion } from '../../statics/styles/accordion/headerAccordion.jsx';
import {
  BoxDetails,
  BoxMain,
  TypographyDetails,
} from '../../statics/styles/manageSchedule/detailsSchedule/detailsCard.jsx';
import BlueLargeButton from '../buttons/BlueLargeButton.jsx';
import ProgressCircle from '../ProgressCircle.jsx';

const DetailsSchedule = ({ title, description, progress }) => {
  return (
    <>
      <BoxMain>
        <ProgressCircle progress={progress} />
        <BoxDetails>
          <TittleAccordion>{title}</TittleAccordion>
          <TypographyDetails>{description}</TypographyDetails>
        </BoxDetails>
      </BoxMain>
      <BlueLargeButton>Ver {title}</BlueLargeButton>
    </>
  );
};

export default DetailsSchedule;

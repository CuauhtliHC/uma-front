import React from 'react';
import { Link } from 'react-router-dom';
import { TittleAccordion } from '../../statics/styles/accordion/headerAccordion.jsx';
import {
  BoxDetails,
  BoxMain,
  TypographyDetails,
} from '../../statics/styles/manageSchedule/detailsSchedule/detailsCard.jsx';
import BlueLargeButton from '../buttons/BlueLargeButton.jsx';
import ProgressCircle from './ProgressCircle.jsx';

const DetailsSchedule = ({
  title, description, progress, route,
}) => {
  return (
    <>
      <BoxMain>
        {progress && <ProgressCircle progress={progress} />}
        <BoxDetails>
          <TittleAccordion>{title}</TittleAccordion>
          <TypographyDetails>{description}</TypographyDetails>
        </BoxDetails>
      </BoxMain>
      <Link to={route} style={{ textDecoration: 'none' }}>
      <BlueLargeButton>
        Ver {title}
      </BlueLargeButton>
      </Link>
    </>
  );
};

export default DetailsSchedule;

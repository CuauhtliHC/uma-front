import React from 'react';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  AccordionMain,
  TittleAccordion,
} from '../../statics/styles/accordion/headerAccordion.jsx';

const FullAccordion = ({ children, title }) => {
  return (
    <AccordionMain>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <TittleAccordion>{title}</TittleAccordion>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </AccordionMain>
  );
};

export default FullAccordion;

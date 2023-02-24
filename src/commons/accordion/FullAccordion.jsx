import React from 'react';
import { AccordionDetails, AccordionSummary, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  AccordionMain,
  SubTitleAccordion,
  TittleAccordion,
} from '../../statics/styles/accordion/headerAccordion.jsx';

const FullAccordion = ({ children, title, subtitle }) => {
  return (
    <AccordionMain>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box>
          <TittleAccordion>{title}</TittleAccordion>
          {subtitle && <SubTitleAccordion>{subtitle}</SubTitleAccordion>}
        </Box>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </AccordionMain>
  );
};

export default FullAccordion;

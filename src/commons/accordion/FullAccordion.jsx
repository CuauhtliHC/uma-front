import React from 'react';
import Box from '@mui/material/Box';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
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

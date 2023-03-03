import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';

const AccordionMain = styled(Accordion)({ marginTop: '5%' });

const TittleAccordion = styled(Typography)({
  fontSize: '16px',
  fontWeight: 700,
});

const SubTitleAccordion = styled(Typography)({ fontWeight: 400, fontSize: '12px' });

export { AccordionMain, TittleAccordion, SubTitleAccordion };

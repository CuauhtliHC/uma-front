import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Box } from '@mui/material';
import CommonDate from '../commons/CommonDate.jsx';
import getDatesInRange from '../utils/arrayOfDates.jsx';

const DatesCarousel = () => {
  const { arrayDates, index } = getDatesInRange();
  const [emblaRef] = useEmblaCarousel({ loop: false, startIndex: index });

  return (
    <Box overflow="hidden" ref={emblaRef}>
      <Box display="flex">
        {arrayDates.map((day, i) => <CommonDate day={day} key={i}/>)}
      </Box>
    </Box>
  );
};

export default DatesCarousel;

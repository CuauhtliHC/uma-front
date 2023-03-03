import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import BoxDate from '../commons/carrousel/BoxDate.jsx';
import getDatesInRange from '../utils/arrayOfDates.jsx';
import {
  BoxMain,
  SecondaryBox,
} from '../statics/styles/manageSchedule/carrousel/carrousel.jsx';
import Dates from '../commons/carrousel/Dates.jsx';

const DatesCarousel = () => {
  const { arrayDates, index } = getDatesInRange();
  const [emblaRef] = useEmblaCarousel({ loop: false, startIndex: index });

  return (
    <BoxMain ref={emblaRef}>
      <SecondaryBox>
        {arrayDates.map((day, i) => (
          <BoxDate day={day} key={i}>
            <Dates day={day}/>
          </BoxDate>
        ))}
      </SecondaryBox>
    </BoxMain>
  );
};

export default DatesCarousel;

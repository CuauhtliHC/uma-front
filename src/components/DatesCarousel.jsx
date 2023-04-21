import React from 'react';
import { useParams } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import BoxDate from '../commons/carrousel/BoxDate.jsx';
import getDatesInRange from '../utils/arrayOfDates.jsx';
import {
  BoxMain,
  SecondaryBox,
} from '../statics/styles/manageSchedule/carrousel/carrousel.jsx';
import Dates from '../commons/carrousel/Dates.jsx';

const DatesCarousel = () => {
  const { day } = useParams();
  const { arrayDates, index } = getDatesInRange(day);
  const [emblaRef] = useEmblaCarousel({ loop: false, startIndex: index });

  return (
    <BoxMain ref={emblaRef}>
      <SecondaryBox>
        {arrayDates.map((dayDescription, i) => (
          <BoxDate dayDescription={dayDescription} key={i}>
            <Dates day={dayDescription}/>
          </BoxDate>
        ))}
      </SecondaryBox>
    </BoxMain>
  );
};

export default DatesCarousel;

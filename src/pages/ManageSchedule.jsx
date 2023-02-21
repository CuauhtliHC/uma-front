import React from 'react';
import DatesCarousel from '../components/DatesCarousel.jsx';
import FullAccordion from '../commons/accordion/FullAccordion.jsx';
import DetailsSchedule from '../commons/detailsSchedule/DetailsSchedule.jsx';
import BoxDetails from '../commons/detailsSchedule/BoxDetails.jsx';
import WelcomeCard from '../components/ManageSchedule/WelcomeCard.jsx';

const ManageSchedule = () => {
  const data = [
    { progress: 22, title: 'Repartidores', description: '2/10 activos' },
    { progress: 80, title: 'Paquetes', description: '16/20 repartidos' },
  ];
  return (
    <>
      <WelcomeCard />
      <DatesCarousel />
      <FullAccordion title={'15/02/23 - Detalles'}>
        {data.map((obj) => (
          <BoxDetails key={obj.title}>
            <DetailsSchedule
              progress={obj.progress}
              title={obj.title}
              description={obj.description}
            />
          </BoxDetails>
        ))}
      </FullAccordion>
    </>
  );
};

export default ManageSchedule;

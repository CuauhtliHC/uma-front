import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DatesCarousel from '../components/DatesCarousel.jsx';
import FullAccordion from '../commons/accordion/FullAccordion.jsx';
import DetailsSchedule from '../commons/detailsSchedule/DetailsSchedule.jsx';
import BoxDetails from '../commons/detailsSchedule/BoxDetails.jsx';
import WelcomeCard from '../components/ManageSchedule/WelcomeCard.jsx';
import { functGetTotalPackage } from '../utils/shedule.jsx';
import { dateDiagonalFormat } from '../utils/today.jsx';

const ManageSchedule = () => {
  const { day } = useParams();
  const [total, setTotal] = useState(null);
  const [totalSent, setTotalSent] = useState(null);
  const [percentage, setPercentage] = useState(null);
  useEffect(() => {
    functGetTotalPackage(day, setTotal, setTotalSent, setPercentage);
  }, []);
  const data = [
    {
      progress: 22,
      title: 'Repartidores',
      description: '2/10 activos',
      route: '/gestionar_repartidores',
    },
    {
      progress: percentage,
      title: 'Paquetes',
      description:
        total === 0 || null ? 'No hay paquetes a repartir' : `${totalSent}/${total} repartidos`,
      route: '/gestionar_paquetes',
    },
  ];
  return (
    <>
      <WelcomeCard />
      <DatesCarousel />
      <FullAccordion title={`${dateDiagonalFormat(day)} - Detalles`}>
        {data.map((obj) => (
          <BoxDetails key={obj.title}>
            <DetailsSchedule
              progress={obj.progress}
              title={obj.title}
              description={obj.description}
              route={obj.route}
            />
          </BoxDetails>
        ))}
      </FullAccordion>
    </>
  );
};

export default ManageSchedule;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import repartidoresFake from '../statics/DummyData/repartidoresFake';
import DistributorsCard from './DistributorsCard.jsx';
import FullAccordion from '../commons/accordion/FullAccordion.jsx';
import MoreButton from '../commons/buttons/MoreButton.jsx';
import { MainBoxDistributors } from '../statics/styles/distributors/distributorsStyle.jsx';

const Distributors = () => {
  const [showCount, setShowCount] = useState(3);

  const handleShowMore = () => {
    setShowCount(showCount + 3);
  };

  return (
    <MainBoxDistributors>
      <FullAccordion title={'Repartidores'}>
        {repartidoresFake.slice(0, showCount).map((data) => (
          <Link
            to={`/gestionar_repartidores/${data.id}`}
            key={data.id}
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
          >
            <DistributorsCard
              key={data.id}
              name={data.name}
              status={data.status}
              percentage={data.percentage}
              avatar={data.img}
            />
          </Link>
        ))}
        {showCount < repartidoresFake.length && (
          <MoreButton more={handleShowMore} />
        )}
      </FullAccordion>
    </MainBoxDistributors>
  );
};

export default Distributors;

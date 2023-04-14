import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DistributorsCard from './DistributorsCard.jsx';
import FullAccordion from '../commons/accordion/FullAccordion.jsx';
import MoreButton from '../commons/buttons/MoreButton.jsx';
import { MainBoxDistributors } from '../statics/styles/distributors/distributorsStyle.jsx';
import { functGetDistributors, functionAddDataDistributors } from '../utils/getDistributors.jsx';

const Distributors = () => {
  const [showCount, setShowCount] = useState(6);
  const [dataUsers, setDataUsers] = useState(null);

  useEffect(() => {
    functGetDistributors(showCount, setDataUsers);
  }, [showCount]);

  const handleShowMore = () => {
    setShowCount(showCount + 3);
  };

  return (
    <MainBoxDistributors>
      <FullAccordion title={'Repartidores'}>
        {dataUsers && functionAddDataDistributors(dataUsers.rows, showCount).map((data) => (
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
        {dataUsers && showCount < dataUsers.rows && (
          <MoreButton more={handleShowMore} />
        )}
      </FullAccordion>
    </MainBoxDistributors>
  );
};

export default Distributors;

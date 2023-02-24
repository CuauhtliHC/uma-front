import React from 'react';
import FullAccordion from '../commons/accordion/FullAccordion.jsx';
import BackButton from '../commons/buttons/BackButton.jsx';
import Card from '../components/Card.jsx';
import usuariosFake from '../statics/DummyData/usuariosFake';

const ManagePackages = () => {
  return (
    <>
      <BackButton />
      <FullAccordion title={'Paquetes'} subtitle={'Hay 523 paquetes'}>
        {usuariosFake[0].paquetesPendientes[0]
          && usuariosFake[0].paquetesPendientes.map((data, i) => {
            return (
              <Card
                direccion={data.direccion}
                estado={data.estado}
                id={data.id}
                key={i}
              />
            );
          })}
      </FullAccordion>
    </>
  );
};

export default ManagePackages;

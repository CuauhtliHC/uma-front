import React from 'react';
import { useNavigate } from 'react-router';
import FullAccordion from '../commons/accordion/FullAccordion.jsx';
import BackButton from '../commons/buttons/BackButton.jsx';
import Card from '../components/Card.jsx';
import usuariosFake from '../statics/DummyData/usuariosFake';
import ButtonBlueAdd from '../commons/buttons/ButtonBlueAdd.jsx';

const ManagePackages = () => {
  const navigate = useNavigate();
  const BackToAgenda = () => {
    navigate('/gestionar_agenda');
  };
  const NavigateToAddPackage = () => {
    navigate('/addPacket');
  };
  return (
    <>
      <BackButton handleSubmit={BackToAgenda} />
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
      <ButtonBlueAdd handleSubmit={NavigateToAddPackage}/>
    </>
  );
};

export default ManagePackages;

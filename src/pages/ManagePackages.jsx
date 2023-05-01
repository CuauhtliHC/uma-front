import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import FullAccordion from '../commons/accordion/FullAccordion.jsx';
import BackButton from '../commons/buttons/BackButton.jsx';
import CardPackage from '../commons/CardPackage.jsx';
import ButtonBlueAdd from '../commons/buttons/ButtonBlueAdd.jsx';
import { dateFormat } from '../utils/today.jsx';
import { funcGetAllPackageDay, funcGetStatus } from '../service/getPackageAdmin.jsx';

const ManagePackages = () => {
  const { day } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    funcGetAllPackageDay(day, setData);
  }, [day]);
  const BackToAgenda = () => {
    navigate(`/gestionar_agenda/${dateFormat}`);
  };
  const NavigateToAddPackage = () => {
    navigate('/addPacket');
  };
  return (
    <>
      <BackButton handleSubmit={BackToAgenda} />
      {data && (
        <FullAccordion title={'Paquetes'} subtitle={`Hay ${data.total} paquetes`}>
          {data.all.map((pkg, i) => {
            return (
              <CardPackage
                direccion={pkg.InProgressOrder ? pkg.Package.address : pkg.address}
                estado={funcGetStatus(pkg)}
                id={pkg.id}
                key={i}
              />
            );
          })}
        </FullAccordion>
      )}
      <ButtonBlueAdd handleSubmit={NavigateToAddPackage} />
    </>
  );
};

export default ManagePackages;

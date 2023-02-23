import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import AddPackage from '../commons/AddPackage.jsx';
import packageFake from '../statics/DummyData/packagesFake';
import BlueLargeButton from '../commons/buttons/BlueLargeButton.jsx';
import BackButton from '../commons/buttons/BackButton.jsx';
import {
  MainBox,
  SubtitleGetPackage,
  TitleGetPackage,
  WarningTypography,
} from '../statics/styles/getPackage/title.jsx';
import { listPackage } from '../state/addingPackage.jsx';
import MoreButton from '../commons/buttons/MoreButton.jsx';

const GetPackage = () => {
  const navigate = useNavigate();
  const { total } = useRecoilValue(listPackage);
  const [data, setData] = useState(null);
  const [maxPackage, setMaxPackage] = useState(3);
  useEffect(() => {
    setData(packageFake);
  }, []);
  const backToViewStart = () => {
    navigate('/iniciar_jornada');
  };
  const startJornada = () => {
    navigate('/iniciar_jornada');
  };

  const more = () => {
    setMaxPackage(maxPackage + 3);
  };

  return (
    <>
      <BackButton handleSubmit={backToViewStart} />
      <MainBox>
        <TitleGetPackage>Obtener paquetes</TitleGetPackage>
        <SubtitleGetPackage>
          ¿Cuantos paquetes más vas a repartir hoy?
        </SubtitleGetPackage>
        {total > 10 && (
          <WarningTypography>
            Tiene mas de 10 paquetes seleccionados
          </WarningTypography>
        )}
        {data ? (
          <>
            {data.slice(0, maxPackage).map((dataPackage, i) => {
              return (
                <AddPackage
                  key={i}
                  id={dataPackage.id}
                  direction={dataPackage.direction}
                  maxQuantity={dataPackage.maxQuantity}
                />
              );
            })}
            {maxPackage < data.length && (
              <MoreButton more={more} />
            )}
          </>
        ) : null}
      </MainBox>
      <BlueLargeButton handleSubmit={startJornada} total={total}>
        INICIAR JORNADA
      </BlueLargeButton>
    </>
  );
};

export default GetPackage;

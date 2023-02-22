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

const GetPackage = () => {
  const navigate = useNavigate();
  const { total } = useRecoilValue(listPackage);
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(packageFake);
  }, []);
  const backToViewStart = () => {
    navigate('/iniciar_jornada');
  };
  const startJornada = () => {
    navigate('/iniciar_jornada');
  };
  return (
    <>
      <BackButton handleSubmit={backToViewStart} />
      <MainBox>
        <TitleGetPackage>Obtener paquetes</TitleGetPackage>
        <SubtitleGetPackage>
          ¿Cuantos paquetes más vas a repartir hoy?
        </SubtitleGetPackage>
        { total > 10
        && <WarningTypography>
          Tiene mas de 10 paquetes seleccionados
        </WarningTypography>
        }
        {data
          ? data.map((dataPackage, i) => {
            return (
                <AddPackage
                  key={i}
                  id={dataPackage.id}
                  direction={dataPackage.direction}
                  maxQuantity={dataPackage.maxQuantity}
                />
            );
          })
          : null}
        <BlueLargeButton handleSubmit={startJornada} total={total}>
          INICIAR JORNADA
        </BlueLargeButton>
      </MainBox>
    </>
  );
};

export default GetPackage;

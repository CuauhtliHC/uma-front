import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps.jsx';
import {
  BoxButton,
  BoxList,
  BoxTypography,
  ButtonFinish,
  FirstTypography,
  MainBoxDistribution,
  SecondBox,
  SecondTypography,
  TitleDistribution,
} from '../../statics/styles/currentDistribution/currentDistributionStyle.jsx';
import BackButton from '../../commons/buttons/BackButton.jsx';

const CurrentDistribution = () => {
  const navigate = useNavigate();
  const data = 'En Curso';
  return (
    <>
      <BackButton handleSubmit={() => navigate('/iniciar_jornada')} />
      <MainBoxDistribution>
        <SecondBox>
          <>
            <TitleDistribution variant="h1">Reparto {data}</TitleDistribution>
            <GoogleMaps destination={'Amenabar 2356,CABA'} />
            <BoxList>
              <BoxTypography>
                <FirstTypography>Destino:</FirstTypography>
                <SecondTypography>Amenabar 2356,CABA</SecondTypography>
              </BoxTypography>
              <BoxTypography>
                <FirstTypography># paquete:</FirstTypography>
                <SecondTypography>712</SecondTypography>
              </BoxTypography>
              <BoxTypography>
                <FirstTypography>Recibe:</FirstTypography>
                <SecondTypography>Raul Rodriguez</SecondTypography>
              </BoxTypography>
            </BoxList>
          </>
          <BoxButton>
            <ButtonFinish>Finalizar</ButtonFinish>
          </BoxButton>
        </SecondBox>
      </MainBoxDistribution>
    </>
  );
};

export default CurrentDistribution;

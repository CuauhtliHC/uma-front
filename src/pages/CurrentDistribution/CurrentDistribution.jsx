import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import { getOrderById } from '../../service/getOrderById.jsx';
import { funcGetStatus } from '../../service/getPackageAdmin.jsx';

const CurrentDistribution = () => {
  const navigate = useNavigate();
  const [order, setOrderData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getOrderById(id, setOrderData);
  }, [id]);
  return (
    <>
      <BackButton handleSubmit={() => navigate('/iniciar_jornada')} />
      <MainBoxDistribution>
        <SecondBox>
          {order && (
            <>
              <TitleDistribution variant="h1">Reparto {funcGetStatus(order)}</TitleDistribution>
              <GoogleMaps destination={order.Package.address} />
              <BoxList>
                <BoxTypography>
                  <FirstTypography>Destino:</FirstTypography>
                  <SecondTypography>{order.Package.address}</SecondTypography>
                </BoxTypography>
                <BoxTypography>
                  <FirstTypography># paquete:</FirstTypography>
                  <SecondTypography>{order.Package.id}</SecondTypography>
                </BoxTypography>
                <BoxTypography>
                  <FirstTypography>Recibe:</FirstTypography>
                  <SecondTypography>{order.Package.addresses}</SecondTypography>
                </BoxTypography>
              </BoxList>
            </>
          )}
          <BoxButton>
            <ButtonFinish>Finalizar</ButtonFinish>
          </BoxButton>
        </SecondBox>
      </MainBoxDistribution>
    </>
  );
};

export default CurrentDistribution;

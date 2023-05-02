import React from 'react';
import { useRecoilValue } from 'recoil';
import { BoxMain } from '../../statics/styles/manageSchedule/detailsSchedule/detailsCard.jsx';
import {
  MdAvatar, SecondaryBox, TypographyWelcome, TypographyTitle,
} from '../../statics/styles/manageSchedule/welcomeCard/welcomeCard.jsx';
import { user } from '../../state/user.jsx';
import perfilDelivery from '../../statics/images/delivery.jpg';
import perfilAdmin from '../../statics/images/admin.jpg';

const WelcomeCard = () => {
  const dataUser = useRecoilValue(user);
  return (
    <BoxMain>
      <MdAvatar alt="foto de perfil" src={dataUser.isAdmin === 'ADMIN_ROL' ? perfilAdmin : perfilDelivery} />
      <SecondaryBox>
        <TypographyWelcome>
          Hola {dataUser.name}!
        </TypographyWelcome>
        <TypographyTitle>
          Gestionar Pedidos
        </TypographyTitle>
      </SecondaryBox>
    </BoxMain>
  );
};

export default WelcomeCard;

import React from 'react';
import { useRecoilValue } from 'recoil';
import { BoxMain } from '../../statics/styles/manageSchedule/detailsSchedule/detailsCard.jsx';
import {
  MdAvatar, SecondaryBox, TypographyWelcome, TypographyTitle,
} from '../../statics/styles/manageSchedule/welcomeCard/welcomeCard.jsx';
import { user } from '../../state/user.jsx';

const WelcomeCard = () => {
  const dataUser = useRecoilValue(user);
  return (
    <BoxMain>
      <MdAvatar />
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

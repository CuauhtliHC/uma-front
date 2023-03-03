import React from 'react';
import { BoxMain } from '../../statics/styles/manageSchedule/detailsSchedule/detailsCard.jsx';
import {
  MdAvatar, SecondaryBox, TypographyWelcome, TypographyTitle,
} from '../../statics/styles/manageSchedule/welcomeCard/welcomeCard.jsx';

const WelcomeCard = () => {
  return (
    <BoxMain>
      <MdAvatar />
      <SecondaryBox>
        <TypographyWelcome>
          Hola Admin!
        </TypographyWelcome>
        <TypographyTitle>
          Gestionar Pedidos
        </TypographyTitle>
      </SecondaryBox>
    </BoxMain>
  );
};

export default WelcomeCard;

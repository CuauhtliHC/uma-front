import React from 'react';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import { ImgLogoNavBar } from '../../statics/styles/navbarStyle.jsx';
import logoFD from '../../statics/images/logoFastDelivery.jpeg';
import { user } from '../../state/user.jsx';
import { dateFormat } from '../../utils/today.jsx';

const LogoNavBar = () => {
  const navigate = useNavigate();
  const dataUser = useRecoilValue(user);
  return (
    <>
      <ImgLogoNavBar
        component="img"
        alt="Logo"
        src={logoFD}
        onClick={() => navigate(
          dataUser.isAdmin === 'ADMIN_ROL'
            ? `/gestionar_agenda/${dateFormat}`
            : '/iniciar_jornada',
        )
        }
      />
    </>
  );
};

export default LogoNavBar;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import GetPackage from '../pages/GetPackage.jsx';
import Workday from '../pages/Workday.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Profile from '../pages/Profile.jsx';
import RestorePassword from '../pages/RestorePassword.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import { user } from '../state/user.jsx';
import LoggedRestricted from './LoggedRestricted.jsx';
import CurrentDistribution from '../pages/CurrentDistribution/CurrentDistribution.jsx';
import ManageSchedule from '../pages/ManageSchedule.jsx';
import ManageDistributors from '../pages/ManageDistributors.jsx';
import AddPacketAdmin from '../pages/AddPacketAdmin/AddPacketAdmin.jsx';
import Error404 from '../pages/Error404.jsx';
import DealerDetail from '../pages/DealerDetail.jsx';
import ManagePackages from '../pages/ManagePackages.jsx';
import ResetPassword from '../pages/ResetPassword.jsx';
import DDJJ from '../pages/DDJJ.jsx';

const Links = () => {
  const dataUser = useRecoilValue(user);
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/login" replace />} />
      <Route exact path="/gestionar_agenda" element={<ManageSchedule />} />
      <Route
        exact
        path="/gestionar_repartidores"
        element={<ManageDistributors />}
      />
      <Route
        exact
        path="/gestionar_repartidores/:id"
        element={<DealerDetail />}
      />
      <Route path="*" element={<Error404 />} />
      <Route exact path="/gestionar_paquetes" element={<ManagePackages />} />
      <Route exact path="/ddjj" element={<DDJJ />} />
        <Route exact path="/addPacket" element={<AddPacketAdmin />} />
      <Route element={<ProtectedRoute user={dataUser} />}>
        <Route exact path="/mi_perfil" element={<Profile />} />
        <Route exact path="/obtener_paquete" element={<GetPackage />} />
        <Route exact path="/iniciar_jornada" element={<Workday />} />
        <Route
          exact
          path="/obtener_paquete/:id"
          element={<CurrentDistribution />}
        />
      </Route>
      <Route element={<LoggedRestricted user={dataUser} />}>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/recuperar_contraseña"
          element={<RestorePassword />}
        />
        <Route exact path="/resetPassword/:token" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
};

export default Links;

import avatarImg from '../images/avatar.png';

const usuariosFake = [
  {
    id: 1,
    email: 'juanperez@mail.com',
    contraseña: '1234clave',
    nombre: 'Juan Perez',
    direccion: 'Balcarce 50, CABA',
    fotoPerfil:
      'https://media.tycsports.com/files/2022/06/14/440404/las-20-mejores-fotos-de-perfil-para-tu-cuenta-de-free-fire_w416.webp',
    paquetesPendientes: [
      { direccion: 'Mendoza 1810, CABA', estado: 'En viaje' },
      {
        direccion: 'Miguel de Azcuenaga 826, Vicente Lopez',
        estado: 'Pendiente',
      },
      { direccion: 'Ramallo 2186, CABA ', estado: 'Pendiente' },
    ],
    paquetesEntregados: [
      { direccion: 'Amenabar 2356, CABA', estado: 'Entregado' },
      { direccion: 'Av Cerviño 3620, CABA', estado: 'Entregado' },
      { direccion: 'Juncal 2110, CABA', estado: 'Cancelado' },
      { direccion: 'Av. Carabobo y Rivadavia, CABA', estado: 'Entregado' },
      { direccion: 'Rosario 623, CABA', estado: 'Entregado' },
      { direccion: 'Santa Fe 4567', estado: 'Entregado' },
    ],
    totalPaquetesPendientes: 3,
    totalPaquetesEntregados: 6,
  },
  {
    id: 2,
    email: 'MariaGarcia@mail.com',
    contraseña: '1234clave',
    nombre: 'Maria Garcia',
    direccion: 'Juan B. Justo 1456, CABA',
    fotoPerfil: avatarImg,
    paquetesPendientes: [],
    paquetesEntregados: [],
    totalPaquetesPendientes: 0,
    totalPaquetesEntregados: 0,
  },
];

export default usuariosFake;

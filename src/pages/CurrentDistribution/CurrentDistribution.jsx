import React from 'react';
import { useParams } from 'react-router';
import './style.css';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps.jsx';

const CurrentDistribution = () => {
  const params = useParams();
  const data = 'En Curso';
  return (
    <>
      <div className="boxFather">
        <Link to={'/iniciar_jornada'} style={{ textDecoder: 'none' }}>
          <ArrowBackIosNewIcon
            sx={{
              width: '15px',
              height: '15px',
              margin: '15px 0px',
              color: 'black',
            }}
          />
        </Link>
        <div className="box">
          <div className="boxConteiner">
            <h5>Reparto {data}</h5>
            <GoogleMaps destination={'Amenabar 2356,CABA'} />
            <ul>
              <li>
                <p>Destino:</p>Amenabar 2356,CABA
              </li>
              <li>
                <p># paquete:</p>712
              </li>
              <li>
                <p>Recibe:</p>Raul Rodriguez
              </li>
            </ul>
          </div>
          <div className="boxButton">
            <a>Finalizar</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentDistribution;

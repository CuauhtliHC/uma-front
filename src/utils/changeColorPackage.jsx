import redBox from '../statics/images/caja-roja.png';
import greenBox from '../statics/images/caja-verde.png';
import yellowBox from '../statics/images/caja-amarilla.png';
import blueBox from '../statics/images/caja-azul.png';

function changeImg(status) {
  if (status === 'Entregado') {
    return greenBox;
  } else if (status === 'Cancelado') {
    return redBox;
  } else if (status === 'En viaje') {
    return yellowBox;
  } else if (status === 'Pendiente') {
    return blueBox;
  }
}

export { changeImg };

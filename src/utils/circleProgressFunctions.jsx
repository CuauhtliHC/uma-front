const handleColorStatus = (status) => {
  if (status === 'Inactivo') {
    return '#FF6B6B';
  }
  if (status === 'Viaje en curso') {
    return '#217BCE';
  }
  if (status === 'Finalizó') {
    return '#96DB76';
  }
};

const handleColorProgressBar = (progress) => {
  if (progress < 50) {
    return '#FF6B6B';
  }
  if (progress < 100 && progress >= 50) {
    return '#FCBC11';
  }
  if (progress === 100) {
    return '#96DB76';
  }
};

export { handleColorStatus, handleColorProgressBar };

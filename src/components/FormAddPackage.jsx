import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PlaceIcon from '@mui/icons-material/Place';
import LocationOffIcon from '@mui/icons-material/LocationOff';
import InputAddPacket from '../commons/InputAddPacket/InputAddPacket.jsx';
import QuantityOfPackages from '../commons/QuantityOfPackages/QuantityOfPackages.jsx';
import ViewsDatePicker from '../commons/ViewsDatePicker/ViewsDatePicker.jsx';
import { SubtitleGetPackage } from '../statics/styles/getPackage/title.jsx';
import MapContainer from './MapContainer/MapContainer.jsx';

const FormAddPackage = ({ formValue, setFormValue, isFormAddress }) => {
  const [displayMap, setDisplayMap] = useState(false);
  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === 'address') {
      setDisplayMap(false);
    }
  };
  const handleDateChange = (name) => (value) => {
    setFormValue((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <Grid container spacing={3} padding={2.5}>
      <Grid display={'flex'} item xs={12}>
        <Grid item xs={10}>
          <InputAddPacket
            labelText={'Direccion'}
            inputType={'text'}
            handleChange={handleChange}
            name={'address'}
          />
        </Grid>
        <Button
          onClick={() => setDisplayMap(!displayMap)}
          variant="text"
          disabled={!isFormAddress}
        >
          {!displayMap ? <PlaceIcon /> : <LocationOffIcon />}
        </Button>
      </Grid>
      {displayMap && <MapContainer address={formValue.address} />}
      <Grid item xs={12}>
        <InputAddPacket
          labelText={'Nombre de quien recibe'}
          inputType={'text'}
          handleChange={handleChange}
          name={'addressee'}
        />
      </Grid>
      <Grid item xs={12}>
        <InputAddPacket
          labelText={'Peso'}
          inputType={'number'}
          handleChange={handleChange}
          name={'weight'}
        />
      </Grid>
      <Grid item xs={12}>
        <ViewsDatePicker
          labelText={'Fecha en la que debe ser repartido'}
          handleChange={handleDateChange('dateOfDelivery')}
          name={'dateOfDelivery'}
          value={formValue.dateOfDelivery}
        />
      </Grid>
      <Grid item>
        <SubtitleGetPackage>
          Cantidad
        </SubtitleGetPackage>
        <QuantityOfPackages />
      </Grid>
    </Grid>
  );
};

export default FormAddPackage;

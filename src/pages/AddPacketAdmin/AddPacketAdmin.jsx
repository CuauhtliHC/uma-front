import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PlaceIcon from '@mui/icons-material/Place';
import LocationOffIcon from '@mui/icons-material/LocationOff';
import ViewsDatePicker from '../../commons/ViewsDatePicker/ViewsDatePicker.jsx';
import QuantityOfPackages from '../../commons/QuantityOfPackages/QuantityOfPackages.jsx';
import {
  SubtitleGetPackage,
  TitleGetPackage,
} from '../../statics/styles/getPackage/title.jsx';
import {
  BlueButton,
  TypographyButton,
} from '../../statics/styles/button/blueButton.jsx';
import InputAddPacket from '../../components/InputAddPacket/InputAddPacket.jsx';
import MapContainer from '../../components/MapContainer/MapContainer.jsx';

const AddPacketAdmin = () => {
  const [formValue, setFormValue] = useState({
    address: null,
    addressee: null,
    weight: null,
    dateOfDelivery: null,
    quantityOfPackages: '1',
  });
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [isFormAddress, setIsFormAddress] = useState(false);
  const [displayMap, setDisplayMap] = useState(false);

  useEffect(() => {
    if (
      formValue.address
      && formValue.addressee
      && formValue.weight
      && formValue.dateOfDelivery
    ) {
      setIsFormCompleted(true);
    }
  }, [formValue]);

  useEffect(() => {
    if (formValue.address) {
      setIsFormAddress(true);
    }
  }, [formValue.address]);

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
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Grid container marginX={1}>
        <Grid xs={12}>
          <Link to={'/gestionar_paquetes'} style={{ textDecoder: 'none' }}>
            <ArrowBackIosNewIcon
              sx={{
                width: '25px',
                color: 'black',
              }}
            />
          </Link>
        </Grid>
        <Grid item marginY={2.5}>
          <TitleGetPackage marginX={1}>Agregar Paquetes</TitleGetPackage>
        </Grid>
      </Grid>
      <Grid container spacing={3} paddingX={2.5}>
        <Grid display={'flex'} item xs={12}>
          <Grid xs={10}>
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
            disabled={!isFormAddress}>
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
          <SubtitleGetPackage color={'#FEBC14'}>
            Cantidad
            <QuantityOfPackages />
          </SubtitleGetPackage>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <BlueButton
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          disabled={!isFormCompleted}>
          <TypographyButton>Agregar</TypographyButton>
        </BlueButton>
      </Grid>
    </>
  );
};

export default AddPacketAdmin;

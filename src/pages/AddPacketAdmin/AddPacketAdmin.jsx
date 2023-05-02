import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import {
  BlueButton,
  TypographyButton,
} from '../../statics/styles/button/blueButton.jsx';
import HeaderAddPackageAdmin from '../../components/HeaderAddPackageAdmin.jsx';
import FormAddPackage from '../../components/FormAddPackage.jsx';
import { functCreatePkg } from '../../utils/forms/createPackage.jsx';
import AlertMessage from '../../commons/AlertMessage.jsx';

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
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    functCreatePkg(formValue, setOpen, setMessage);
  };
  return (
    <>
      <HeaderAddPackageAdmin />
      <AlertMessage open={open} message={message} setOpen={setOpen} />
      <FormAddPackage
        formValue={formValue}
        setFormValue={setFormValue}
        isFormAddress={isFormAddress}
      />
      <Grid item xs={12}>
        <BlueButton
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          disabled={!isFormCompleted}
        >
          <TypographyButton>Agregar</TypographyButton>
        </BlueButton>
      </Grid>
    </>
  );
};

export default AddPacketAdmin;

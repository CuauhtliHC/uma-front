import {
  Box,
  Button,
  Checkbox,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import React from "react";

const GetPackage = () => {
  return (
    <>
      <Box>
        <Typography>Obtener paquetes</Typography>
        <Typography>¿Cuantos paquetes más vas a repartir hoy?</Typography>
        <Box>
          <Checkbox />
          <Typography>Direccion</Typography>
          <Box>
            <IconButton
              sx={{
                border: "1px solid #B2BCCA",
                filter: "drop-shadow(0px 2px 40px rgba(133, 133, 133, 0.08))",
                borderRadius: "3px",
                boxSizing: "border-box",
              }}
            >
              <Remove />
            </IconButton>
            <InputBase
              inputProps={{
                inputMode: "numeric",
                sx: { textAlign: "center", fontWeight: 400 },
              }}
              value={1}
            />
          </Box>
          <IconButton
            sx={{
              border: "1px solid #B2BCCA",
              filter: "drop-shadow(0px 2px 40px rgba(133, 133, 133, 0.08))",
              borderRadius: "3px",
              boxSizing: "border-box",
            }}
          >
            <Add />
          </IconButton>
        </Box>
        <Button
          sx={{
            border: "1px solid #000000",
            borderRadius: "4px",
          }}
          variant="contained"
          fullWidth
        >
          <Typography color="white">INICIAR JORNADA</Typography>
        </Button>
      </Box>
    </>
  );
};

export default GetPackage;

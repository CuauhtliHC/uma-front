import {
  Alert, AlertTitle, Collapse, IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AlertMessage = ({ open, message, setOpen }) => {
  return (
    <Collapse in={open}>
      {message && (
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
          severity={message.status}
        >
          <AlertTitle>{message.title}</AlertTitle>
          {message.description}
        </Alert>
      )}
    </Collapse>
  );
};

export default AlertMessage;

import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import {
  AlertBox,
  CloseButton,
  IconClose,
} from '../statics/styles/alertMessage.jsx';

const AlertMessage = ({ open, message, setOpen }) => {
  return (
    <Collapse in={open}>
      {message && (
        <AlertBox
          action={
            <CloseButton
              aria-label="close"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <IconClose />
            </CloseButton>
          }
          severity={message.status}
        >
          <AlertTitle>{message.title}</AlertTitle>
          {message.description}
        </AlertBox>
      )}
    </Collapse>
  );
};

export default AlertMessage;

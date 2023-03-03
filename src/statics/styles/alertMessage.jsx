import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@mui/system/styled';

const CloseButton = styled(IconButton)({ color: 'inherit' });

const IconClose = styled(CloseIcon)({ fontSize: 'inherit' });

const AlertBox = styled(Alert)({ marginBottom: '20px' });

export { CloseButton, IconClose, AlertBox };

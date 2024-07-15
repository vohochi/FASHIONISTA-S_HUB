import React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

interface Props {
  message: string;
}

const Success: React.FC<Props> = ({ message }) => {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      {message}{' '}
    </Alert>
  );
};

export default Success;

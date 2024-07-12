import React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

interface Props {
  // define your props here
}

const Success: React.FC<Props> = () => {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Here is a gentle confirmation that your action was successful.
    </Alert>
  );
};

export default Success;

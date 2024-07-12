import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface ErrorProps {
  error: string | undefined;
}

export default function Error({ error }: ErrorProps) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">{error}</Alert>
    </Stack>
  );
}

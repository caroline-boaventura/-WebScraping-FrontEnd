import ErrorIcon from '@mui/icons-material/Error';
import { Typography } from '@mui/material';
import { ErrorContainer } from './styles';

export default function Error() {
  return (
    <ErrorContainer>
      <ErrorIcon sx={{ fontSize: '5rem' }} />
      <Typography>Ops, algo deu errado! Tente novamente!</Typography>
    </ErrorContainer>
  );
}
import { Box, Button, Container, Typography } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const ErrorPage: React.FC = () => {
   const retray = (): void => {
     window.location.reload();
   };
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "20vh" }}>
      <ErrorOutlineIcon color="secondary" fontSize="large" />
      <Typography variant="h6" gutterBottom>
        Algo deu errado
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        A API não está respondendo. Por favor, tente novamente mais tarde.
      </Typography>
      <Box mt={4}>
        <Button variant="contained" color="secondary" onClick={() => retray()}>
          Tentar novamente
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorPage;

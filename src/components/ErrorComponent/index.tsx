import { Box, Button, Container, Typography } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const ErrorComponent: React.FC = () => {
  const retray = (): void => {
    window.location.reload();
  };
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "20vh" }}>
      <ErrorOutlineIcon color="secondary" fontSize="large" />
      <Typography variant="h6" gutterBottom>
        Algo deu errado
      </Typography>
      <Box mt={4}>
        <Button variant="contained" color="secondary" onClick={() => retray()}>
          Tentar novamente
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorComponent;

import { ReactElement, ReactNode } from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 60,
    marginBottom: 16,
    padding: 16,
    minWidth: "340px",
  },
  button: {
    marginTop: 16,
  },
}));

interface AppContainerProps {
  children: ReactNode;
}

const AppContainer = ({ children }: AppContainerProps): ReactElement => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      {children!}
    </Container>
  );
};

export default AppContainer;

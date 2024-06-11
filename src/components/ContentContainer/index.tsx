import { ReactElement, ReactNode } from "react";

import Container from "@material-ui/core/Container";

import { useStyles } from "./style";
interface IAppContainerProps {
  children: ReactNode;
}

const AppContainer = ({ children }: IAppContainerProps): ReactElement => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      {children!}
    </Container>
  );
};

export default AppContainer;

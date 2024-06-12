import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { IRoutesTitles } from "../pages/interfaces";

const usePageTitle = (): IRoutesTitles => {
  const location = useLocation();
  const [title, setTitle] = useState<IRoutesTitles>("Suas tarefas!");

  useEffect(() => {
    const getTitle = () => {
      switch (location.pathname) {
        case "/":
          return "Suas tarefas!";
        case "/new-task":
          return "Crie uma nova tarefa";
        default:
          return "Suas tarefas!";
      }
    };

    const newTitle = getTitle();
    document.title = newTitle;
    setTitle(newTitle);
  }, [location]);

  return title;
};

export default usePageTitle;

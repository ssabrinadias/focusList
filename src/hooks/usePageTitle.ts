import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const usePageTitle = (): string => {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getTitle = () => {
      switch (location.pathname) {
        case "/":
          return "Suas tarefas!";
        case "/new-task":
          return "Crie uma nova tarefa";
        default:
          return "Minha Aplicação";
      }
    };

    const newTitle = getTitle();
    document.title = newTitle;
    setTitle(newTitle);
  }, [location]);

  return title;
};

export default usePageTitle;

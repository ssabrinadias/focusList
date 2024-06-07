import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./ToDoList";

function App() {
  return (
    <Router>
      <h1>To Do List</h1>
      <Routes>
        <Route
          path="/"
          element={
            <TodoList/>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


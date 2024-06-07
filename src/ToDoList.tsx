import { Button } from "@material-ui/core";
import "tailwindcss/tailwind.css";
import "./index.css";

function TodoList() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">
         Title
        </h1>
        <Button variant="contained" color="primary" className="mb-2">
          Button 2
        </Button>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
         Button 1
        </button>
      </div>
    </div>
  )
  
}

export default TodoList;

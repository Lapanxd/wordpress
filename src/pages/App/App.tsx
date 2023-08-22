import { RouterProvider } from "react-router-dom";
import router from "./App.router.tsx";

function App() {
  return (
    <div>
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;

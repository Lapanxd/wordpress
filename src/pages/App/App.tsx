import { RouterProvider } from "react-router-dom";
import router from "./App.router.tsx";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

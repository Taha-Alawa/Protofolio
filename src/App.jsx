import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MyProjects from "./pages/MyProjects";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    <Route index element={<Home />} />
    <Route path="Projects" element={<MyProjects />} />
  </Route>
));

function App() {
  return <RouterProvider router={router} />;
}

export default App;

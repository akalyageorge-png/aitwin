import { RouterProvider } from "react-router";
import "./App.css";
import router from "./routes";
import Logo from "./components/ui/Logo";

function App() {
 return (
  <>
   <div class="mainBg">
    <div class="container">
     <div className="topBar">
      <Logo />
     </div>
     <RouterProvider router={router} />
    </div>
   </div>
  </>
 );
}

export default App;

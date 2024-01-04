import { Outlet} from "react-router-dom";
import Footer from "./component/shared/Footer";
import Header from "./component/shared/Header";


function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

import { Provider } from "react-redux";
import Navbar from "./Component/Navbar";
import { store } from "./Store/Store";
import Category from "./Component/Category";
import Footer from "./Component/Footer";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Category />
        <Footer />
      </Provider>
    </>
  );
}

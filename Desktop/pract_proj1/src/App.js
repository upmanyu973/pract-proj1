// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import ForgotPassword from "./components/auth/ForgotPassword";
import { Provider } from "react-redux";
import { store } from "./redux/store/Store";
import Body from "./components/view";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} exact />
            <Route path="/forgotPassword" element={<ForgotPassword />} exact />
            <Route path="/home/*" element={<Body />} exact />
          </Routes>
        </BrowserRouter>

        {/* <PersistGate persistor={persistor}></PersistGate> */}
      </Provider>
    </>
  );
}

export default App;

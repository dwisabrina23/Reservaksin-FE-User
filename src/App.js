<<<<<<< HEAD
import "./App.css";
import Router from "./Routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Config/Redux/Store";
=======
import Router from './Routes';
>>>>>>> 65842f73a9c9229ac776cad3fe5e2dc6ef7a99b7

function App() {
  return (
    <>
<<<<<<< HEAD
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
=======
    <Router/>
>>>>>>> 65842f73a9c9229ac776cad3fe5e2dc6ef7a99b7
    </>
  );
}

export default App;

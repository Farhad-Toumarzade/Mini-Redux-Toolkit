import { Provider } from "react-redux";
import "./App.css";
import store from "./components/store";
import CakeContianer from "./components/cakeContianer";
import MilkContianer from "./components/MilkContianer";

function App() {
  return (
    <Provider store={store}>
      <CakeContianer />
      <MilkContianer />
    </Provider>
  );
}

export default App;

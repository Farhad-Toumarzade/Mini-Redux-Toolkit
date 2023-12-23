import { Provider } from "react-redux";
import "./App.css";
import store from "./components/store";
import CakeContianer from "./components/cakeContianer";
import MilkContianer from "./components/MilkContianer";
import UserList from "./components/UserList";

function App() {
  return (
    <Provider store={store}>
      <CakeContianer />
      <MilkContianer />
      <hr />
      <UserList />
    </Provider>
  );
}

export default App;

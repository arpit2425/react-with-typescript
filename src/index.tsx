import Parent from "./props/Parent";
import ReactDOM from "react-dom";
import GuestList from "./states/GuestList";
import UserSearch from "./states/UserSearch";
const App = () => {
  return <UserSearch />;
};
ReactDOM.render(<App />, document.querySelector("#root"));

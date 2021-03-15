import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { signInAction } from "./reducks/users/actions";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log(selector.users);

  return (
    <div className="App">
      <button
        onClick={() => dispatch(signInAction({ uid: "0001", username: "miu" }))}
      >
        Sign In
      </button>
    </div>
  );
}

export default App;

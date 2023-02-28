import { createContext } from "react";
import "./App.css";
// import FileA from './lesson/UseContext/FileA';
import FileC from "./lesson/UseContext/FileC";

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <div className="App">
      <FirstName.Provider value={"Tarikul"}>
        <LastName.Provider value={"Islam"}>
          {" "}
          <FileC></FileC>{" "}
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default App;
export { FirstName, LastName };

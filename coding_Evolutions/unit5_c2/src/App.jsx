import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import { useState } from "react";

function App() {
  const [toggleButtonForForm, setToggleButtonForForm] = useState(false);

  return (
    <div className="App">
      <button className="togglebtn"
      onClick={() => setToggleButtonForForm(!toggleButtonForForm)}
      >
        {toggleButtonForForm ? "AddStudent" : "ShowStudents"}
      </button>
      <AddStudent/>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
      <br />
      <br />
      {toggleButtonForForm ? < AddStudent/> : <ShowStudents />}
    </div>
  );
}

export default App;

import { useState } from "react";
import axios from "axios";



export const AddStudent = () => {

    const [addstudentData, setAddStudent] = useState({
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        age: "",
        tenth_score: "",
        twelth_score: "",
        preferred_branch: ""
      });


      const handleChange = (e) => {
        const { className, value } = e.target;
        setAddStudent({ ...addstudentData, [className]: value });
      };

      const handleSubmit=(e)=>{
       e.preventDefault()
        //   console.log(addstudentData)
        //   fetch("http://localhost:8080",{method:"students",body:JSON.stringify(addstudentData)})

        axios.post("http://localhost:8080/students",addstudentData ).then((res) => {
            console.log( res.data);
          });
      }


    return (
      <form className="addstudent"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      >
        <div>
          Firstname:{" "}
          <input
            type="text"
            onChange={(e) => {
                handleChange(e);
              }}
            name="first_name"
            className="first_name"
            placeholder="enter first name"
            value={addstudentData.first_name}
          />
        </div>
        <div>
          {" "}
          Last Name:
          <input
          value={addstudentData.last_name}
            type="text"
            onChange={(e) => {
                handleChange(e);
              }}
            name="last_name"
            className="last_name"
            placeholder="enter last name"
          />
        </div>
        <div>
          {" "}
          Email:
          <input
         value={addstudentData.email}

            type="email"
            onChange={(e) => {
                handleChange(e);
              }}
            name="email"
            className="email"
            placeholder="enter email"
          />
        </div>
  
        <div>
          Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
          <div>
            Male
            <input
            value={addstudentData.gender}

              name="gender"
              onChange={(e) => {
                handleChange(e);
              }}
              className="male"
              type="radio"
              value={"male"}
            />{" "}
            Female{" "}
            <input
            value={addstudentData.gender}

              name="gender"
              onChange={(e) => {
                handleChange(e);
              }}
              className="female"
              type="radio"
              value={"female"}
            />
          </div>
        </div>
        <div>
          Age{" "}
          <input

value={addstudentData.age}

            type="number"
            onChange={(e) => {
                handleChange(e);
              }}
            name="age"
            className="age"
            placeholder="enter age"
          />
        </div>
        <div>
          Tenth Score:{" "}
          <input
                    value={addstudentData.tenth_score}

            type="number"
            onChange={(e) => {
                handleChange(e);
              }}
            name="tenth_score"
            className="tenth_score"
            placeholder="enter 10th score"
          />{" "}
        </div>
        <div>
          Twelth Score:{" "}
          <input
                    value={addstudentData.twelth_score}

            type="number"
            onChange={(e) => {
                handleChange(e);
              }}
            name="twelth_score"
            className="twelth_score"
            placeholder="enter 12th score"
          />{" "}
        </div>
        <div>
          <select
            value={""} // select dropdown needs both value and onChange attributes
            name="preferred_branch"
            value={addstudentData.preferred_branch}

            onChange={(e) => {
                handleChange(e);
              }}
            className="preferred_branch"
          >
            <option value="law">law</option>
            <option value="commerce">commerce</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="arts">arts</option>
            <option value="acting">acting</option>
          </select>
        </div>
  
        <input className="submit" type="submit" value="Submit" />
        {
          // <div className="error"></div>
          // show this div with proper error before submitting form, if there's anything not provided
          // eg: first name missing, age cannot be greater than 100 etc
        }
      </form>
    );
  };
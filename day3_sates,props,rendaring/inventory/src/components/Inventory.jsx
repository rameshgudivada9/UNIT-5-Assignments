import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState(
    {
    books: 10,
    notebooks: 13,
    pens: 40,
  }
  );
    // Create add and remove functions here that changes the

    console.log(inv.books)
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={(inv)=>{
          // inv.books++
          inv.books=inv.books+1
          console.log("clicked")
          setInv(inv.books)
          console.log(inv.books)
        }}>+</button>
        <button className="circlularButton">-</button>
        <p>{inv.books}</p>
      </div>
      {/* <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div> */}
            {/*calculate total and show it*/}
      total: {0}
    </div>
  );
};
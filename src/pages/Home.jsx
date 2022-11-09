import React, { useState } from "react";
import PeopleList from "../components/PeopleList";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h3>People List</h3>
      {show && <PeopleList />}
      <button onClick={() => setShow(!show)} className="btn btn-danger">
        {show ? "Clear all" : "View all"}
      </button>
    </div>
  );
};

export default Home;

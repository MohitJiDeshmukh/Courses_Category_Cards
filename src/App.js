import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { apiUrl, filterData } from "./data";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true); //show loading spinner
  const [category, setCategory] = useState(filterData[0].title);

  // below fetchData fun. take all data of apiUrl
  async function fetchData() {
    setLoading(true); //jab data nahi ata , boolean value ko true
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      //Output =>
      setCourses(output.data); //copy data in state
    } catch (error) {
      toast.error("Error");
    }
    setLoading(false); // after data loading , boolean value ko false.
  }

  //useEffect render fetchData(fun. call) ka data , first & once
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div
          className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]"
        >
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

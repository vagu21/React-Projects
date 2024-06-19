import { useState } from "react";
import Navbar from "./Navbar";
import NewsBoard from "./NewsBoard";

const NewsApp = () => {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us");

  return (
    <div>
      <Navbar setCategory={setCategory} setCountry={setCountry} />
      <NewsBoard category={category} country={country} />
    </div>
  );
}

export default NewsApp;

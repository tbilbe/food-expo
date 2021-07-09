import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResult] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const res = await yelp.get("/search", {
        params: {
          limit: 50,
          location: "Manchester",
          term: searchTerm,
        },
      });
      setResult(res.data.businesses);
    } catch (error) {
      setErrMsg("Oops something went wrong!");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, errMsg, results];
};

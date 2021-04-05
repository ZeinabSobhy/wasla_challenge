import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getByCountry } from "../../../Api/Coron";

const Click = (props) => {
  let { country } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    getByCountry(country).then(
      (res) => {
        setData(res?.data);
        console.log("REs", res);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [country]);

  return <div>{country}</div>;
};

export default Click;

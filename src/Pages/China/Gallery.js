import React from "react";
import "./Gallery.css";
import { useParams } from "react-router";
import apiHandler from "../../Api/apiHandler";
import { useEffect, useState } from "react";

export default function China() {
  const [pictures, setPictures] = useState([]);
  var { id } = useParams();

  useEffect(() => {
    apiHandler
      .getAll(id)
      .then((apiRes) => {
        console.log(apiRes);
        setPictures(apiRes.data);
      })
      .catch((apiErr) => console.log(apiErr)
      );

    // fetch(`http://localhost:8080/pictures/${id}`)
    //   .then((response) => {
    //     response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });

    return () => {};
  }, []);

  return <div>{id}</div>;
}
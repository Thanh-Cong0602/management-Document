import React, { Fragment, useState } from "react";

import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function Upload({setPage}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const inputChangeHandler = (setFunction, event) => {
    setFunction(event.target.value);
  };
  const changeHandler = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("file", file);

    fetch("http://localhost/document", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        // navigate("/user/homepage");
        setPage(1);
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Fragment>
      <div className="upload-form">
        <form className="form-style" encType="multipart/form-data">
          <h4>Upload Document</h4> <br />
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => inputChangeHandler(setName, e)}
          />{" "}
          <br />
          <textarea
            className="form-control"
            name="description"
            rows="3"
            cols="50"
            placeholder="Description"
            onChange={(e) => inputChangeHandler(setDescription, e)}
          ></textarea>{" "}
          <br />
          <input
            onChange={changeHandler}
            type="file"
            className="form-control"
            name="file"
          />{" "}
          <br />
          <div className="btn btn-primary" onClick={handleSubmission} >
            Upload
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default Upload;

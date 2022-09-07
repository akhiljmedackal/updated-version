import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./AddUser.css";
import axios from "axios";

const AddUser = () => {
//   const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
//   const [price, setPrice] = useState(0);
  const [password, setPassword] = useState("");
//   const [quantity, setQuantity] = useState(0);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    var token = localStorage.getItem("token");
    console.log(token);

    setLoading(true);

    const formData = new FormData();
    // formData.append("image", file);
    formData.append("name", email);
    // formData.append("price", price);
    formData.append("password", password);
    formData.append("username", username);
    formData.append("role", role);
    const config = {
      headers: { "content-type": "multipart/form-data", "x-auth-token": token },
    };
    try {
      var url = "https://campus-in--backend.herokuapp.com/newProduct/register";
      const response = await axios.post(url, formData, config);
      console.log(response);
      setLoading(false);
    //   setFile(null);
      setEmail("");
      setPassword("");
    //   setPrice(0);
      setUsername("");
    //   setQuantity(0);
      setRole("");
      setLoading(false);

      if (response.status === 200) {
        alert("Product Added Users");
      } else {
        alert("Something went wrong!!!");
      }
    } catch (e) {
      setLoading(false);
      alert(e);
    }
  };

//   const onInputChange = (e) => {
//     setFile(e.target.files[0]);
//   };

  const changeTitleHandler = (e) => {
    setEmail(e.target.value);
  };

//   const changePriceHandler = (e) => {
//     setPrice(e.target.value);
//   };
  const changeCategoryHandler = (e) => {
    setPassword(e.target.value);
  };

  const changeQtyHandler = (e) => {
    setUsername(e.target.value);
  };
  const changeServicesHandler = (e) => {
    setRole(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="login-section">
          <form className="form" onSubmit={submitHandler}>
            <h3 className="titleproduct" style={{ fontSize: "30px" }}>
              ADD USERS
            </h3>
            <div className="input-group">
              <label htmlFor="title">Email</label>

              <input
                type="email"
                name="email"
                value={email}
                onChange={changeTitleHandler}
              />
            </div>
            {/* <div className="input-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                value={price}
                onChange={changePriceHandler}
              />
            </div> */}
            <div className="input-group">
              <label htmlFor="category">Password</label>
              <input
                type="text"
                name="password"
                value={password}
                onChange={changeCategoryHandler}
              />
            </div>
            <div className="input-group">
              <label htmlFor="quantity">Username</label>
              <input
                type="text"
                name="Username"
                value={username}
                onChange={changeQtyHandler}
              />
            </div>
            <div className="input-group">
              <label htmlFor="services">Role</label>
              <input
                type="text"
                name="Role"
                value={role}
                onChange={changeServicesHandler}
              />
            </div>
            {/* <div className="input-group">
              <label htmlFor="imgs">Image</label>
              <input type="file" name="imgs" onChange={onInputChange} />
            </div> */}
            {isLoading && (
              <button
                type="submit"
                style={{
                  width: "310px",
                  height: "50px",
                  color: "#000000",
                  fontSize: "12px",
                }}
              >
                ADDING
              </button>
            )}
            {!isLoading && (
              <button type="submit" className="primary">
                ADD
              </button>
            )}
          </form>
          {/* <div class="row justify-content-center mt-5">
                <div class="col-sm-8">
                <div class="card shadow-lg p-3 mb-5 bg-white rounded">
  <div class="card-header">
  <h1 style={{fontSize: '18px'}}>ADD PRODUCT</h1>
  </div>
  <div class="card-body">
  <form>
  <div class="form-row">
    <div class="form-group col-md-6 mb-2">
      <label for="inputEmail4">Title</label>
      <input type="text" class="form-control" id="inputEmail4" />
      
    </div>
    <div class="form-group col-md-6 mb-2">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group  mb-2">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group mb-2">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group mb-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Add</button> */}
          {/* </form> */}
          {/* </div>
</div> */}
          {/* </div>
            </div>
             */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddUser;

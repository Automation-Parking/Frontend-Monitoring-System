import React from "react";
import "../assets/style/index.css";
import Button from "../components/button";
import FormLogin from "../components/FormLogin";
import InputField from "../components/InputField";
import Header from "../components/Header";
function Home() {
  return (
    <div>
      <Header></Header>
      <InputField name="nama" id="nama">
        Nama
      </InputField>
      <FormLogin method="POST" action="/login"></FormLogin>
      <Button>Ucup</Button>
    </div>
  );
}

export default Home;

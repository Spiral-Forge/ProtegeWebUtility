import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import MultiSelect from "react-multi-select-component";
import firebase from "../Firebase/firebase";
const db = firebase.firestore();

const yearOp = ["First", "Second", "Third", "Fourth"];
const postOp = ["Mentee", "Mentor", "Admin"];
const branchOp = [
  "CSE-1",
  "CSE-2",
  "CSAI",
  "IT-1",
  "IT-2",
  "ECE",
  "MAE",
  "BBA",
  "B.Arch",
];

const langOp = [
  { value: "C++", label: "C++" },
  { value: "Java", label: "Java" },
  { value: "Python", label: "Python" },
  { value: "No preference", label: "No preference" },
];

const domainOp = [
  { value: "Web Development", label: "Web Development" },
  { value: "App Development", label: "App Development" },
  { value: "Machine Learning", label: "Machine Learning" },
  { value: "IOT", label: "IOT" },
  { value: "BlockChain", label: "BlockChain" },
  { value: "AR/VR", label: "AR/VR" },
  { value: "Game Development", label: "Game Development" },
  { value: "Cloud Engineering", label: "Cloud Engineering" },
  { value: "Competitive Programming", label: "Competitive Programming" },
  { value: "Cyber Security", label: "Cyber Security" },
  { value: "Open Source", label: "Open Source" },
];

const arrObj = (arr) => {
  const data = arr.map((d) => {
    return { value: d, label: d };
  });

  return data;
};

const arrStr = (arr) => {
  const data = arr.map((d) => {
    return d.value;
  });

  return data;
};

export default function EditUser({ user, setEdit, setSearchedUserList }) {
  const [domain, setDomain] = useState(arrObj(user.domains));
  const [lang, setLang] = useState(arrObj(user.languages));
  const [branch, setBranch] = useState({
    value: user.branch,
    label: user.branch,
  });
  const [year, setYear] = useState({ value: user.year, label: user.year });
  const [post, setPost] = useState({ value: user.post, label: user.post });
  const [formData, setFormData] = useState({
    name: user.name,
    githubUrl: user.githubUrl,
    linkedInUrl: user.linkedInUrl,
    phoneNo: user.phoneNo,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let userData = { ...user };

    delete userData.id;

    console.log("user", user);
    console.log(userData);

    const obj = {
      ...userData,
      githubUrl: formData.githubUrl,
      branch: branch.value,
      domains: arrStr(domain),
      name: formData.name,
      post: post.value,
      linkedInUrl: formData.linkedInUrl,
      year: year.value,
      phoneNo: formData.phoneNo,
      languages: arrStr(lang),
    };

    console.log(obj)

    await db.collection("users").doc(user.id).update(obj);

    const newUser = { ...obj, id: user.id };

    setSearchedUserList([newUser]);
    setEdit(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(user);
  return (
    <div className="card" style={{ width: "18rem", height: "max-content" }}>
      <form onSubmit={handleSubmit} className="editForm">
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="form-control"
          type="text"
          name="githubUrl"
          placeholder="githubUrl"
          value={formData.githubUrl}
          onChange={handleChange}
        />
        <input
          className="form-control"
          type="text"
          name="linkedInUrl"
          placeholder="linkedInUrl"
          value={formData.linkedInUrl}
          onChange={handleChange}
        />
        <input
          className="form-control"
          type="text"
          name="phoneNo"
          placeholder="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
        />
        <div className="group">
          {/* Year */}
          <Dropdown options={yearOp} onChange={setYear} value={year} />
        </div>
        <div className="group">
          {/* Branch */}
          <Dropdown options={branchOp} onChange={setBranch} value={branch} />
        </div>
        <div className="group">
          {/* Post */}
          <Dropdown options={postOp} onChange={setPost} value={post} />
        </div>
        <div className="group">
          {/* Languages */}
          <MultiSelect
            options={langOp}
            value={lang}
            onChange={setLang}
            labelledBy="Language"
          />
        </div>
        <div className="group">
          {/* Domains */}
          <MultiSelect
            options={domainOp}
            value={domain}
            onChange={setDomain}
            labelledBy="Domains"
          />
        </div>
        <button style={{ width: "100%" }}>Save</button>
      </form>
    </div>
  );
}

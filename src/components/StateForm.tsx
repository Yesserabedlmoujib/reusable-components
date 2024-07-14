import React, { useState, ChangeEvent, FormEvent } from "react";

const SubmitForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    date: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    date: "",
    gender: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate form here before submitting
    if (!validateForm()) {
      return;
    }
    console.log("Form submitted:", formData);
    // Reset form after submission if needed
    // resetForm();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Reset specific error when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let valid = true;

    if (!formData.username.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username is required",
      }));
      valid = false;
    }

    if (!formData.email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email format is not valid",
      }));
      valid = false;
    }

    if (!formData.password.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      valid = false;
    } else if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/.test(formData.password)
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password format is not valid",
      }));
      valid = false;
    }

    if (formData.password !== formData.confirmpassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmpassword: "Passwords do not match",
      }));
      valid = false;
    }

    if (!formData.date.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        date: "Birthday is required",
      }));
      valid = false;
    }

    if (!formData.gender.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        gender: "Gender is required",
      }));
      valid = false;
    }

    return valid;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-200 px-3 py-5">
      <form onSubmit={handleSubmit} noValidate>
        <h1>Custom Form Validation</h1>
        <div className="mb-4">
          <label className="font-bold flex mb-1">UserName</label>
          <input
            type="text"
            id="UserName"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={`focus:outline-none border-2 text-sm rounded-md w-full p-2 ${
              errors.username && "border-red-500"
            }`}
          />
          {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}
        </div>
        <div className="mb-4">
          <label className="font-bold flex mb-1">Email</label>
          <input
            type="email"
            id="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`focus:outline-none border-2 text-sm rounded-md w-full p-2 ${
              errors.email && "border-red-500"
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="font-bold flex mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`focus:outline-none border-2 text-sm rounded-md w-full p-2 ${
              errors.password && "border-red-500"
            }`}
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
        </div>
        <div className="mb-4">
          <label className="font-bold flex mb-1">Confirm Password</label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
            className={`focus:outline-none border-2 text-sm rounded-md w-full p-2 ${
              errors.confirmpassword && "border-red-500"
            }`}
          />
          {errors.confirmpassword && (
            <p className="text-red-500 text-xs">{errors.confirmpassword}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="font-bold flex mb-1">Birthday</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`focus:outline-none border-2 text-sm rounded-md w-full p-2 ${
              errors.date && "border-red-500"
            }`}
          />
          {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
        </div>
        <div className="mb-4">
          <label className="font-bold flex mb-1">Gender</label>
          <div className="flex">
            <input
              type="radio"
              id="men"
              name="gender"
              value="Men"
              checked={formData.gender === "Men"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="men" className="mr-4">
              Men
            </label>

            <input
              type="radio"
              id="women"
              name="gender"
              value="Women"
              checked={formData.gender === "Women"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="women">Women</label>
          </div>
          {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
        </div>
        <button className="border-2 border-yellow-400 block width-200 rounded-[4px] mb-[20px] px-3 py-1.5 text-sm">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitForm;

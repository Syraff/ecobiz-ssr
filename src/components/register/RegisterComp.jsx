"use client";
import React from "react";
import { Alert } from "../../components/molecules/Alert";
import axios from "axios";
import { useRouter } from "next/navigation";
import qs from "qs";

export default function RegisterComp() {
  const [isPassword, setIsPassword] = React.useState();
  const router = useRouter();
  const options = [
    { name: "Mr.", value: "Mr." },
    { name: "Ms.", value: "Ms." },
  ];
  const [data, setData] = React.useState({
    salutation: options[0].value,
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // console.log(data, isPassword);
      if (data.password !== isPassword) {
        Alert("Passwords do not match", "danger");
        return;
      }
      const urlEncodedData = new FormData();
      Object.keys(data).forEach((key) => urlEncodedData.append(key, data[key]));

      await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + "api/user/register",
        urlEncodedData
      );

      Alert("Succes register", "success");
      router.push("/");
    } catch (error) {
      // console.log(error.response.data.data);
      Alert(error.response.data.data.error, "danger");
    }
  };

  return (
    <>
      <div className="bg-gray-700 rounded-t-lg py-3 px-4 font-semibold text-white">
        Create account
      </div>
      <div className="bg-white rounded-b-lg px-4 py-5">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3">
            <div className="form-input">
              <label className="label justify-start" htmlFor="salutation">
                Salutation <span className="text-red">*</span>
              </label>
              <select
                name="salutation"
                onChange={onChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-white`}
                required
              >
                {options.map((val, i) => (
                  <option value={val.value} key={i}>
                    {val.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-input">
              <label className="label justify-start" htmlFor="fullName">
                Full Name <span className="text-red">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-white"
                type="text"
                name="fullName"
                onChange={onChange}
                required
              />
            </div>
            <div className="form-input">
              <label className="label justify-start" htmlFor="telephone">
                Telephone <span className="text-red">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-white"
                type="number"
                name="telephone"
                onChange={onChange}
                required
              />
            </div>
            <div className="form-input">
              <label className="label justify-start" htmlFor="email">
                Email <span className="text-red">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-white"
                type="email"
                name="email"
                onChange={onChange}
                required
              />
            </div>
            <div className="form-input">
              <label className="label justify-start" htmlFor="position">
                Your Current Position/Title <span className="text-red">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-white"
                type="text"
                name="position"
                onChange={onChange}
                required
              />
            </div>
            <div className="form-input">
              <label className="label justify-start" htmlFor="company">
                Company Name <span className="text-red">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-white"
                type="text"
                name="company"
                onChange={onChange}
                required
              />
            </div>
            <div className="form-input">
              <label className="label justify-start" htmlFor="typeOfCompany">
                Type Of Company <span className="text-red">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-white"
                type="text"
                name="typeOfCompany"
                onChange={onChange}
                required
              />
            </div>
            <div className="form-input">
              <label className="label justify-start" htmlFor="password">
                Password <span className="text-red">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-white"
                type="password"
                name="password"
                onChange={onChange}
                required
              />
            </div>
            <div className="form-input">
              <label className="label justify-start" htmlFor="password">
                Re-type Password <span className="text-red">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-white"
                type="password"
                name="password"
                onChange={(e) => setIsPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            className="w-full bg-red mt-7 rounded-lg text-white font-medium py-3 mb-3"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}

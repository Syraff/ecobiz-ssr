"use client";
import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { CustomInput } from "@/components/partials/form/CustomInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Alert } from "../molecules/Alert";

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIslogin] = useState(false);

  const [initialValues, setInitialValues] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (val) => {
    try {
      // e.preventDefault();

      const urlEncodedData = new FormData();
      Object.keys(val).forEach((key) => urlEncodedData.append(key, val[key]));

      await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + "api/user/login",
        urlEncodedData
      );
      localStorage.setItem("access_token", true);
      Alert("Success login", "success");
      setIslogin(true);
      document.getElementById("reset").click();
      document.getElementById("close").click();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.access_token) setIslogin(true);
    else setIslogin(false);
  }, [isLogin]);

  return (
    <>
      {isLogin ? (
        <button
          className="h-full bg-[#4bd819] px-5 py-2 text-white font-medium rounded-md text-sm"
          onClick={() => {
            localStorage.clear();
            setIslogin(false);
            Alert("Success logout", "success");
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="h-full bg-[#4bd819] px-5 py-2 text-white font-medium rounded-md text-sm"
          onClick={() => {
            document.getElementById("my_modal_2").showModal();
            setInitialValues({ email: "", password: "" });
          }}
        >
          Login
        </button>
      )}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white" style={{ maxWidth: "25vw" }}>
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-2xl">Login</h3>
            <form method="dialog">
              <button
                id="close"
                className="btn btn-sm btn-circle btn-ghost font-semibold"
                onClick={() => document.getElementById("reset").click()}
              >
                ✕
              </button>
            </form>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={object().shape({
              email: string().required().email().label("Email"),
              password: string().required().label("Password"),
            })}
            onSubmit={(val) => {
              handleSubmit(val);
              initialValues.email = "";
              initialValues.password = "";
            }}
            validateOnChange={true}
            validateOnBlur={false}
          >
            <Form className="pt-5">
              <div className="flex flex-col gap-y-4">
                <div className="form-input">
                  <label className="label" htmlFor="email">
                    Email
                  </label>
                  <CustomInput name="email" placeholder="Email" />
                </div>
                <div className="form-input">
                  <label className="label" htmlFor="password">
                    Password
                  </label>
                  <CustomInput
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                </div>
              </div>
              <button
                className="mt-8 text-center w-full bg-red text-white font-semibold py-3 rounded-md"
                type="submit"
              >
                <p>Login</p>
              </button>
              <button id="reset" type="reset" className="hidden"></button>
            </Form>
          </Formik>
          <form method="dialog">
            <button
              className="mt-2 text-center w-full border border-gray-700 text-gray-700 font-semibold py-2 rounded-md"
              onClick={() => {
                router.push("/register");
                document.getElementById("reset").click();
              }}
            >
              Register
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}

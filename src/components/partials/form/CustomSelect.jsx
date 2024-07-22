"use client";
import { isString, useField } from "formik";
import { Typography, ThemeProvider } from "@material-tailwind/react";
import React from "react";
import { useEffect } from "react";

export default function CustomSelect({ ...props }) {
  const [field, meta, helper] = useField(props);

  useEffect(() => {
    // This logic below is for decided if data from parent use Name or Value as a key
    const matchName = props.options?.find(
      (option) => option.name === field.value
    );
    const matchValue = props.options?.find(
      (option) => option.value === field.value
    );
    if (matchName) {
      helper.setValue(matchName.value);
      return;
    }
    if (matchValue) {
      helper.setValue(matchValue.value);
      return;
    }
  }, [field.value, props.options]);
  return (
    <>
      <ThemeProvider>
        <select
          name="salutation"
          id=""
          className={`custom-input disabled:!text-font-disabled px-4 py-3 !text-font-text !text-sm !border bg-white ring-4 ring-transparent placeholder:text-gray-500 w-full rounded-md ${
            isString(meta.error) ? "!border-red" : "!border-gray-300"
          }`}
        >
          <option disabled selected>
            Choose your Salutation
          </option>
          {props?.options.map((val, i) => (
            <option
              // value={val.value}
              key={i}
              onClick={() => {
                helper.setValue(val.value);
                // props.handleselected ? props.handleselected(val) : null;
              }}
            >
              {val.name}
            </option>
          ))}
        </select>
        {isString(meta.error) && meta.touched ? (
          <Typography
            variant="small"
            className="mt-1 flex items-center gap-1 font-normal text-red"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-px h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            {<span>{meta.error}</span>}
          </Typography>
        ) : (
          ""
        )}
      </ThemeProvider>
    </>
  );
}

"use client";
import { Input, Typography, ThemeProvider } from "@material-tailwind/react";
import { isString, useField } from "formik";

export function CustomInput({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <ThemeProvider>
      <div className="input-wrapper">
        <Input
          crossOrigin={undefined}
          {...props}
          className={`custom-input disabled:!text-font-disabled px-4 !text-font-text !text-sm !border bg-white ring-4 ring-transparent placeholder:text-gray-500 dark:bg-white ${
            isString(meta.error) ? "!border-red" : "!border-gray-300"
          }`}
          labelProps={{
            className: "hidden",
          }}
          {...field}
          size={"lg"}
          error={isString(meta.error)}
          // containerProps={{ className: "pt-2" }}
        />

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
      </div>
    </ThemeProvider>
  );
}

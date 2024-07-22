"use client";
import React, { useEffect, useState } from "react";
import { subscribeUserToPush } from "./PushNotification";

export default function AlertNotif() {
  const [position, setPosition] = useState("fixed");
  const [permission, setPermission] = useState("granted");

  const requestNotificationPermission = () => {
    Notification.requestPermission().then((permission) => {
      setPermission(permission);
      setPosition("hidden");
      subscribeUserToPush();
    });
  };

  useEffect(() => {
    if ("Notification" in window) {
      setPermission(Notification.permission);
    }
  }, []);
  return (
    <>
      {permission !== "granted" ? (
        <div className={`w-full top-0 z-50 flex justify-center ${position}`}>
          <div className="px-5 py-6 mt-4 bg-white shadow-xl rounded max-w-96 lg:max-w-[400px] ">
            <div className="flex space-x-4 items-center">
              <div className="bg-red/10 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#AFB88C"
                    d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93c-22-26.61-35.31-42.67-35.31-118c0-39-9.33-71-27.72-95c-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.1 3.1 0 0 1-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14c0 75.36-13.29 91.42-35.31 118c-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 0 0-4.61-37.66M256 480a80.06 80.06 0 0 0 70.44-42.13a4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium">
                We&#39;d like to show you notifications for the lates news and
                updates
              </p>
            </div>
            <div className="flex space-x-4 items-center justify-end mt-2 hover:cursor-pointer">
              <p
                className="text-red text-sm"
                onClick={() => setPosition("hidden")}
              >
                Thanks
              </p>
              <p
                className="px-4 py-1 text-white bg-red rounded text-md hover:cursor-pointer"
                onClick={() => requestNotificationPermission()}
              >
                Ok
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

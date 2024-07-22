"use client";
import React, { useState } from "react";
import { Headline } from "./Headline";
import WhatOn from "./WhatOn";
import Latest from "./Latest";

export default function HomeIndex() {
  // const [permission, setPermission] = useState(Notification.permission);

  // const requestNotificationPermission = () => {
  //   Notification.requestPermission().then((permission) => {
  //     setPermission(permission);
  //   });
  // };

  // const showNotification = () => {
  //   if (permission === "granted") {
  //     new Notification("Custom Notification", {
  //       body: "This is a custom notification",
  //       icon: "/path/to/icon.png",
  //     });
  //   }
  // };
  return (
    <>
      <div className="px-4 lg:px-0 ">
        {/* {permission === "granted" ? (
          <button onClick={showNotification}>Show Notification</button>
        ) : (
          <button onClick={requestNotificationPermission}>
            Request Notification Permission
          </button>
        )} */}
        <div className="lg:grid lg:grid-cols-10 gap-x-10 mt-4">
          <div className="col-span-7 mb-5 lg:mb-0">
            <Headline />
            <div className="lg:block hidden">
              <WhatOn />
            </div>
          </div>
          <div className="col-span-3">
            <Latest />
            <div className="lg:hidden">
              <WhatOn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

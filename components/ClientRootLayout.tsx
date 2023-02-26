"use client";
import React from "react";
import { Context } from "./ClientContext";

export const ClientRootLayout = () => {
  const context = React.useContext(Context);
  const getDuffClientServerTime = React.useCallback(async () => {
    try {
      const response = await fetch(
        window.location.origin + "/api/gettimezoneoffset"
      );
      const offset =
        new Date().getTimezoneOffset() - (await response.json()).payload;

      context?.setTimezoneOffset(offset * 60 * 1000);
    } catch (err) {
      context?.setTimezoneOffset(0);
    }
  }, [context]);
  React.useEffect(() => {
    if (context?.timezoneOffset === 0) getDuffClientServerTime();
  }, [context?.timezoneOffset, getDuffClientServerTime]);

  return <></>;
};

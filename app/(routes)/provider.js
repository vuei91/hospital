"use client";
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavermapsProvider } from "react-naver-maps";
import { MAP_CLIENT_ID } from "@/app/_constants";
import { postApi } from "@/app/_hooks/api";

const queryClient = new QueryClient();

const Provider = ({ children }) => {
  useEffect(() => {
    (async () => {
      window.navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const result = await postApi("/redis/username", {
          latitude,
          longitude,
        });
        console.log(result);
      });
    })();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <NavermapsProvider ncpClientId={MAP_CLIENT_ID}>
        {children}
      </NavermapsProvider>
    </QueryClientProvider>
  );
};

export default Provider;

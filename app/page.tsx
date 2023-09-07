"use client";
import { useMediaQuery } from "react-responsive";
import TabView from "./views/tab_view/page";
import MobileView from "./views/mobile_view/page";
import WebView from "./views/web_view/page";
import { useEffect, useState } from "react";

export default function Home() {
  const [isResponsiveWeb, setIsResponsiveWeb] = useState(false);
  const [isResponsiveTab, setIsResponsiveTab] = useState(false);
  const [isResponsiveMobile, setIsResponsiveMobile] = useState(false);

  let web = useMediaQuery({ minWidth: 1172 });
  let tab = useMediaQuery({ minWidth: 420, maxWidth: 1172 });
  let mobile = useMediaQuery({ maxWidth: 420 });

  useEffect(() => {
    if (web) {
      setIsResponsiveWeb(true);
      setIsResponsiveTab(false);
      setIsResponsiveMobile(false);
    }
    if (tab) {
      setIsResponsiveWeb(false);
      setIsResponsiveTab(true);
      setIsResponsiveMobile(false);
    }
    if (mobile) {
      setIsResponsiveWeb(false);
      setIsResponsiveTab(false);
      setIsResponsiveMobile(true);
    }
  });

  return (
    <>
      {isResponsiveMobile ? <MobileView /> : ""}
      {isResponsiveTab ? <TabView /> : ""}
      {isResponsiveWeb ? <WebView /> : ""}

      {console.log("Web = ", isResponsiveWeb)}
      {console.log("Tab = ", isResponsiveTab)}
      {console.log("Mobile = ", isResponsiveMobile)}
    </>
  );
}

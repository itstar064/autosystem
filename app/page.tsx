"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import AboutUs from "components/about-us";
import Layout from "components/layout";
import News from "components/news";
import Service from "components/service";
import Top from "components/top";
import Works from "components/works";
import { Inter } from "next/font/google";
import Script from "next/script";
//import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
//import EmblaCarousel from "components/embla-carousel";
//import Carousel2 from "components/carousel2";

const inter = Inter({ subsets: ["latin"] });

const items = [
  {
    src: "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
    alt: "this is image",
    caption: "Welcome to our website!",
  },
  {
    src: "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
    alt: "this is image",
    caption: "Welcome to our website!",
  },
  {
    src: "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
    alt: "this is image",
    caption: "Welcome to our website!",
  },
  {
    src: "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
    alt: "this is image",
    caption: "Welcome to our website!",
  },
  {
    src: "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
    alt: "this is image",
    caption: "Check out our services!",
  },
  {
    src: "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
    alt: "this is image",
    caption: "Learn more about us!",
  },
];

const sliders = [
  "https://p4.wallpaperbetter.com/wallpaper/80/146/479/nature-1920x1080-landscape-pictures-wallpaper-preview.jpg",
  "https://sozaino.site/wp-content/uploads/2023/05/nizisora2.png",
  "https://kabekin.com/uploads/converted/23/07/23/2911578059-beauty_mountain_2023_0722_pc_wallpaper_1920_kabekin-mOJE-1920x1080-MM-100.jpg",
  "https://p4.wallpaperbetter.com/wallpaper/80/146/479/nature-1920x1080-landscape-pictures-wallpaper-preview.jpg",
  "https://sozaino.site/wp-content/uploads/2023/05/nizisora2.png",
  "https://kabekin.com/uploads/converted/23/07/23/2911578059-beauty_mountain_2023_0722_pc_wallpaper_1920_kabekin-mOJE-1920x1080-MM-100.jpg",
  "https://p4.wallpaperbetter.com/wallpaper/80/146/479/nature-1920x1080-landscape-pictures-wallpaper-preview.jpg",
  "https://sozaino.site/wp-content/uploads/2023/05/nizisora2.png",
  "https://kabekin.com/uploads/converted/23/07/23/2911578059-beauty_mountain_2023_0722_pc_wallpaper_1920_kabekin-mOJE-1920x1080-MM-100.jpg",
];

const Home = () => (
  <NextUIProvider>
    <Layout>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="w-[1440px] bg-zinc-100 flex-col justify-start items-center inline-flex">
          <Top></Top>
          <Works></Works>
          <Service></Service>
          <AboutUs></AboutUs>
          {/*<News></News>*/}
          {
            //<!-- Contact-->
          }
          <section className="page-section" id="contact">
            <div className="container">
              <Script src="https://sdk.form.run/js/v2/embed.js" />
              <div
                className="formrun-embed"
                data-formrun-form="@s-hara-1682018099"
                data-formrun-redirect="true"
              ></div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  </NextUIProvider>
);

export default Home;

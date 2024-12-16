import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import InfiniteSlider from "@/components/frontend/InfiniteSlider";
import SimpleSlider from "@/components/frontend/InfiniteSlider2";
import HoverEffectSlider from "@/components/frontend/InfiniteSlider3";
import ImageCollage from "@/components/frontend/ImageCollage";
import CustomImageCollage from "@/components/frontend/ImageCollage2";
import RefinedImageCollage from "@/components/frontend/ImageCollage";
import BannerWithBrochure from "@/components/frontend/BannerWithBrochure";
import DynamicGridComponent from "@/components/frontend/DyanamicGridComponent";
import ImageHoverComponent from "@/components/frontend/ImageHoverComponent";
import PastRecruiters from "@/components/frontend/PastRecruiters";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <InfiniteSlider/>
        <BannerWithBrochure/>
        <SimpleSlider/>
        <HoverEffectSlider/>
        <RefinedImageCollage/>
        <CustomImageCollage/>
       <DynamicGridComponent/>
       <ImageHoverComponent/>
       <PastRecruiters/>
        {children}
      </body>
    </html>
  );
}

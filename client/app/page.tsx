import Banner from "@/components/Banner/Banner";
import LogoHomeSlider from "@/components/logoHomeSlider/LogoHomeSlider";
import Offer from "@/components/offer/Offer";

export const metadata = {
  title: "Pickaboo",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <>
      <Banner />
      <LogoHomeSlider />
      <Offer/>
    </>
  );
}

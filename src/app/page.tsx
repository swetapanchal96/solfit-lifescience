import ClientLogo from "./components/ClientLogo";
import SolfitHeader from "./components/Header";
import Hero from "./components/Hero";
import HomeAbout from "./components/HomeAbout";
import WhyChooseUs from "./components/HomeWhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <HomeAbout />
      <WhyChooseUs />
      <ClientLogo />
    </div>
    // <SolfitHeader />
  );
}

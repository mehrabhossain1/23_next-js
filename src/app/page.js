import CounterComponent from "@/components/Counter/page";
import HeroComponent from "@/components/Hero/page";
import Skills from "@/components/Skills/page";

const HomePage = () => {
  return (
    <div>
      {/* <h1 className="text-4xl text-center">This is next js HomePage</h1> */}
      {/* <CounterComponent /> */}
      <HeroComponent />
      <Skills />
    </div>
  );
};

export default HomePage;

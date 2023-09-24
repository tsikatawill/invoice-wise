import { Hero, Navbar } from "../components/homepage";

export const Homepage = () => {
  return (
    <div>
      <header
        className="min-h-[500px]"
        style={{
          background: "url(/assets/background-element.svg) center center/cover",
        }}
      >
        <Navbar />
        <Hero />
      </header>

      <div className="space h-96"></div>
    </div>
  );
};

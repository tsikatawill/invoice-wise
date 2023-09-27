import { Container } from "../general";
import { Button } from "../general/Button";
import BulletCheck from "/assets/bullet-check.svg";
import Dashboard from "/assets/Dashboard.svg";
import Envelope from "/assets/icons/envelope.svg";

export const Hero = () => {
  const BULLETPOINTS = [
    "No credit cards required",
    "No hidden Fees",
    "4.9/5 TRUSTPILOT",
  ];

  return (
    <div className="relative pb-[80px]">
      <Container className="text-center">
        <small className="text-sm font-bold uppercase px-[27px] py-[10px] border border-gray200 bg-white rounded-l-full rounded-r-full w-fit mx-auto">
          Your #1 invoicing Solution 🔥
        </small>

        <h1 className="text-7xl tracking-[-1.44px] font-bold max-w-[766px] mx-auto mt-[14px] mb-6">
          Invoicing made easy for Small{" "}
          <span className="text-white bg-primary inline-block">Businesses</span>
        </h1>

        <p className="max-w-[667px] mx-auto text-gray500">
          Simplify your finances and unleash the power of effortless invoicing
          with InvoiceWise. Experience seamless financial management and stay on
          track with ease.
        </p>

        <form className="my-[59px] rounded-md p-[6px] max-w-[508px] w-full border border-gray500 mx-auto flex items-center">
          <div className="flex items-center h-full flex-1 px-3 gap-3">
            <label
              htmlFor="work-email"
              className="h-6 w-6 grid place-content-center"
            >
              <img src={Envelope} alt="..." />
            </label>

            <input
              type="text"
              id="work-email"
              className="flex-1 placeholder:text-gray400 text-black h-full border-none outline-none text-lg"
              placeholder="Enter your work email"
            />
          </div>

          <Button variant="noire" className="flex-shrink-0">
            Get Started
          </Button>
        </form>

        <ul className="flex w-fit mx-auto gap-12 mb-[100px]">
          {BULLETPOINTS.map((point, idx) => (
            <li key={idx}>
              <BulletPoint text={point} />
            </li>
          ))}
        </ul>

        <img
          src={Dashboard}
          alt="dashboard.svg"
          className="max-w-[947px] w-full mx-auto block"
        />

        <div
          className="h-[212px] absolute bottom-0 left-0 right-0"
          style={{
            background:
              "linear-gradient(188.21deg, rgba(255, 255, 255, 0) -13.69%, #FFFFFF 40%)",
          }}
        ></div>
      </Container>
    </div>
  );
};

const BulletPoint = ({ text }: { text: string }) => (
  <div className="flex items-center gap-[10px] font-medium">
    <img src={BulletCheck} />

    <span>{text}</span>
  </div>
);

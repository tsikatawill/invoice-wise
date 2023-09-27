import { Container } from "../general";
import StripeIcon from "/assets/icons/stripe_logo.svg";
import PaypalIcon from "/assets/icons/PayPal.svg";
import QuickbooksIcon from "/assets/icons/quickbook.svg";

export const Integration = () => {
  const INTEGRATIONS = [
    {
      icon: StripeIcon,
      title: "Stripe",
      desc: "You can easily integrate your stripe account and start receiving payments to account without any hassel",
    },
    {
      icon: PaypalIcon,
      title: "Paypal",
      desc: "Stripe not your thingy, Paypal is here for your needs",
    },
    {
      icon: QuickbooksIcon,
      title: "Quickbooks (Coming Soon)",
      desc: "Manage your business finance by sync your invoices and payments with quickbooks.",
    },
  ];

  return (
    <section>
      <div
        className="h-[140px]"
        style={{
          background: "url(/assets/bg-top.svg) center center/cover no-repeat",
        }}
      ></div>

      <Container className="py-12">
        <div className="mb-20 text-center">
          <h2 className=" text-[40px] font-bold leading-[47.92px] mb-6">
            Accept online payments from your clients
          </h2>

          <p className="text-gray500">
            Integrated with top online payment providers.
          </p>
        </div>

        <ul className="flex gap-[60px] place-content-stretch justify-center flex-wrap">
          {INTEGRATIONS.map((_, idx) => (
            <li key={idx}>
              <IntegrationCard {..._} />
            </li>
          ))}
        </ul>
      </Container>

      <div
        className="h-[140px]"
        style={{
          background: "url(/assets/bg-down.svg) center center/cover no-repeat",
        }}
      ></div>
    </section>
  );
};

const IntegrationCard = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => (
  <div className=" max-w-[374px] bg-gray100 rounded-lg h-full w-full py-[50px] px-[30px]">
    <img src={icon} alt="..." />

    <div className="mt-10">
      <h3 className="font-bold text-lg mb-[21px] leading-3">{title}</h3>
      <p className="text-gray500">{desc}</p>
    </div>
  </div>
);

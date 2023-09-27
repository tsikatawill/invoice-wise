import { Container } from "../general";
import FeaturesImg from "/assets/features.svg";
import Reciept from "/assets/icons/receipt.svg";
import ProfileUsers from "/assets/icons/profile-users.svg";
import Wallet from "/assets/icons/wallet.svg";

export const Features = () => {
  const FEATURES = [
    {
      title: "Invoices",
      desc: "Use invoiceWise to convert unbilled time into professional looking invoices.",
      image: Reciept,
    },
    {
      title: "Client Management",
      desc: "All the invoicing features neede is presentAll the invoicing features neede is present",
      image: ProfileUsers,
    },
    {
      title: "Payment Integration",
      desc: "All the invoicing features neede is presentAll the invoicing features neede is present",
      image: Wallet,
    },
  ];

  return (
    <section className="bg-black">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[125px] py-[141px]">
          <div className="h-[595px] bg-[#1f1f1f] rounded-[20px] flex items-center justify-end">
            <img src={FeaturesImg} alt="..." />
          </div>

          <div className="text-white">
            <div className="space-y-6 mb-14">
              <h2 className="text-[40px] font-bold leading-[47.92px]">
                All-in-one platform for your invoicing needs
              </h2>

              <p>
                All the invoicing features neede is presentAll the invoicing
                features neede is present
              </p>
            </div>

            <ul className="space-y-[58px]">
              {FEATURES.map((feature) => (
                <li key={feature.title}>
                  <Feature {...feature} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Feature = ({
  title,
  image,
  desc,
}: {
  title: string;
  image: string;
  desc: string;
}) => (
  <div className="flex gap-5 items-center">
    <div className="grid place-content-center flex-shrink-0 bg-[#262626] h-[71px] w-[71px] rounded-md">
      <img src={image} alt="..." />
    </div>

    <div>
      <h3 className="font-bold text-lg mb-[10px] leading-[21.56px]">{title}</h3>

      <p className="leading-[22.88px]">{desc}</p>
    </div>
  </div>
);

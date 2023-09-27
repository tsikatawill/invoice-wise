import { Container } from "../general";
import Company1 from "/assets/icons/company-1.svg";
import Company2 from "/assets/icons/company-2.svg";
import Company3 from "/assets/icons/company-3.svg";
import Company4 from "/assets/icons/company-4.svg";
import Company5 from "/assets/icons/company-5.svg";
import Company6 from "/assets/icons/company-6.svg";

export const TrustedBy = () => {
  const COMPANIES = [
    Company1,
    Company2,
    Company3,
    Company4,
    Company5,
    Company6,
  ];

  return (
    <section>
      <Container className="py-[70px]">
        <h2 className="text-center font-bold">
          TRUSTED BY BUSINESSES ACROSS MANY INDUSTRIES
        </h2>

        <ul className="flex gap-x-[80px] gap-y-10 mt-12 justify-center flex-wrap md:flex-nowrap">
          {COMPANIES.map((company, idx) => (
            <li key={idx}>
              <Company image={company} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

const Company = ({ image }: { image: string }) => <img src={image} />;

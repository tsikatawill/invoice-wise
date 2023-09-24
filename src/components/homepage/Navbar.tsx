import { Link, useNavigate } from "react-router-dom";
import { Container } from "../general";
import Logo from "../../../public/assets/InvoiceWise.svg";
import { Button } from "../general/Button";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <Container className="py-5 sm:py-11 px-11 sm:px-5 flex items-center justify-between">
        <div className="flex gap-[69px] items-center">
          <Link to="/">
            <img src={Logo} />
          </Link>

          <ul className="flex items-center gap-[18px] font-medium">
            <li>
              <Link to="/">Why InvoiceWise?</Link>
            </li>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Companies</Link>
            </li>
          </ul>
        </div>

        <div className="cta flex gap-4">
          <Button onClick={() => navigate("/login")} variant="ghost">
            Login
          </Button>
          <Button variant="gray">Create Account</Button>
        </div>
      </Container>
    </nav>
  );
};

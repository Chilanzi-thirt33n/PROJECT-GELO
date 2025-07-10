import * as motion from "motion/react-client";
import Link from "next/link";
import Image from "next/image";
import { LoginButton } from "@/components/common/loginButton";

interface LinkProps {
  name: string;
  link: string;
}

interface developerProp {
  name: string;
  link: string;
}

const newDate = new Date();
const CurrentYear = newDate.getFullYear();

const links: LinkProps[] = [
  { name: "Home", link: "/" },
  { name: "FAQs", link: "/faq" },
  { name: "Products", link: "/Products" },
  { name: "Locations and Contacts", link: "/contacts" },
  { name: "Terms and Conditions", link: "/terms" },
];

const developers: developerProp[] = [
  {
    name: "Janban Enterprise Ltd",
    link: "https://github.com/Janban-zm",
  },
  {
    name: "Ademha Digital",
    link: "https://ademhadigital.com",
  },
];

const Footer: React.FC = () => {
  return (
    <div className="w-screen bg-pink-950 text-pink-50 flex flex-col justify-center items-center overflow-hidden">
      <motion.div className="w-full flex flex-col justify-center items-center gap-6 p-6">
        <section className="w-full grid grid-cols-1 lg:grid-cols-3 auto-rows-min gap-6 justify-between items-start">
          {/* Logo */}
          <div className="lg:self-center min-w-[250px] flex justify-center items-center gap-4">
            <Image src="/logo.svg" alt="Loanlog" width={40} height={40} />
            <h3 className="font-bold max-w-40">Where every bake begins</h3>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className=" text-lg font-bold text-pink-300">Links</h3>
            <ul className="flex flex-col lg:flex-row gap-4 text-sm text-pink-50 text-center lg:text-start">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    className="hover:text-pink-300 hover:underline transition-colors duration-200 "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/*loginButton */}
          <div className="lg:self-center min-w-[250px] flex justify-center items-center gap-4">
            <LoginButton onDarkBackground={true} />
          </div>
        </section>
      </motion.div>

      {/* Bottom Copyright */}
      <section className="w-full bg-muted p-4">
        <p className="text-center text-gray-500 text-sm">
          &copy;2023 - {CurrentYear} Gelos Treat | Developed by{" "}
          <Link
            className="hover:underline text-pink-600"
            id="chilanzi"
            href={developers[0].link}
          >
            {developers[0].name}
          </Link>{" "}
          in colaboration with{" "}
          <Link
            className="hover:underline text-pink-600"
            id="chilanzi"
            href={developers[1].link}
          >
            {developers[1].name}
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Footer;

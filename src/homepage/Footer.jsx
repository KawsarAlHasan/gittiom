import { Link } from "react-router-dom";
import Logo from "../assets/webLogo.png";
import { Divider } from "antd";
import MoreInfo from "../component/MoreInfo";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-green-600 py-10 px-4 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={Logo} alt="Gitty Logistics Logo" className="h-10" />
            <span className="text-xl font-semibold">Gittiom</span>
          </div>
          <p>
            gizion.com is a dynamic organization that powers a range of
            businesses, including the renowned gittiom.com, where you can
            conveniently buy and sell cryptocurrencies.
          </p>
          <div className="mt-4 text-sm ">
            <p>
              <strong>Address:</strong> No 27 Obazee Street Isiyor, Benin City,
              Edo State, Nigeria.
            </p>
            <p>
              <strong>Phone:</strong> +234 904 298 0643
            </p>
            <p>
              <strong>Email:</strong> support@giziom.com
            </p>
          </div>
        </div>

        {/* Community Section */}
        <div className="text-white">
          <h3 className="text-lg font-medium mb-3 relative">
            Our Community
            <span className="block  h-[1px] bg-white mt-1"></span>
          </h3>

          <ul className=" space-y-2">
            <li>Community</li>
            <li>Blog</li>
            <li>Forums</li>
            <li>Meetups</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="text-white">
          <h3 className="text-lg font-medium mb-3 relative">
            Help
            <span className="block  h-[1px] bg-white mt-1"></span>
          </h3>
          <ul className=" space-y-2">
            <li>Help Center</li>
            <li>Authors</li>
          </ul>
        </div>

        {/* Giziom Market Section */}
        <div className="text-white">
          <h3 className="text-lg font-medium mb-3 relative">
            Gittiom Market
            <span className="block  h-[1px] bg-white mt-1"></span>
          </h3>

          <ul className=" space-y-2">
            <Link to="/term&condition">Terms</Link>

            <li>
              <Link to="https://brassy-break-85b.notion.site/Gittiom-Privacy-policy-b7ec72fe4ed04ec99bdec7bb6412da1d?pvs=4">
                Privacy Policy
              </Link>
            </li>
            <li>Market API</li>
            <li className="flex justify-between">
              <span>Become an Affiliate</span>
              <div className="text-2xl flex gap-3">
                <Link to="https://wa.me/message/TLK7TT6Y5MBPA1">
                  <FaWhatsappSquare />
                </Link>
                <FaFacebookSquare />
                <FaInstagram />
                <FaSquareXTwitter />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Divider
        style={{
          borderColor: "#fff",
        }}
      />

      <div className="max-w-7xl mx-auto">
        Gittiom is a financial technology company - it is not a bank and does
        not hold or claim to hold a banking license. The banking
        services/financial services offered on the Figur platform are provided
        by CBN-licensed banks and financial institutions All trademarks and
        brand names belong to their respective owners. Use of these trademarks
        and brand names do not represent endorsement by or association with
        Figur Partners Limited.Google Play and the Google Play logo are
        registered trademarks of Google LLC. Apple, the Apple logo, and iPhone
        are registered trademarks of Apple
      </div>

      <MoreInfo />
    </div>
  );
};

export default Footer;

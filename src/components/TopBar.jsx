import Container from "./Container";
import { Link } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="bg-ysrcp-blue text-white">
      <Container className="flex flex-col gap-2 md:flex-row items-center justify-between py-2">
        <div className="flex gap-4 items-center">
          <Link to="/write-to-us">Issues</Link>
          <Link to="/join-now">Volunteer</Link>
          <Link to="/contact-us">Contact</Link>
        </div>

        <div className="flex gap-6 items-center">
          <div className="flex gap-2 items-center">
            <div className="bg-white text-ysrcp-blue rounded-lg p-1.5 shrink-0">
              <IoCallSharp className="text-base" />
            </div>
            <span className="text-sm">+91 9963314141</span>
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-white text-ysrcp-blue rounded-lg p-1.5 shrink-0">
              <MdEmail className="text-base" />
            </div>
            <span className="text-sm">support@ysrcpsocialmedia.in</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;

// npm install @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="w-screen h-full">
      <div className="flex flex-wrap flex-col justify-center items-center text-white bg-[#01021c] w-screen h-full p-10">
        <div className="flex gap-4 mb-2">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </div>
        <h1 className="text-white text-2xl block">mka_mmmm</h1>
      </div>
    </footer>
  );
}

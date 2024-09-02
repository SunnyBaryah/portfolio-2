import Github from "./Icons/Github";
import Instagram from "./Icons/Instagram";
import NewTwitter from "./Icons/NewTwitter";
import Linkedin from "./Icons/Linkedin.jsx";
export default function SocialBtn() {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center justify-center gap-1">
        <a href="https://github.com/SunnyBaryah">
          <button className=" transition-transform transform hover:scale-110 duration-150 ">
            <Github className="h-12 w-12 bg-white p-2" />
          </button>
        </a>
        <p>Github</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <a href="https://instagram.com/nipunbaryah?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
          <button className=" transition-transform transform hover:scale-110 duration-150 ">
            <Instagram className="h-12 w-12 bg-white p-2" />
          </button>
        </a>
        <p>Insta</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <a href="https://twitter.com/NipunBaryah">
          <button className=" transition-transform transform hover:scale-110 duration-150 ">
            <NewTwitter className="h-12 w-12 bg-white p-2" />
          </button>
        </a>
        <p>X</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <a href="https://www.linkedin.com/in/nipun-baryah-50a6a9239/">
          <button className=" transition-transform transform hover:scale-110 duration-150 ">
            <Linkedin className="h-12 w-12 bg-white p-2" />
          </button>
        </a>
        <p>Linkedin</p>
      </div>
    </div>
  );
}

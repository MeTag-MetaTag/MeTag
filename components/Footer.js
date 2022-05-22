import Image from "next/image";
import Line from "../public/Vector 37.svg";
import twitter from "../public/icons/twitter.svg";
import instagram from "../public/icons/instagram.svg";
import linkedin from "../public/icons/linkedin.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative  bg-center bg-[length:1280px_360px] bg-[#00000066] backdrop-blur-3xl h-[458px] rounded-t-[32px] w-screen">
      <footer className=" flex flex-wrap items-center font-cabin py-12 px-20">
        <div className="flex flex-row basis-full justify-between">
          <div className="flex flex-col justify-center pr-12 items-start">
            <Link href="/">
              <a>
                <h1 className="inter-font pb-6">MeTag</h1>
              </a>
            </Link>
            <div className="footer-link pb-10">
              Changing the future of Sharing
            </div>

            <div className="flex space-x-12">
              <a rel="external noopener noreferrer" target="_blank">
                <Image src={twitter} alt="Image assets" />
              </a>
              <a rel="external noopener noreferrer" target="_blank">
                <Image src={instagram} alt="Image assets" />
              </a>
              <a
                href="https://www.linkedin.com/company//"
                rel="external noopener noreferrer"
                target="_blank"
              >
                <Image src={linkedin} alt="Image assets" />
              </a>
            </div>
          </div>
          <div className="footer-link flex flex-col justify-around items-start">
            <a href="/about">About Us</a>
          </div>
          <div className="footer-link flex flex-col justify-around items-start">
            <a href="#">FAQs</a>
          </div>
          <div className="footer-link flex flex-col justify-around items-start">
            {/* <Link href="/team"> */}
            <a href="#">Team</a>
            {/* </Link> */}
            <a href="#">Community Guidelines</a>
            <a href="#">
              501(c)(3) non-profitable
              <br /> licence soon
            </a>
          </div>
        </div>
      </footer>
      {/* </div> */}
      <div className="px-[45px] mb-7 mt-16 h-px w-full">
        <Image src={Line} layout="responsive" alt="image" />
      </div>
      <div className="flex basis-full footer-link  flex-row">
        <a className="items-start pr-[750px] pl-[45px]">
          2022 © MeTag. All rights reserved.
        </a>
        <a className="items-end pr-12" href="#">
          Privacy Policy
        </a>
        <a className="items-end" href="#">
          Legal
        </a>
      </div>
    </div>
  );
}

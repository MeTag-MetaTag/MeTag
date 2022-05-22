import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Footer1 from "../components/Footer1";
import Image from "next/image";
import bulb from "../public/img/team/bulb.svg";
import member from "../public/img/team/member.svg";
import ecllipse from "../public/img/team/ecllipse.svg";
import Member from "../components/team/Member";
import { useEffect } from "react";
// import JoinUs from "../components/joinUs/joinUs.js";
// import { motion } from "framer-motion";

function About(props) {
  useEffect(() => {
    document.querySelector("body").classList.add("about");
  });

  return (
    <div className="bg-[#040D21]">
      <Navbar />

      <div className="flex flex-col items-center text-center mt-28">
        <h5 className="font-cabin font-bold laptop:text-[20px] text-[18px] capitalize">
          We&apos;re Building
        </h5>
        <span className="font-inter font-bold laptop:text-[44px] text-[24px]">
          <h1 className="inline font-inter font-bold text-gradient-1 laptop:text-[34px] text-[20px] capitalize">
            asia&apos;s Largest <br />
            Pipeline of Future <br />
            Engineers & Entrepreneurs
          </h1>{" "}
          🚀
        </span>
        <div className="flex flex-row items-center justify-center mt-9">
          <Image src={bulb} />
        </div>
        <div className="">
          <h2 className=" font-inter font-bold laptop:text-[28px] text-[20px] capitalize">
            Friendly folks, <span className="text-yellow-300">standing</span>{" "}
            by💛
          </h2>
        </div>
        <p className="sub-heading-2 mb-28">
          Always <span className="text-green-300">humans</span>, never{" "}
          <span className="text-yellow-200">bots</span>. The hands-down,
          <br /> sharpest and friendliest team in the{" "}
          <span className="text-blue-300">
            student-run
            <br /> Organization
          </span>
          . Contact us for the best mentorship
          <br /> and support. We&apos;ll get back to you about it.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image src={member} />

        <span className="large-bold-text">Vansh Gehlot</span>
        <span className="small-bold-text mb-16">Founder & CEO</span>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 max-w-7xl mx-auto">
        <Member pfp={member} name="Vansh Gehlot" />
        <Member pfp={member} name="Vansh Gehlot" />
        <Member pfp={member} name="Vansh Gehlot" />
        <Member pfp={member} name="Vansh Gehlot" />
        <Member pfp={member} name="Vansh Gehlot" />
        <Member pfp={member} name="Vansh Gehlot" />
        <Member pfp={member} name="Vansh Gehlot" />
        <Member pfp={member} name="Vansh Gehlot" />
      </div>
      <div className="flex flex-col items-center mt-44 mb-24 ">
        <h1>
          how we are doing it <span className="text-black">🌟</span>
        </h1>
        <p className="sub-heading-2">
          Fresh and new released episodes to help you get
        </p>
        <p className="sub-heading-2">started with your daily knowledge train</p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-y-8 mb-44 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex flex-row box-border border-solid border-gradient-1 border-2 rounded-[20px]">
            <div className="flex flex-col items-start my-12 mx-8">
              <Image src={ecllipse} />
              <div className="large-bold-text mt-2 mb-2">James Allen</div>
              <div className="small-bold-text text-[#1ACCF3] mb-2">
                UI/UX designer
              </div>
              <p className="small-text mb-2">
                To resolve what triggered the dialog,
                <br />
                confirming actions confirm a<br /> proposed action. These
                actions can
              </p>
              <div className="flex flex-row justify-end">
                <p className="small-inline-bold-text text-[13.67px] text-[#5AB2F1]">
                  UI/UX designer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row box-border border-solid border-gradient-1 border-2 rounded-[20px]">
            <div className="flex flex-col items-start my-12 mx-8">
              <Image src={ecllipse} />
              <div className="large-bold-text mt-2 mb-2">James Allen</div>
              <div className="small-bold-text text-[#1ACCF3] mb-2">
                UI/UX designer
              </div>
              <p className="small-text mb-2">
                To resolve what triggered the dialog,
                <br />
                confirming actions confirm a<br /> proposed action. These
                actions can
              </p>
              <div className="flex flex-row justify-end">
                <p className="small-inline-bold-text text-[13.67px] text-[#5AB2F1]">
                  UI/UX designer
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col items-center">
          <div className="flex flex-row box-border border-solid border-gradient-1 border-2 rounded-[20px]">
            <div className="flex flex-col items-start my-12 mx-8">
              <Image src={ecllipse} />
              <div className="large-bold-text mt-2 mb-2">James Allen</div>
              <div className="small-bold-text text-[#1ACCF3] mb-2">
                UI/UX designer
              </div>
              <p className="small-text mb-2">
                To resolve what triggered the dialog,
                <br />
                confirming actions confirm a<br /> proposed action. These
                actions can
              </p>
              <div className="flex flex-row justify-end">
                <p className="small-inline-bold-text text-[13.67px] text-[#5AB2F1]">
                  UI/UX designer
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col items-center">
          <div className="flex flex-row box-border border-solid border-gradient-1 border-2 rounded-[20px]">
            <div className="flex flex-col items-start my-12 mx-8">
              <Image src={ecllipse} />
              <div className="large-bold-text mt-2 mb-2">James Allen</div>
              <div className="small-bold-text text-[#1ACCF3] mb-2">
                UI/UX designer
              </div>
              <p className="small-text mb-2">
                To resolve what triggered the dialog,
                <br />
                confirming actions confirm a<br /> proposed action. These
                actions can
              </p>
              <div className="flex flex-row justify-end">
                <p className="small-inline-bold-text text-[13.67px] text-[#5AB2F1]">
                  UI/UX designer
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col items-center">
          <div className="flex flex-row box-border border-solid border-gradient-1 border-2 rounded-[20px]">
            <div className="flex flex-col items-start my-12 mx-8">
              <Image src={ecllipse} />
              <div className="large-bold-text mt-2 mb-2">James Allen</div>
              <div className="small-bold-text text-[#1ACCF3] mb-2">
                UI/UX designer
              </div>
              <p className="small-text mb-2">
                To resolve what triggered the dialog,
                <br />
                confirming actions confirm a<br /> proposed action. These
                actions can
              </p>
              <div className="flex flex-row justify-end">
                <p className="small-inline-bold-text text-[13.67px] text-[#5AB2F1]">
                  UI/UX designer
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col items-center">
          <div className="flex flex-row box-border border-solid border-gradient-1 border-2 rounded-[20px]">
            <div className="flex flex-col items-start my-12 mx-8">
              <Image src={ecllipse} />
              <div className="large-bold-text mt-2 mb-2">James Allen</div>
              <div className="small-bold-text text-[#1ACCF3] mb-2">
                UI/UX designer
              </div>
              <p className="small-text mb-2">
                To resolve what triggered the dialog,
                <br />
                confirming actions confirm a<br /> proposed action. These
                actions can
              </p>
              <div className="flex flex-row justify-end">
                <p className="small-inline-bold-text text-[13.67px] text-[#5AB2F1]">
                  UI/UX designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer1 /> */}
      <Footer />
    </div>
  );
}

export default About;

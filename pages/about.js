import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Banner from "../components/Banner";
// import Footer1 from "../components/Footer1";
import Image from "next/image";
import laptop from "../public/img/about/binary-coding.svg";
import mic from "../public/img/about/mic.svg";
import wave from "../public/img/about/about-wave.svg";
import quote from "../public/img/about/quote.svg";
import growing from "../public/img/about/about-growing.png";
import gradientUnderline from "../public/img/gradientUnderline.svg";
import chart from "../public/img/emoji/chart-increasing.svg";
import rocket from "../public/img/emoji/rocket.png";
import hundred from "../public/img/emoji/hundred-points.svg";
import { useEffect } from "react";
import { motion } from "framer-motion";


function About(props) {
  useEffect(() => {
    document.querySelector("body").classList.add("about");
  });

  return (
    <div className=" bg-[#040D21]">
      <Navbar />

      <div className="flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.8,
              },
            },
          }}
        >
          <div className="flex flex-row items-center justify-center mt-[56px]">
            <div className="-mr-11 -mb-[100px]">
              <Image src={mic} alt="image" />
            </div>
            <Image src={laptop} alt="image" />
          </div>
        </motion.div>
        <div className="flex flex-col items-center">
          <h1 className="-mb-4">Learn, collaborate, share</h1>
          <h1 className="flex flex-row">
            knowledge and skills&nbsp;
            <p className="w-10 h-10 mt-1">
              <Image src={hundred} alt="image" />
            </p>
          </h1>

          <p className="sub-heading-2">
            across communities by attending
            <br /> expert workshops and podcasts.
          </p>
        </div>
      </div>

      <div className="flex flex-row box-border border-solid border-gradient-1 border-2 rounded-[20px] items-center mt-[75px] max-w-5xl mx-auto">
        <div className="flex flex-row space-x-40 justify-center px-[75px] py-7">
          <div className="flex flex-col">
            <h4>25+</h4>
            <p className="small-text">team members</p>
          </div>
          <div className="flex flex-col">
            <h4>200+</h4>
            <p className="small-text">community members</p>
          </div>

          <div className="flex flex-col">
            <h4>200+</h4>
            <p className="small-text">social media followers</p>
          </div>
          <div className="flex flex-col">
            <h4>2021</h4>
            <p className="small-text">year founded</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-5">
        <Image src={growing} alt="image" />
        <p className="w-9 h-9">
          <Image src={chart} alt="image" />
        </p>
      </div>

      <div className="flex mt-[195px] mb-[105px] justify-center">
        <Image src={wave} alt="image" />
      </div>
      <div>
        <div className="flex flex-col items-center">
          <Image src={quote} alt="image" />
          <h4 className="mt-2">
            “People try to force an interest
            <br /> over themselves, but passion
            <br />
            chooses the individuals, rather
            <br /> than them trying to choose it.”
          </h4>
          <h1 style={{ textAlign: "right" }}>
            <span className="gradient-text-static">Jeff Bezos</span>
          </h1>
          <div className="small-text italic mb-24">
            Former Chairman and CEO of Amazon
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-[120px]">
        <Image src={wave} alt="image" />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="flex flex-row">
          Our Mission And Vision&nbsp;
          <p className="h-10 w-10">
            <Image src={rocket} alt="image" />
          </p>
        </h2>
        <Image src={gradientUnderline} alt="image" />
      </div>
      <div className="flex flex-row justify-center space-x-14 mt-[69px] mb-[273px]">
        <div className="box-border border-solid border-gradient-1 border-2 rounded-[20px] px-10 pt-32">
          <div className="flex flex-col">
            <div className="all-cap mb-9">Mission</div>
            <div className="paragraph pb-24">
              Our mission is to develop a platform to
              <br /> help students who are passionate about
              <br /> CS. Code Asia aims to mentor and guide
              <br /> students for learning programming,
              <br /> coding and turn their hobbies into
              <br /> fulfilling careers from their initial learning
              <br /> period rather than focusing on the
              <br /> monotonous educational approach.
            </div>
            <div></div>
          </div>
        </div>
        <div className="box-border border-solid border-gradient-1 border-2 rounded-[20px] px-10 pt-32">
          <div className="flex flex-col ">
            <div className="all-cap mb-9">Vision</div>
            <div className="paragraph pb-24">
              To provides students with a free & safe
              <br /> place for coding, collaborating and
              <br /> offers various boot camps to provide
              <br /> extensive, brief, and rigorous training for
              <br /> all students.
              <br /> Empowering our country’s youth must
              <br /> be our top priority/goal and our
              <br /> organization looks forward to putting
              <br /> forth these actions. Code Asia will be
              <br /> revolutionary by bringing out colorful
              <br /> and vibrant youth and making their lives
              <br /> more impactful and creative.
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* <Footer1 /> */}
      <Footer />
    </div>
  );
}

export default About;

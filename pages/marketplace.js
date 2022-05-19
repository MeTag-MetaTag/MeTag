import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Line from "../public/Vector 37.svg";
import design from "../public/icons/Vector.svg";
import alarm from "../public/img/alarm-clock.png";
import bag from "../public/img/money-bag.png";
import rocket from "../public/img/rocket.png";
import victory from "../public/img/victory-hand.png";
import chain from "../public/img/link.png";
import wave from "../public/img/waving-hand.png";
import shop from "../public/img/shopping-bags.png";
import bell from "../public/img/bell.png";
import { useEffect } from "react";
import Gradient from "../components/Gradient";

function About(props) {
  useEffect(() => {
    document.querySelector("body").classList.add("about");
  });

  return (
    <>
      <Gradient />
      <Navbar />
      <div className="flex flex-row justify-center items-center space-x-4">
      <div className="flex flex-row justify-center  mt-[69px] mb-[273px]">
        <div className="box-border border-solid border-gradient-1 border-2 rounded-[20px] px-10 pt-12">
          <div className="flex flex-col justify-center items-center">
            <div>Sign Up</div>
            <p className="">Can you enter your gmail address </p>
            <p>and we will send a magic link to </p>
            <p>complete registration</p>
            <input
              type="text"
              placeholder="vansh@metag.io"
              className="input-form-2"
            />
            <button className="tetiary-1">Continue</button>{" "}
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center  mt-[69px] mb-[273px]">
        <div className="box-border border-solid border-gradient-1 border-2 rounded-[20px] px-10 pt-12">
          <div className="flex flex-col justify-center items-center">
            <div>Sign Up</div>
            <p className="">We have sent you some important </p>
            <p>details to you mail </p>
          </div>
          <div className="">example@gmail.com</div>
        </div>
      </div>

      <div className="flex flex-row justify-center  mt-[69px] mb-[273px]">
        <div className="box-border border-solid border-gradient-1 border-2 rounded-[20px] px-10 pt-12">
          <div className="flex flex-col justify-center items-center">
            <div>Sign In</div>
            <p className="">Welcome back, enter your gmail </p>
            <p> address to login </p>
          </div>
          <input
            type="text"
            placeholder="vansh@metag.io"
            className="input-form-2"
          />
          <button className="tetiary-1">Continue</button>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

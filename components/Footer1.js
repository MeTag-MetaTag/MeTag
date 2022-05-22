import Image from "next/image";
import PointArrow from "../public/img/pointArrow.svg";
import { motion } from "framer-motion";
// import { useScroll } from "../components/useScroll";
import { topContainerAnimation } from "../components/Animations";
import shop from "../public/img/shopping-bags.png";
import basic from "../public/img/Basic.png";

export default function Footer1(props) {
  // const [element, controls] = useScroll();
    return (
      <motion.div
        // ref={element}
        variants={topContainerAnimation}
        // animate={controls}
        transition={{
          duration: 1,
        }}
        className="relative flex justify-center pb-24"
      >
        <div
          className="flex flex-col items-center
                        w-[300px] h-[464px] p-[20px] rounded-md bg-[#0D378E]/80
                        laptop:flex-row laptop:justify-between laptop:w-[969px] laptop:h-[260px] laptop:p-[40px]"
        >
          <div className="mb-10 laptop:w-[426px] flex flex-col space-y-3">
            <h3 className="mb-2 font-cabin font-bold laptop:text-[30px] text-[20px] capitalize">
              Join the Waitlist{" "}
              <span>
                <Image src={shop} width={30} height={30} alt="imageicon" />
              </span>
            </h3>
            <p className="sub-heading-2">
              Will update you when MeTag would be out for sale!
            </p>
            <input
              className="input-form-2"
              placeholder="Email Address"
              type="email"
            />
            <div
              className="flex flex-col
                                    laptop:flex-row"
            >
              <button className="secondary my-2 laptop:order-2">
                Join The Future{" "}
              </button>
              <div
                className="flex flex-row items-center justify-center mt-2
                                        laptop:order-1 laptop:pr-3"
              >
                <p
                  className="quote text-[16px] relative top-3 right-2 
                                        laptop:w-full"
                >
                  Its totally free!
                </p>
                <Image
                  src={PointArrow}
                  className="rotate-[90deg] scale-x-[-1]
                                                                laptop:scale-y-[-1] laptop:rotate-[180deg]"
                  alt="imageicon"
                />
              </div>
            </div>
          </div>
          <form>
            <div className="flex flex-col laptop:items-end">
              <Image src={basic} width={250} height={300} alt="imageicon" />
            </div>
          </form>
        </div>
      </motion.div>
    );
}

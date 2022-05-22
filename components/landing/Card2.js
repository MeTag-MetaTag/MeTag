import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import monitor from "../../public/img/landing/monitor.svg";
import bulb from "../../public/img/emoji/bulb.svg";
import { videoAnimation, reasonsAnimation } from "../Animations";

export default function Card2() {
  // const [element,  ] = useScroll();
  return (
    <div
      // ref={element}
      className="relative flex flex-col items-center justify-center mt-24
                      laptop:flex-row"
    >
      <div
        className="w-full text-center
                        laptop:order-2 laptop:ml-5 laptop:w-auto"
      >
        <motion.div
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
          variants={videoAnimation}
            
          transition={{ type: "tween", duration: 0.5 }}
        >
          <Image src={monitor} alt="image" />
        </motion.div>
      </div>
      <motion.div
        variants={reasonsAnimation}
          
        transition={{ type: "tween", duration: 0.5 }}
        className="w-full
                        laptop:order-1 laptop:w-5/12"
      >
        <h2 className="flex flex-row mb-5">
          everything&nbsp; <span className="text-purple-200">creative</span>
          <p className="h-8 w-8">
            {" "}
            <Image src={bulb} alt="image" />
          </p>
        </h2>
        <p className="small-text mb-4">
          What are your <span className="text-yellow-100">hobbies</span>?
          Sketching? Painting? Cooking? Turn your hobbies into creative and
          fulfilling careers with .{" "}
        </p>
        <p className="small-text">
          We provide you with a{" "}
          <span className="text-green-100">clear path</span> that leads your
          hobbies/passions into meaningful careers. Join us today for all the
          thrill & excitement!
        </p>
      </motion.div>
    </div>
  );
}

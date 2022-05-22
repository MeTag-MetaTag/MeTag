import Image from "next/image";
import { motion } from "framer-motion";
// import { useScroll } from "../useScroll";
import diverse from "../../public/img/landing/diverse.svg";
import collaborative from "../../public/img/landing/collaborative.svg";
import feedback from "../../public/img/landing/feedback.svg";
import events from "../../public/img/landing/events.svg";
import { cardAnimation } from "../Animations";

export default function Card() {
  // const [element,  ] = useScroll();
  return (
    <div
      // ref={element}
      className="relative flex flex-col items-center gap-10 mt-56
                      laptop:flex-row laptop:justify-between px-16"
    >
      <div className="relative w-64 laptop:w-80">
        <motion.div
          whileHover={{ y: -5 }}
          initial="hidden"
          animate="show"
          variants={cardAnimation}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Image src={diverse} alt="image" />

          <p className="large-bold-text mb-3">Connecting</p>
          <p className="small-text">
            Connecting with enthusiasts at meet-ups & events is now just a scan
            away.
          </p>
        </motion.div>
      </div>
      <div className="relative w-64 laptop:w-80 -mt-8">
        <motion.div
          whileHover={{ y: -5 }}
          initial="hidden"
          animate="show"
          variants={cardAnimation}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Image src={collaborative} alt="image" />
          <p className="large-bold-text text-[20px] mb-3">Paying</p>
          <p className="small-text">
            We make crypto payments hassle-free; no need to copy and paste
            public keys; just scan and pay!
          </p>
        </motion.div>
      </div>
      <div className="relative w-64 laptop:w-80 -mt-7 ">
        <motion.div
          whileHover={{ y: -5 }}
          initial="hidden"
          animate="show"
          variants={cardAnimation}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Image src={feedback} alt="image" />
          <p className="large-bold-text mb-3">Update</p>
          <p className="small-text">
            We make crypto payments hassle-free; no need to copy and paste
            public keys; just scan and pay!
          </p>
        </motion.div>
      </div>
      <div className="relative w-64 laptop:w-80 -mt-14">
        <motion.div
          whileHover={{ y: -5 }}
          initial="hidden"
          animate="show"
          variants={cardAnimation}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Image src={events} alt="image" />
          <p className="large-bold-text mb-3">Streaming Money</p>
          <p className="small-text">
            Send money over time with the integration with Superfluid & MeTag.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

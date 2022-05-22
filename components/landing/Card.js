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
      className="relative flex flex-col items-center gap-10 mt-40
                      laptop:flex-row laptop:justify-between"
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

          <p className="large-bold-text mb-3">Diverse Community</p>
          <p className="small-text">
            You&apos;re not alone. Learn and get help from our friendly
            community of beginner and experienced developers.
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
          <p className="large-bold-text text-[20px] mb-3">
            Collaborative Knowledge
          </p>
          <p className="small-text">
            Exclusive exposure to industry experts & an opportunity to learn
            from them.
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
          <p className="large-bold-text mb-3">Instant Feedback</p>
          <p className="small-text">
            Your code is tested as soon as you submit it, so you always know if
            you&apos;re on the right track.
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
          <p className="large-bold-text mb-3">Skill-Building Events</p>
          <p className="small-text">
            Participate in high-quality, engaging events and learn skills.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

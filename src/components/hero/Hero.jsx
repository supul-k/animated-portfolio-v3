import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const slideTextVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror"
        }
    }
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>SUPUL KALHARA</motion.h2>
                    <motion.h1 variants={textVariants}>
                        Full stack Web Developer
                    </motion.h1>
                    <motion.div className="buttons">
                        <motion.button variants={textVariants}>
                            See the Latest Works
                        </motion.button>
                        <motion.button variants={textVariants}>
                            Contact Me
                        </motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/images/scroll.png" alt="scroller" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={slideTextVariants} initial="initial" animate="animate">
                Writer Content Creator Influencer
            </motion.div>
            <div className="imageContainer">
                <img src="/images/hero.png" alt="hero" />
            </div>
        </div>
    )
}

export default Hero

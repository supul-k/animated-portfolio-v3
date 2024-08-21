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

const items = [
    { id: 1, name: "HomePage", link: "#HomePage" },
    { id: 2, name: "Services", link: "#Services" },
    { id: 3, name: "Portfolio", link: "#Portfolio" },
    { id: 4, name: "Contact", link: "#Contact" },
    { id: 5, name: "About", link: "#About" }
]

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
                        <motion.button variants={textVariants} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                            <a href="#Services">See the Latest Works</a>
                        </motion.button>
                        <motion.button variants={textVariants} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                            <a href="#Contact">Contact Me</a>
                        </motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/images/scroll.png" alt="scroller" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={slideTextVariants} initial="initial" animate="animate">
                Web solutions from front to back
            </motion.div>
            <div className="imageContainer">
                <img src="/images/heroes.png" alt="hero" />
            </div>
        </div>
    )
}

export default Hero

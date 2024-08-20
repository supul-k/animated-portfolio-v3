import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
}

const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref, {margin: "-100px"});

    return (
        <motion.div
            className="services"
            variants={textVariants}
            initial="initial"
            // whileInView="animate"
            ref={ref}
            // animate={isInView && "animate"}
            animate={ window.innerWidth <= 738 ? "animate" : isInView && "animate"} 
            // animate={"animate"}
        >
            <motion.div className="textContainer" variants={textVariants}>
                <motion.p>
                    I focus on helping your brand grow
                    <br /> and move forward
                </motion.p>
                <motion.hr />
            </motion.div>
            <motion.div className="titleContainer" variants={textVariants}>
                <div className="title">
                    <img src="/images/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color: "orange"}}>For Your</motion.b> Business.
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
             <motion.div className="listContainer" variants={textVariants}>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ex,
                        ipsam voluptatum sunt quidem odio, facilis neque recusandae perferendis
                        sed enim quibusdam officia ducimus similique pariatur maiores ad dignissimos reiciendis!
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ex,
                        ipsam voluptatum sunt quidem odio, facilis neque recusandae perferendis
                        sed enim quibusdam officia ducimus similique pariatur maiores ad dignissimos reiciendis!
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ex,
                        ipsam voluptatum sunt quidem odio, facilis neque recusandae perferendis
                        sed enim quibusdam officia ducimus similique pariatur maiores ad dignissimos reiciendis!
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ex,
                        ipsam voluptatum sunt quidem odio, facilis neque recusandae perferendis
                        sed enim quibusdam officia ducimus similique pariatur maiores ad dignissimos reiciendis!
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services

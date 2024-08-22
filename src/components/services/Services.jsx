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

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className="services"
            variants={textVariants}
            initial="initial"
            // whileInView="animate"
            ref={ref}
            // animate={isInView && "animate"}
            // animate={ window.innerWidth <= 738 ? "animate" : isInView && "animate"} 
            animate={"animate"}
        >
            <motion.div className="textContainer" variants={textVariants}>
                <motion.p>
                    Empowering your business with new 
                    <br />technologies  and innovative solutions
                </motion.p>
                <motion.hr />
            </motion.div>
            <motion.div className="titleContainer" variants={textVariants}>
                <div className="title">
                    <img src="/images/solutions.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Innovative</motion.b> Solutions
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Growth.
                    </h1>
                    <button>MY SERVICES</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={textVariants}>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Enterprise-Level Applications</h2>
                    <p>
                        Build enterprise-grade web applications using React for the front-end and ASP.NET with Entity Framework Core and MSSQL for the back-end.
                        Suitable for businesses needing secure and scalable solutions.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Full-Stack Web Applications</h2>
                    <p>
                        Develop robust and scalable web applications using React for the front-end and Node.js with MongoDB for the back-end.
                        Ideal for building dynamic, data-driven applications.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Animated Portfolio Design</h2>
                    <p>
                        Create visually engaging, interactive portfolio websites with smooth animations using React and Framer Motion.
                        Perfect for showcasing your work in a dynamic and modern way.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Cloud Deployment & DevOps</h2>
                    <p>
                        Deploy and manage applications on AWS, implement CI/CD pipelines, and use Docker and Kubernetes for containerization and orchestration.
                        Ensure smooth and automated deployment processes.
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services

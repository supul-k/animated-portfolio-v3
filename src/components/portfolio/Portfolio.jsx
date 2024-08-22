import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Web App",
        img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
    },
    {
        id: 2,
        title: "Mobile App",
        img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
    },
    {
        id: 3,
        title: "Design",
        img: "https://images.pexels.com/photos/417458/pexels-photo-417458.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
    },
    {
        id: 4,
        title: "GIS as a Service",
        img: "/projects/gisfusion.webp",
        desc: "GIS Fusion is a cloud-based GIS platform that provides a wide range of GIS services to the users. It is a platform that allows users to create, edit, analyze, and share spatial data in the cloud.",
    },
    {
        id: 5,
        title: "Payment Gateways",
        img: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "This project involves integrating the PayHere and Cybersource payment gateways into a web application using Symfony, PHP, and MySQL. The integration ensures secure and efficient handling of online payments, providing users with a seamless payment experience. The project includes features such as payment processing, transaction management, and webhook handling.",
    },
]

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="image" />
                </div>
                <motion.div className="textContainer" style={{ y }}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
            </div>
        </div>
    </section>
}

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    return (
        <div className="Portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single key={item.id} item={item} />
            ))}
        </div>
    )
}

export default Portfolio

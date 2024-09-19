import { useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Salon & Spa Booking System",
        img: "/projects/spa.webp",
        desc: "Salon & Spa Booking System is a web application that allows users to book appointments at salons and spas. The application features a user-friendly interface that allows users to browse services, view availability, and book appointments online. The application is built using React, ASP.NET Core, Entity Framework Core, and MS SQL, and features a responsive design that is optimized for all devices.",
    },
    {
        id: 2,
        title: "Portfolio Website",
        img: "/projects/portfolio.webp",
        desc: "Portfolio Website is a personal project that showcases my skills, projects, and experience. It is built using React, Sass, and Framer Motion. The website features a clean and modern design, with smooth animations and transitions. The website is fully responsive and optimized for all devices.",
    },
    {
        id: 3,
        title: "Image Culling Software",
        img: "/projects/culling.webp",
        desc: "Image Culling Software is a desktop application that allows photographers to quickly and easily cull through large collections of images. The software uses advanced algorithms to analyze and rank images based on various criteria, such as focus, exposure, and composition. Users can then review and select the best images for further editing and processing.",
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
        img: "/projects/payment.webp",
        desc: "This project involves integrating the PayHere and Cybersource payment gateways into a web application using Symfony, PHP, and MySQL. The integration ensures secure and efficient handling of online payments, providing users with a seamless payment experience. The project includes features such as payment processing, transaction management, and webhook handling.",
    },
]

const Single = ({ item, setSelectedId  }) => {
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
                    <button onClick={() => setSelectedId(item.id)}>Show More</button>
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

    const [selectedId, setSelectedId] = useState(null);
    console.log("selectedId", selectedId);
    

    const selectedItem = items.find(item => item.id === selectedId);
    console.log("selectedItem", selectedItem);

    return (
        <div className="Portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single key={item.id} item={item} setSelectedId={setSelectedId}/>
            ))}

            <AnimatePresence>
                {selectedId && selectedItem && (
                    <motion.div
                        className="modal"
                        layoutId={selectedId}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                    >
                        
                        <motion.div className="modal-content">
                            <div className="imageContainer" ref={ref}>
                                <img src={selectedItem.img} alt="image" />
                            </div>
                            <motion.h2>{selectedItem.title}</motion.h2>
                            <motion.p>{selectedItem.desc}</motion.p>
                            <button onClick={() => setSelectedId(null)}>Close</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Portfolio

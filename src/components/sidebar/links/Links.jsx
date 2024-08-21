import { motion } from 'framer-motion'

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        }
    }
};
const itemVariants = {
    open: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: 50,
        opacity: 0
    }
};

const items = [
    { id: 1, name: "HomePage", link: "#HomePage" },
    { id: 2, name: "Services", link: "#Services" },
    { id: 3, name: "Portfolio", link: "#Portfolio" },
    { id: 4, name: "Contact", link: "#Contact" },
    { id: 5, name: "About", link: "#About" }
]

const Links = () => {

    return (
        <motion.div className="links" variants={variants}>
            {items.map((item) => (
                // these links are directly linked to the sections in the App.jsx file
                <motion.a href={item.link} key={item.id} variants={itemVariants} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                    {item.name}
                </motion.a>
            ))}
        </motion.div>
    )
}

export default Links

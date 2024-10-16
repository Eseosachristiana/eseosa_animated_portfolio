import { a } from "framer-motion/client";

const Links = () => {

    const items = ["Homepage", "About", "Portfolio", "Contact", "Services"]

    return (
        <div className="links">
            {items.map[item => (
                <a href={`#${item}`} key={item}>
                    {item}
                </a>
            )]}
        </div>
    );
}

export default Links;
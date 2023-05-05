import { useState } from "react";
import Link from "next/link";

const DilersList = () => {
    const [dilers, setDilers] = useState([
        { img: "test.png", type: "single" },
        { img: "test.png", type: "single" },
        { img: "test.png", type: "single" },
        { img: "test2.png", type: "double" },
        { img: "test.png", type: "single" },
        { img: "test.png", type: "single" },
        { img: "test.png", type: "single" },
        { img: "test.png", type: "single" },
        { img: "test.png", type: "single" },
        { img: "test.png", type: "single" },
        { img: "test.png", type: "single" },
        { img: "test.png", type: "single" },
        { img: "test.png", type: "single" },
        { img: "test.png", type: "single" },
        { img: "test.png", type: "single" },
    ])

    return (
        <div className='dilersList'>
            {dilers.map((el) => {
                return (
                    <Link href={"#"} className={
                        el.type === 'single' ? "dilersList-item dilersList-item-single" : el.type === 'double' ? "dilersList-item dilersList-item-double" : "dilersList-item"
                    }>
                        <img src={`/${el.img}`} alt="" />
                    </Link>
                )
            })}
        </div>
    );
};

export default DilersList;
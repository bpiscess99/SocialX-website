import { FaAccessibleIcon, FaGg } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";
import { MdConnectWithoutContact } from "react-icons/md";

export const featureList = [
    {
        id: 1,
        icon: <FaAccessibleIcon color="@0a1930" size={22}/>,
        heading: "DESIGN FOR YOU", 
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae atque voluptate repudiandae veritatis ut modi nemo cupiditate eos possimus repellendus."
          
    },

    {
        id: 2,
        icon: <SiDatabricks color="#0a1930" size={22}/>,
        heading: "KEEP YOUR HISTORY",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae atque voluptate repudiandae veritatis ut modi nemo cupiditate eos possimus repellendus."
    },

    {
        id: 3,
        icon: <MdConnectWithoutContact color="#0a1930" size={22}/>,
        heading: "STAY CONNECTED",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae atque voluptate repudiandae veritatis ut modi nemo cupiditate eos possimus repellendus."
    },

    {
        id: 4, 
        icon: <FaGg color="#0a1930" size={22}/>,
        heading: "TAKE CONTROL",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae atque voluptate repudiandae veritatis ut modi nemo cupiditate eos possimus repellendus."
    }
]

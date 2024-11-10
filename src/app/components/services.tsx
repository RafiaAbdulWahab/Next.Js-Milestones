import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa";
import { GiSoundOn } from "react-icons/gi";
import { RiComputerFill } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdNoPhotography } from "react-icons/md";
import { FcAdvertising } from "react-icons/fc";

function Services() {
    return (
        <main className="main">
            <div className="ser-container">
                {/* top div */}
                <div className="top-div-ser">
                    <h2 className="titile-ser">My Services</h2>
                    <p className="des-ser">I offer a diverse array of services, including web development for creating dynamic websites, sound design to enhance audio experiences, and UI/UX design for intuitive user interactions. Additionally, I specialize in game design to bring engaging digital experiences to life, alongside professional photography and advertising solutions to elevate your brand's visibility. Let’s collaborate to transform your ideas into reality!</p>
                </div>
                {/* bottom div */}
                <div className="boxes-con">


                <div className="box">
                <FaLaptopCode className="ser-icon" />
                <h3>Web Development</h3>
                <span>Blog, E-Commerce</span>
                </div>
                <div className="box">
                <GiSoundOn className="ser-icon" />
                <h3>Sound Design</h3>
                <span>Voice Over, Beat Making</span>
                </div>
                <div className="box">
                <RiComputerFill className="ser-icon" />
                <h3>UI/UX Design</h3>
                <span>Mobile App, Website Design</span>
                </div>
                <div className="box">
                < IoGameControllerOutline className="ser-icon" />
                <h3>Game Design</h3>
                <span>Character Design, Props & Objects</span>
                </div>
                <div className="box">
                < MdNoPhotography className="ser-icon" />
                <h3>Photography</h3>
                <span>Portrait, Landscape, Macro</span>
                </div>
                <div className="box">
                <FcAdvertising className="ser-icon" />
                <h3>Advertising</h3>
                <span>Print, Digital, Social Media</span>
                </div>


                
                
                </div>
            </div>
        </main>
    )
}
export default Services;
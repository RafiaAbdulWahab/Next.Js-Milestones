import "../style/hero.css";
import Image from "next/image";
import "../style/about.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

function About() {
    return (
        <div className="header-container">
            <div className="header-left-div">
                {/* left */}
                <div>
                    <Image className="header-image" src={"/images/Rafia.jpg"}
                        width={200}
                        height={200}
                        alt="Profie" />
                    <div className="social-icon">
                        <Link href={"https://www.youtube.com/"}><FaYoutube className="s-icon1" /></Link>
                        <Link href={"https://www.facebook.com/"}><FaFacebook className="s-icon2" /></Link>
                        <Link href={"https://www.instagram.com/"}><FaInstagram className="s-icon3"/></Link>
                    </div>


                </div>
                {/* right */}
                <div className="header-right-div">
                    <h1 className="title-hero">About Us</h1>
                    <p className="des-hero">Welcome to my portfolio! I am a passionate front-end developer skilled in creating responsive and user-friendly websites. With expertise in HTML, CSS, and JavaScript, I bring designs to life and enhance user experiences through clean code and innovative solutions.</p>

                </div>
            </div>
        </div>
    )
}

export default About;
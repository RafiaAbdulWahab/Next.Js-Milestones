import "../style/hero.css";
import Image from "next/image";

function Hero() {
    return (
        <div className="header-container">
            <div className="header-left-div">
                {/* left */}
                <div>
                    <Image className="header-image" src={"/images/Rafia.jpg"}
                        width={200}
                         height={200}
                        alt="Profie" />


                </div>
                {/* right */}
                <div className="header-right-div">
                    <h1 className="title-hero">I'm Rafia Abdul Wahab Full-Stack Developer </h1>
                    <p className="des-hero">Welcome to my portfolio! I am a passionate full-stack developer skilled in creating responsive and user-friendly websites. With expertise in HTML, CSS, and JavaScript, I bring designs to life and enhance user experiences through clean code and innovative solutions.</p>
                    <button className="hero-btn">HIRE ME</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;
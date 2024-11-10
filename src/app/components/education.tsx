import "../style/education.css";
function Education() {
    return (
        <main className="edu-main">
            {/* box1 */}
            <div className="edu-text">
                <h1>Education</h1>
                <p>Trusted by professionals for Exceptional Quality and Service our clients from various industries trust us to deliver top-notch quality and results. Here's what they have to say about our work..</p>
            </div>
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">University of Karachi</h1>
                    <span>Student</span>
                </div>
                <div className="Computer">
                    <h1>Bachelor in Computer Science</h1>
                    <p>Graduating with a Bachelor in Computer Science from the University of Karachi, I gained comprehensive knowledge in both theoretical and practical aspects of computing. The program emphasized critical skills such as software development, data analysis, and problem-solving, preparing me for diverse roles in the tech industry. My education was enriched by hands-on experience with cutting-edge technologies and collaborative projects, fostering a strong foundation for my future career.</p>
                </div>
            </div>
            {/* box2 */}
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Governor IT Initiative</h1>
                    <span>Student</span>
                </div>
                <div className="Computer">
                    <h1>Certified Web 3.0 and Metaverse</h1>
                    <p>Completing the Certified Web 3.0 and Metaverse course by the Governor IT Initiative equipped me with essential skills in cutting-edge technologies shaping the digital landscape. This program emphasized practical applications of blockchain, decentralized applications, and immersive experiences within the Metaverse, fostering innovative thinking and technical proficiency. Engaging with industry experts and hands-on projects prepared me to contribute effectively to the evolving fields of Web 3.0 and virtual environments.</p>
                </div>
            </div>
            {/* box3 */}
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Web Development</h1>
                    <span>Completed</span>
                </div>
                <div className="Computer">
                    <h1>Certificate of Web Training</h1>
                    <p>The Certificate in Web Development from the Web Training program provided me with a solid foundation in front-end and back-end technologies. Through hands-on projects, I mastered essential skills in HTML, CSS, JavaScript, and various frameworks, enabling me to create responsive and user-friendly websites. This course not only enhanced my technical abilities but also fostered my creativity and problem-solving skills in web design and development.</p>
                </div>
            </div>

        </main>

    )
}

export default Education;
import "../style/work.css";
function Education() {
    return (
        <main className="edu-main">
            {/* box1 */}
            <div className="edu-text">
                <h1>Work History</h1>
                <p>I have grown through web development, professinal training, and acdemic achivements with continous dedication and hard work. Here's a brief overview of my work history:</p>
            </div>
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">University of Karachi</h1>
                    <span>Student</span>
                </div>
                <div className="Computer">
                    <h1>Academic Journey-UK</h1>
                    <p>In 2024, I enrolled in the University of Karachi to pursue a Bachelor's in Computer Science, combining academic knowledge with practical skills.</p>
                </div>
            </div>
            {/* box2 */}
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Governor IT Initiative</h1>
                    <span>Student</span>
                </div>
                <div className="Computer">
                    <h1>Giaic - Reaching Quarter 2</h1>
                    <p>Through hard work, I progressed to Quarter 2, mastering AI, Metaverse, Blockchain and tools like Next.js and Tailwind CSS</p>
                </div>
            </div>
            {/* box3 */}
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Web Development</h1>
                    <span>Completed</span>
                </div>
                <div className="Computer">
                    <h1>Web - Journey</h1>
                    <p>I started by learning HTML, CSS and Javascript, building websites, freelancing, and working on personal projects to sharpen my skills.</p>
                </div>
            </div>

        </main>

    )
}

export default Education;
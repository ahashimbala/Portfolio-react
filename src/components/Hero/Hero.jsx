import "./Hero.css";
import Button from "../Button/Button";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-availability">
                <span className="availability-dot"></span>
                Available for Enginnering Projects & Roles
            </div>

            <img src="/images/profile.png" alt="Abdullahi Hashim Bala" className="hero-image" />

            <p className="hero-greeting">
                Hi! I'm <strong>Abdullahi Hashim Bala</strong>👋
            </p>
            <h1 className="hero-title">
                Full Stack Web Developer &amp;
                <br />
                Software Engineer
            </h1>

            <p className="hero-description">
                I am a full stack developer from Abuja, Nigeria.
                I am currently studying Software Engineering at Cosmopolitan University, creating high-performance, resilient web solutions.
            </p>

            <div className="hero-actions">
                <Button>Contact Me →</Button>
                <Button variant="secondary">My Resume ↓</Button>
            </div>
        </section>
    )
}

export default Hero;
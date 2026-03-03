import { ArrowRight, Bot, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../styles/hero.css';

const Hero = () => {
    return (
        <section className="hero grid-bg">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="badge">
                        <Sparkles size={16} />
                        <span>Leading AI Solutions Partner</span>
                    </div>
                    <h1>
                        Transform Your Business with <span className="gradient-text">Intelligent AI</span> Solutions
                    </h1>
                    <p>
                        Cogniq AI provides state-of-the-art Generative AI, LLM, and Predictive Analytics products to streamline your workflow and drive growth.
                    </p>
                    <div className="hero-btns">
                        <Link to="/contact" className="btn-primary hero-btn">
                            Get Started <ArrowRight size={20} />
                        </Link>
                        <Link to="/lab" className="btn-outline hero-btn">
                            Explore Our Lab
                        </Link>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <Zap className="stat-icon" />
                            <span>Fast Integration</span>
                        </div>
                        <div className="stat-item">
                            <Bot className="stat-icon" />
                            <span>Custom AI Models</span>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-image-container">
                        {/* We'll generate a proper AI image here soon */}
                        <div className="hero-glow"></div>
                        <img
                            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
                            alt="AI Technology"
                            className="hero-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import '../../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-info">
                    <Link to="/" className="logo footer-logo">
                        <Cpu className="logo-icon" size={28} />
                        <span>Cogniq AI</span>
                    </Link>
                    <p className="footer-desc">
                        Empowering businesses with cutting-edge AI solutions. From Generative AI to Predictive Analytics, we are your partner in innovation.
                    </p>
                    <div className="social-links">
                        <a href="#"><Linkedin size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Github size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/lab">Our Lab</Link></li>
                        <li><Link to="/blog">Blogs</Link></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><Link to="/services">Generative AI</Link></li>
                        <li><Link to="/services">LLM Solutions</Link></li>
                        <li><Link to="/services">Vision & Signal AI</Link></li>
                        <li><Link to="/services">Predictive Intelligence</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><MapPin size={18} /> <span>123 AI Plaza, Tech City</span></li>
                        <li><Phone size={18} /> <span>+1 (234) 567-890</span></li>
                        <li><Mail size={18} /> <span>hello@cogniqai.com</span></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Cogniq AI. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

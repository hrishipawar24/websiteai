import { Shield, Users, Lightbulb, Globe } from 'lucide-react';
import '../styles/about.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero section-padding grid-bg">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">Our Story</div>
                        <h1>Empowering Businesses with <span className="gradient-text">AI Innovation</span></h1>
                        <p className="lead">At Cogniq AI, we believe that artificial intelligence is the key to unlocking human potential and business efficiency.</p>
                    </div>

                    <div className="about-vision-grid">
                        <div className="vision-text">
                            <h2>Our Mission</h2>
                            <p>Our mission is to democratize advanced AI technology by providing businesses of all sizes with the tools they need to automate, analyze, and grow. We focus on building ethics-first AI that enhances human capabilities rather than replacing them.</p>
                            <div className="vision-features">
                                <div className="vision-item">
                                    <Shield className="vision-icon" />
                                    <div>
                                        <h4>Ethics First</h4>
                                        <p>We prioritize data privacy and ethical AI development in every project.</p>
                                    </div>
                                </div>
                                <div className="vision-item">
                                    <Users className="vision-icon" />
                                    <div>
                                        <h4>Client Centric</h4>
                                        <p>Your business goals are at the heart of our AI strategies.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vision-image">
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Team Work" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="values-section section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Core <span className="gradient-text">Values</span></h2>
                        <p>What drives us every day to push the boundaries of technology.</p>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <Lightbulb className="value-icon" />
                            <h3>Innovation</h3>
                            <p>We stay at the bleeding edge of AI research to bring you the latest breakthroughs.</p>
                        </div>
                        <div className="value-card">
                            <Shield className="value-icon" />
                            <h3>Integrity</h3>
                            <p>Honesty and transparency are the foundations of our client partnerships.</p>
                        </div>
                        <div className="value-card">
                            <Globe className="value-icon" />
                            <h3>Impact</h3>
                            <p>We measure our success by the tangible positive impact we create for our clients.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-cta section-padding bg-alt">
                <div className="container text-center">
                    <h2>Want to Join Our <span className="gradient-text">Journey?</span></h2>
                    <p>We're always looking for passionate minds to join our team of AI experts.</p>
                    <a href="/contact" className="btn-primary">Connect With Us</a>
                </div>
            </section>
        </div>
    );
};

export default About;

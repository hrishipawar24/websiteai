import Hero from '../components/Layout/Hero';
import ServicesSection from '../components/Services/ServicesSection';
import { Target, Lightbulb, Rocket, Settings } from 'lucide-react';
import '../styles/home.css';

const Home = () => {
    const steps = [
        { icon: <Target />, title: 'Discovery', desc: 'We understand your business challenges and goals.' },
        { icon: <Lightbulb />, title: 'Strategy', desc: 'Design a custom AI roadmap tailored to your needs.' },
        { icon: <Settings />, title: 'Implementation', desc: 'Build and integrate the AI solution into your workflow.' },
        { icon: <Rocket />, title: 'Optimization', desc: 'Continuous monitoring and refinement for peak performance.' },
    ];

    return (
        <div className="home-page">
            <Hero />

            <ServicesSection />

            {/* Process Section */}
            <section className="process-section section-padding bg-alt">
                <div className="container">
                    <div className="section-header">
                        <h2>Our <span className="gradient-text">Streamlined Process</span></h2>
                        <p>From idea to implementation, we ensure a smooth journey to AI integration.</p>
                    </div>
                    <div className="process-grid">
                        {steps.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">{index + 1}</div>
                                <div className="step-icon">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lab Preview */}
            <section className="lab-preview section-padding">
                <div className="container lab-flex">
                    <div className="lab-content">
                        <div className="badge">Innovation Lab</div>
                        <h2>We Build <span className="gradient-text">Future-Ready</span> Products</h2>
                        <p>Explore our in-house products like JobMail AI and PostGenius AI, designed to automate complex tasks and boost productivity.</p>
                        <div className="lab-features">
                            <div className="lab-feat">
                                <h4>JobMail AI</h4>
                                <p>Automate your job applications with AI-powered personalized emails.</p>
                            </div>
                            <div className="lab-feat">
                                <h4>PostGenius AI</h4>
                                <p>Generate high-engaging social media content in seconds.</p>
                            </div>
                        </div>
                        <a href="/lab" className="btn-primary">Visit Our Lab</a>
                    </div>
                    <div className="lab-visual">
                        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Innovation" />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-card">
                        <h2>Ready to Start Your <span className="gradient-text">AI Journey?</span></h2>
                        <p>Get in touch with our experts today and discover how AI can transform your business.</p>
                        <a href="/contact" className="btn-primary">Contact Us Now</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

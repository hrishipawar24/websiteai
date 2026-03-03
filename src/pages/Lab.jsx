import { Rocket, Mail, Share2, ArrowRight, CheckCircle2 } from 'lucide-react';

const Lab = () => {
    const products = [
        {
            id: 'jobmail',
            title: 'JobMail AI',
            badge: 'BETA',
            icon: <Mail className="prod-icon" />,
            desc: 'Simplify your job hunt with AI-generated personalized outreach emails that get you noticed by recruiters.',
            features: ['Personalized Templates', 'Recruiter Database Integration', 'One-Click Generation', 'Subject Line Optimization'],
            image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 'postgenius',
            title: 'PostGenius AI',
            badge: 'NEW',
            icon: <Share2 className="prod-icon" />,
            desc: 'Content creation made easy. Generate high-quality social media posts for LinkedIn, Twitter, and Instagram in seconds.',
            features: ['Platform-Specific Tones', 'Auto-Hashtagging', 'Visual Content Suggestions', 'Scheduling Integration'],
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <div className="lab-page grid-bg">
            <section className="lab-hero section-padding">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">Innovation Lab</div>
                        <h1>Our Proprietary <span className="gradient-text">AI Products</span></h1>
                        <p>From internal experiments to enterprise-grade solutions, see what we're cooking in our lab.</p>
                    </div>

                    <div className="products-list">
                        {products.map((prod, index) => (
                            <div key={prod.id} className={`product-card ${index % 2 !== 0 ? 'reverse' : ''}`}>
                                <div className="product-visual">
                                    <div className="prod-badge">{prod.badge}</div>
                                    <img src={prod.image} alt={prod.title} />
                                </div>
                                <div className="product-info">
                                    <div className="info-header">
                                        {prod.icon}
                                        <h2>{prod.title}</h2>
                                    </div>
                                    <p className="prod-desc">{prod.desc}</p>
                                    <ul className="prod-features">
                                        {prod.features.map((feat, i) => (
                                            <li key={i}><CheckCircle2 size={18} className="check-icon" /> {feat}</li>
                                        ))}
                                    </ul>
                                    <div className="prod-actions">
                                        <button className="btn-primary">Try For Free <ArrowRight size={18} /></button>
                                        <button className="btn-outline">Documentation</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="lab-cta section-padding bg-alt">
                <div className="container text-center">
                    <Rocket className="cta-rocket" size={48} />
                    <h2>Have an Insight for a <span className="gradient-text">New Tool?</span></h2>
                    <p>We love collaborating on new ideas. Reach out if you have a challenge that needs an AI-first approach.</p>
                    <a href="/contact" className="btn-primary">Collaborate With Us</a>
                </div>
            </section>
        </div>
    );
};

export default Lab;

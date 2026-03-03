import { Brain, MessageSquare, Eye, BarChart3 } from 'lucide-react';
import '../../styles/services.css';

const services = [
    {
        icon: <Brain size={32} />,
        title: 'Generative AI',
        desc: 'Customized generative models for images, text, and data synthesis tailored to your brand.'
    },
    {
        icon: <MessageSquare size={32} />,
        title: 'LLM Solutions',
        desc: 'Fine-tuned Large Language Models for automated customer support and internal knowledge bases.'
    },
    {
        icon: <Eye size={32} />,
        title: 'Vision & Signal AI',
        desc: 'Advanced computer vision and signal processing for real-time monitoring and analysis.'
    },
    {
        icon: <BarChart3 size={32} />,
        title: 'Predictive Intelligence',
        desc: 'Data-driven forecasting and behavior analysis to stay ahead of market trends.'
    }
];

const ServicesSection = () => {
    return (
        <section className="services-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2>Cutting-Edge <span className="gradient-text">AI Services</span></h2>
                    <p>We provide comprehensive AI solutions to help you automate and optimize your business processes.</p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <a href="/services" className="service-link">Learn More &rarr;</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

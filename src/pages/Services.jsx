import { Brain, MessageSquare, Eye, BarChart3, ChevronRight } from 'lucide-react';

const servicesDetail = [
    {
        icon: <Brain />,
        title: 'Generative AI Solutions',
        desc: 'Harness the power of diffusion models and GANs to create realistic images, synthetic data, and creative content.',
        items: ['Custom Image Generators', 'Data Augmentation', 'Creative Content Automation', 'Style Transfer Tools']
    },
    {
        icon: <MessageSquare />,
        title: 'Natural Language Processing',
        desc: 'Build intelligent interfaces that understand and respond to human language with nuance and accuracy.',
        items: ['Fine-tuned LLMs', 'Multilingual Chatbots', 'Sentiment Analysis', 'Semantic Search Systems']
    },
    {
        icon: <Eye />,
        title: 'Computer Vision',
        desc: 'Enable machines to see and interpret the physical world through advanced item detection and tracking.',
        items: ['Item Recognition', 'Real-time Video Analytics', 'Medical Imaging AI', 'Facial Recognition Systems']
    },
    {
        icon: <BarChart3 />,
        title: 'Predictive Analytics',
        desc: 'Turn historical data into future foresight with our machine learning pipelines.',
        items: ['Demand Forecasting', 'Churn Prediction', 'Financial Modeling', 'Risk Assessment']
    }
];

const Services = () => {
    return (
        <div className="services-page">
            <section className="services-hero section-padding grid-bg">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">AI Expertise</div>
                        <h1>Comprehensive <span className="gradient-text">AI Solutions</span></h1>
                        <p>We provide end-to-end AI development and integration services to transform your business operations.</p>
                    </div>

                    <div className="services-detail-grid">
                        {servicesDetail.map((service, index) => (
                            <div key={index} className="detail-card">
                                <div className="detail-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <ul className="detail-items">
                                    {service.items.map((item, i) => (
                                        <li key={i}><ChevronRight size={16} /> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="tech-stack-section section-padding bg-alt">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Technical <span className="gradient-text">Expertise</span></h2>
                        <p>We work with the latest technologies to ensure your AI solutions are robust and scalable.</p>
                    </div>
                    <div className="tech-logos">
                        <div className="tech-item">PyTorch</div>
                        <div className="tech-item">TensorFlow</div>
                        <div className="tech-item">OpenAI API</div>
                        <div className="tech-item">Hugging Face</div>
                        <div className="tech-item">LangChain</div>
                        <div className="tech-item">AWS Sagemaker</div>
                    </div>
                </div>
            </section>

            <section className="services-cta section-padding">
                <div className="container text-center">
                    <h2>Need a <span className="gradient-text">Custom AI Solution?</span></h2>
                    <p>Tell us about your unique use case, and our engineers will design a prototype tailored to your needs.</p>
                    <a href="/contact" className="btn-primary">Book a Consultation</a>
                </div>
            </section>
        </div>
    );
};

export default Services;

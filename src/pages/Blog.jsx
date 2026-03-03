import { Calendar, User, ArrowRight } from 'lucide-react';

const blogs = [
    {
        title: 'The Future of Generative AI in Business',
        excerpt: 'Discover how generative AI is transforming industries from marketing to product design.',
        date: 'Oct 15, 2024',
        author: 'Dr. Sarah Chen',
        tag: 'Future',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600'
    },
    {
        title: 'Scaling LLMs for Enterprise Workflows',
        excerpt: 'Learn the best practices for deploying Large Language Models at scale while maintaining security.',
        date: 'Oct 10, 2024',
        author: 'James Wilson',
        tag: 'Engineering',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4628c9759?auto=format&fit=crop&q=80&w=600'
    },
    {
        title: 'Computer Vision in Modern Manufacturing',
        excerpt: 'How AI-powered vision systems are reducing errors and increasing safety on factory floors.',
        date: 'Sep 28, 2024',
        author: 'Elena Rodriguez',
        tag: 'Industry',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
    }
];

const Blog = () => {
    return (
        <div className="blog-page">
            <section className="blog-hero section-padding grid-bg">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">Knowledge Hub</div>
                        <h1>Insights from the <span className="gradient-text">World of AI</span></h1>
                        <p>Stay updated with the latest trends, research, and technical guides from our experts.</p>
                    </div>

                    <div className="blog-grid">
                        {blogs.map((blog, index) => (
                            <div key={index} className="blog-card">
                                <div className="blog-img-container">
                                    <div className="blog-tag">{blog.tag}</div>
                                    <img src={blog.image} alt={blog.title} />
                                </div>
                                <div className="blog-info">
                                    <div className="blog-meta">
                                        <span><Calendar size={14} /> {blog.date}</span>
                                        <span><User size={14} /> {blog.author}</span>
                                    </div>
                                    <h3>{blog.title}</h3>
                                    <p>{blog.excerpt}</p>
                                    <a href="#" className="blog-link">Read Story <ArrowRight size={18} /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="newsletter-section section-padding bg-alt">
                <div className="container">
                    <div className="newsletter-card">
                        <h2>Join Our <span className="gradient-text">Newsletter</span></h2>
                        <p>Get the latest AI insights delivered straight to your inbox.</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your email address" required />
                            <button type="submit" className="btn-primary">Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;

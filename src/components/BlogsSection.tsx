import blog1 from '@/assets/blog-1.jpg';
import blog2 from '@/assets/blog-2.jpg';
import blog3 from '@/assets/blog-3.jpg';

const blogs = [
  {
    id: 1,
    title: "Advanced Manufacturing Techniques in Aerospace",
    excerpt: "Exploring cutting-edge manufacturing methods that are revolutionizing the aerospace industry with precision and efficiency.",
    image: blog1,
    date: "March 15, 2024",
    category: "Manufacturing"
  },
  {
    id: 2,
    title: "Quality Assurance in Defense Manufacturing",
    excerpt: "Understanding the critical importance of quality control and compliance in defense manufacturing processes.",
    image: blog2,
    date: "March 10, 2024",
    category: "Quality"
  },
  {
    id: 3,
    title: "The Future of CNC Machining Technology",
    excerpt: "How advanced CNC technologies are shaping the future of precision manufacturing and engineering excellence.",
    image: blog3,
    date: "March 5, 2024",
    category: "Technology"
  }
];

const BlogsSection = () => {
  return (
    <section id="blogs" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            <span className="gradient-text">Blogs & News</span>
          </h2>
          <p className="text-foreground-muted text-xl">
            Stay updated with the latest insights and developments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article key={blog.id} className="neomac-card group cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-accent font-medium">{blog.category}</span>
                  <span className="text-foreground-muted">{blog.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-200">
                  {blog.title}
                </h3>
                
                <p className="text-foreground-muted leading-relaxed">
                  {blog.excerpt}
                </p>
                
                <div className="pt-4">
                  <span className="text-accent font-semibold hover:underline cursor-pointer">
                    Read More →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
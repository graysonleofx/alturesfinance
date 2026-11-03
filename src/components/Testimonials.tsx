import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sample Profile A',
      role: 'Illustrative feedback',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'The Alturas Finance demo showcases a clear, modern approach to finance product UI.',
      rating: 5,
    },
    {
      name: 'Sample Profile B',
      role: 'Illustrative feedback',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'This example card demonstrates how testimonial content could be presented in a product interface.',
      rating: 5,
    },
    {
      name: 'Sample Profile C',
      role: 'Illustrative feedback',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'This is placeholder content for the portfolio demo, not a real customer testimonial.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-banking-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sample{' '}
            <span className="text-transparent bg-gradient-primary bg-clip-text">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Illustrative content only. These are not real customer testimonials.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-2xl shadow-card hover:shadow-banking transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-banking-orange fill-current" />
                ))}
              </div>
              
              <blockquote className="text-foreground mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
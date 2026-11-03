import { 
  CreditCard, 
  Clock, 
  Shield, 
  MessageCircle, 
  Lock, 
  BarChart3 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: CreditCard,
      title: 'Account UI Preview',
      description: 'Explore a sample account setup flow designed for the portfolio demo.',
    },
    {
      icon: Clock,
      title: 'Simulated Activity',
      description: 'Preview example notifications and balance updates using illustrative data.',
    },
    {
      icon: Shield,
      title: 'Transfer Flow Preview',
      description: 'Explore a fictional transfer interface; no real payments can be made.',
    },
    {
      icon: MessageCircle,
      title: 'Support UI Preview',
      description: 'See a sample support experience included for interface demonstration.',
    },
    {
      icon: Lock,
      title: 'Safety Concepts',
      description: 'Review illustrative safety messaging; no fraud monitoring is provided.',
    },
    {
      icon: BarChart3,
      title: 'Sample Analytics',
      description: 'Preview illustrative charts and transaction history in the demo.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Powerful Features for{' '}
            <span className="text-transparent bg-gradient-primary bg-clip-text">
              Finance UI Demo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A portfolio project demonstrating common finance-product interface patterns. No real financial products or services are offered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border hover:shadow-banking transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-primary">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
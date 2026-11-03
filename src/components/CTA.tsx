import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold">
            Explore the Alturas Finance{' '}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              UI Demo
            </span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            This developer portfolio project showcases a fictional finance interface. Account details and interactions are illustrative only.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button variant="accent" size="lg" className="text-lg px-8 py-6" onClick={() => window.location.href = '/open-account'}>
              Explore the Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline-white" size="lg" className="text-lg px-8 py-6" onClick={() => window.location.href = '/contact'}>
              <MessageCircle className="mr-2 h-5 w-5" />
              View Contact UI
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 opacity-80">
            <div className="text-center">
              <div className="text-2xl font-bold">UI</div>
              <div className="text-sm">Portfolio project</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Sample</div>
              <div className="text-sm">Illustrative data</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">No</div>
              <div className="text-sm">Real transactions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Alturas</div>
              <div className="text-sm">Fictional product</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
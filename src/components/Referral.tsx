import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Gift, Users, ArrowRight, Copy, Check, MessageCircle, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Referral = () => {
  const { toast } = useToast();
  const [referralCode, setReferralCode] = useState('');
  const [isCodeGenerated, setIsCodeGenerated] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const generateReferralCode = () => {
    // Get user data from localStorage if available, otherwise generate random
    const userData = JSON.parse(localStorage.getItem('userSession') || '{}');
    const accountNumber = userData.accountNumber || generateAccountNumber();
    const code = `REF-${accountNumber}`;
    setReferralCode(code);
    setIsCodeGenerated(true);
    setIsDialogOpen(true);
  };

  const generateAccountNumber = () => {
    return '3032' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Referral code copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareViaWhatsApp = () => {
    const message = `Explore the Alturas Finance developer UI demo and portfolio project: ${window.location.origin}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const shareViaEmail = () => {
    const subject = 'Explore the Alturas Finance UI demo';
    const body = `Hi,

I'm sharing the Alturas Finance developer UI demo and portfolio project.

Explore it here: ${window.location.origin}
No real accounts, payments, or financial services are offered.`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-accent mb-6">
            <Gift className="h-8 w-8 text-accent-foreground" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            Share the{' '}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              demo
            </span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Share this developer UI demo and portfolio project. It is not a bank and does not provide real financial services.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Share the project</h3>
              <p className="text-white/80">Send the demo link to friends</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Explore the interface</h3>
              <p className="text-white/80">Preview the fictional finance experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Gift className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No real products</h3>
              <p className="text-white/80">No accounts, deposits, or rewards are involved</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={generateReferralCode}
                >
                  Get Demo Share Code
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center">Your Demo Share Code</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="p-4 bg-secondary rounded-lg border-2 border-dashed border-primary/20">
                      <p className="text-2xl font-bold text-primary font-mono">{referralCode}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      onClick={copyToClipboard} 
                      className="w-full" 
                      variant="outline"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy Code
                        </>
                      )}
                    </Button>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        onClick={shareViaWhatsApp} 
                        variant="outline" 
                        className="text-green-600 border-green-600 hover:bg-green-50"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                      <Button 
                        onClick={shareViaEmail} 
                        variant="outline"
                        className="text-blue-600 border-blue-600 hover:bg-blue-50"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    Share this code with friends and family. When they sign up and deposit, 
                    you both get $5,000!
                  </p>
                </div>
              </DialogContent>
            </Dialog>
            <Button variant="outline-white" size="lg" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referral;
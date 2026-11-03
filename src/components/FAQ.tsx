import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is the Alturas Finance demo?',
      answer: 'Alturas Finance is a developer UI demo and portfolio project that showcases a fictional finance interface.',
    },
    {
      question: 'Are the accounts and transactions real?',
      answer: 'No. Account details, balances, deposits, transfers, and withdrawals shown in this project are illustrative and do not represent real financial activity.',
    },
    {
      question: 'Is Alturas Finance a bank?',
      answer: 'No. Alturas Finance is not a bank or financial institution and does not provide financial products or services.',
    },
    {
      question: 'Can I use the demo to make payments?',
      answer: 'No. The interface is for portfolio demonstration only and cannot be used to make or receive payments.',
    },
    {
      question: 'Why was this project created?',
      answer: 'It demonstrates interface design and frontend development patterns for a fictional finance product.',
    },
    {
      question: 'Do the forms create real accounts?',
      answer: 'Forms are part of the interface demo. Do not enter real payment credentials or sensitive financial information.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked{' '}
            <span className="text-transparent bg-gradient-primary bg-clip-text">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions our customers ask.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
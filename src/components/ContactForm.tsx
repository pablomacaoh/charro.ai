
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-charro-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-charro-700 uppercase bg-white rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-charro-900 mb-4">
            Contact Us
          </h2>
          <p className="max-w-2xl mx-auto text-charro-600">
            Let's discuss how we can help transform your business
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-charro-100 text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-charro-900">Our Location</h3>
                  <p className="text-charro-600">123 Business Avenue, Innovation District</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-charro-100 text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-charro-900">Email Us</h3>
                  <p className="text-charro-600">contact@charro.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-charro-100 text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-charro-900">Call Us</h3>
                  <p className="text-charro-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charro-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charro-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charro-700 mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                  className="w-full resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

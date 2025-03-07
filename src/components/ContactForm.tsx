
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log("Attempting to save to Firestore:", formData);
      
      // Save data to Firebase Firestore
      const docRef = await addDoc(collection(db, "contactSubmissions"), {
        ...formData,
        createdAt: serverTimestamp()
      });
      
      console.log("Document written with ID: ", docRef.id);
      
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos comunicaremos lo antes posible.",
      });
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error submitting form: ", error);
      
      // Provide more specific error message for permission errors
      let errorMessage = "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.";
      if (error instanceof Error && error.message.includes("permission")) {
        errorMessage = "Error de permisos en Firestore. Verifica las reglas de seguridad de tu base de datos.";
        console.error("Firebase permissions error. Please update your Firestore security rules to allow writes to the contactSubmissions collection.");
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-charro-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-charro-700 uppercase bg-white rounded-full">
            Contactanos
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-charro-900 mb-4">
            Envia un mensaje
          </h2>
          <p className="max-w-2xl mx-auto text-charro-600">
            Hablemos de cómo transformar tu negocio
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-charro-100 text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-charro-900">Email</h3>
                  <p className="text-charro-600">pablo@charro.ai</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-charro-100 text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-charro-900">Llamanos</h3>
                  <p className="text-charro-600">+52 552525 8718</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charro-700 mb-1">
                  Nombre Completo
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre completo"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charro-700 mb-1">
                  Email
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
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="¿Cómo podemos ayudarte?"
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
                {isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

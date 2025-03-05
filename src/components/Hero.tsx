
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-gray-100/50 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-charro-700 uppercase bg-charro-100 rounded-full animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Servicios y Consultoría Digital
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-charro-900 mb-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Transformamos ideas en <br />
            <span className="text-accent">Excelencia Digital</span>
          </h1>
          
          <p className="text-lg md:text-xl text-charro-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s' }}>
            En <b>Charro.ai</b> revolucionamos la transformación digital. Impulsamos tu adopción de Inteligencia Artificial, fusionamos tecnologías y potenciamos la comunicación empresarial mediante WhatsApp, todo con un enfoque estratégico que convierte cada reto en una oportunidad de innovación.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a 
              href="#services" 
              className="px-6 py-3 font-medium text-white bg-accent rounded-md hover:bg-accent/90 transition-colors duration-300 shadow-sm"
            >
              Servicios
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 font-medium text-charro-700 bg-transparent border border-charro-200 rounded-md hover:bg-charro-50 transition-colors duration-300"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-charro-400 hover:text-charro-600 transition-colors">
          <ArrowDown size={30} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

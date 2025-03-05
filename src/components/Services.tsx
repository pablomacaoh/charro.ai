
import { Monitor, LineChart, Database, Wrench, Globe, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies focused on performance and user experience."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Digital Strategy",
      description: "Data-driven strategies to optimize your digital presence, increase engagement, and drive business growth."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Analysis",
      description: "Transform raw data into meaningful insights that inform business decisions and identify opportunities."
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "IT Consulting",
      description: "Expert guidance on technology implementation, system architecture, and digital transformation."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Digital Marketing",
      description: "Comprehensive marketing solutions to increase brand visibility and connect with your target audience."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Process Automation",
      description: "Streamline operations with custom automation solutions that save time and reduce costs."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 section-transition">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-charro-700 uppercase bg-charro-100 rounded-full">
            ¿Qué hacemos?
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-charro-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="max-w-2xl mx-auto text-charro-600">
            Impulsamos la transformación digital de tu negocio con soluciones integrales, diseñadas especialmente para satisfacer tus necesidades únicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-charro-50 text-accent mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-charro-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import { Users, Award, Clock, Briefcase } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "50+",
      label: "Clientes Satisfechos"
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "15+",
      label: "Años de Experiencia"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      value: "5+",
      label: "Soluciones nativas"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      value: "10+",
      label: "Socios de SaaS"
    }
  ];

  return (
    <section id="nosotros" className="py-10 md:py-16 bg-charro-50 rounded-xl mx-6 md:mx-8 relative overflow-hidden mb-40">
      {/* Background decorative elements 
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#10728B" d="M42.8,-68.2C54.9,-62.3,63.6,-49.6,69.8,-36C76,-22.4,79.7,-7.9,77.2,5.4C74.8,18.8,66.1,31,56.1,41.6C46.2,52.2,35,61.2,22,67.4C9,73.6,-5.8,77,-19.2,74.4C-32.7,71.8,-44.8,63.3,-53.6,52.4C-62.5,41.5,-68.1,28.2,-71.5,14C-74.9,-0.2,-76.1,-15.3,-70.9,-27.2C-65.8,-39.1,-54.2,-47.7,-42,-52.9C-29.8,-58.2,-16.9,-60,-2.6,-56.1C11.7,-52.2,30.7,-74.2,42.8,-68.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 opacity-10 rotate-45">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#10728B" d="M42.8,-68.2C54.9,-62.3,63.6,-49.6,69.8,-36C76,-22.4,79.7,-7.9,77.2,5.4C74.8,18.8,66.1,31,56.1,41.6C46.2,52.2,35,61.2,22,67.4C9,73.6,-5.8,77,-19.2,74.4C-32.7,71.8,-44.8,63.3,-53.6,52.4C-62.5,41.5,-68.1,28.2,-71.5,14C-74.9,-0.2,-76.1,-15.3,-70.9,-27.2C-65.8,-39.1,-54.2,-47.7,-42,-52.9C-29.8,-58.2,-16.9,-60,-2.6,-56.1C11.7,-52.2,30.7,-74.2,42.8,-68.2Z" transform="translate(100 100)" />
        </svg>
      </div>*/}

      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-charro-700 uppercase bg-white rounded-full">
            Conócenos
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-charro-900 mb-4">
            Nuestra Experiencia
          </h2>
          <p className="max-w-2xl mx-auto text-charro-600">
            Con un profundo conocimiento del ecosistema digital y de los mercados emergentes, en Charro.ai ayudamos a las empresas a adoptar tecnología de manera inteligente para impulsar su transformación y competitividad.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* About Content */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 transform hover:translate-y-[-5px] transition-transform duration-300">
              <h3 className="text-2xl font-bold text-accent mb-4">Expertos en innovación digital</h3>
              <p className="text-charro-600 mb-6">
                En Charro.ai contamos con una sólida trayectoria en la intersección de negocios y tecnología, con experiencia en empresas líderes como Meta, WhatsApp, Google y Apple. Hemos trabajado en la adopción de SaaS, estrategias de go-to-market, ventas empresariales y soluciones de mensajería digital en mercados globales, con un enfoque especial en LATAM. 
              </p>
              <p className="text-charro-600 mb-6">
                Nuestro conocimiento del ecosistema digital y nuestra red de expertos nos permiten entender los desafíos de transformación digital y aprovechar las mejores herramientas para afrontarlos. Como parte de Merkuria, también contamos con acceso a recursos de ingeniería de software para el desarrollo e integración de soluciones tecnológicas.
              </p>
              {/*<div className="flex flex-wrap gap-4 mt-8">
                <span className="bg-charro-100 text-charro-700 px-4 py-2 rounded-full text-sm font-medium">Innovación</span>
                <span className="bg-charro-100 text-charro-700 px-4 py-2 rounded-full text-sm font-medium">Excelencia</span>
                <span className="bg-charro-100 text-charro-700 px-4 py-2 rounded-full text-sm font-medium">Compromiso</span>
                <span className="bg-charro-100 text-charro-700 px-4 py-2 rounded-full text-sm font-medium">Resultados</span>
              </div>*/}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center transform hover:translate-y-[-5px] transition-transform duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-bold text-accent mb-2">{stat.value}</h4>
                <p className="text-charro-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
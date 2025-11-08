import { useState, useEffect } from "react";
import { FiMenu, FiX, FiPhone, FiCamera } from "react-icons/fi";

export default function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-ink text-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-ink/80 backdrop-blur-sm border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 relative">
          {/* LOGO */}
          <a href="#inicio" className="flex items-center gap-2 absolute left-0">
            <div className="w-9 h-9 rounded-xl border border-white/10 grid place-items-center">
              <span className="font-bold text-accent">CT</span>
            </div>
            <span className="font-semibold text-sm sm:text-base">
              Consultor Tecnológico
            </span>
          </a>

          {/* NAVBAR */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium">
            <a href="#inicio" className="hover:text-accent transition">Inicio</a>
            <a href="#servicios" className="hover:text-accent transition">Servicios</a>
            <a href="#testimonios" className="hover:text-accent transition">Testimonios</a>
            <a href="#contactame" className="hover:text-accent transition">Contactame</a>
          </nav>

          {/* MENU MOBILE */}
          <button
            className="md:hidden text-2xl hover:text-accent transition ml-auto"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden bg-ink/95 backdrop-blur-sm border-t border-white/10">
            <div className="flex flex-col items-center py-4 space-y-4 text-sm">
              <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
              <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
              <a href="#testimonios" onClick={() => setOpen(false)}>Testimonios</a>
              <a href="#contactame" onClick={() => setOpen(false)}>Contactame</a>
            </div>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative flex items-center justify-center min-h-screen text-center overflow-hidden py-14 md:py-16"
      >
        <img
          src="https://images.unsplash.com/photo-1527430253228-e93688616381?w=1600&q=80"
          alt="Fondo tecnología"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 to-ink/95" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-accent text-sm uppercase tracking-wide">
            Consultoría estratégica en tecnología
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
            Soluciones tecnológicas con enfoque{" "}
            <span className="text-accent">estratégico</span> y resultados medibles
          </h1>
          <p className="mt-5 text-muted text-lg">
            Acompaño a equipos y líderes a diseñar, priorizar e implementar
            iniciativas tecnológicas que generen impacto real en el negocio.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contactame"
              className="px-6 py-3 bg-accent text-black font-semibold rounded-xl hover:brightness-90 transition"
            >
              Hablemos
            </a>
            <a
              href="#servicios"
              className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="bg-gradient-to-b from-panel to-ink py-14 md:py-16 px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Soluciones Tecnológicas
        </h2>
        <p className="text-muted max-w-3xl mx-auto mb-10">
          Descubrí nuestros servicios diseñados para optimizar tu negocio mediante
          innovación, automatización y estrategia tecnológica aplicada.
        </p>

        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Estrategia y Roadmap",
              text: "Definimos objetivos claros y un plan de acción tecnológico con foco en impacto, eficiencia y escalabilidad.",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
            },
            {
              title: "Arquitectura Cloud & DevOps",
              text: "Diseñamos infraestructuras seguras, ágiles y listas para escalar con las necesidades de tu negocio.",
              img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
            },
            {
              title: "Automatización y Datos",
              text: "Implementamos sistemas inteligentes que reducen tareas repetitivas y permiten decisiones basadas en datos.",
              img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
            },
            {
              title: "Ciberseguridad y Compliance",
              text: "Protegemos tu información y garantizamos el cumplimiento normativo con estrategias de seguridad avanzada.",
              img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=600&q=80",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="group relative bg-ink rounded-2xl overflow-hidden shadow-soft border border-white/10 hover:-translate-y-1 transition-transform"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-accent">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {service.text}
                </p>
                <a
                  href="#contactame"
                  className="inline-block px-4 py-2 text-sm font-medium border border-white/20 rounded-lg hover:bg-white/10 transition"
                >
                  Más información
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section
        id="testimonios"
        className="bg-panel py-14 md:py-16 px-6 text-center border-t border-white/10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Lo que opinan nuestros clientes
        </h2>
        <p className="text-muted mb-12">
          Conocé la experiencia de quienes confiaron en nuestra consultoría tecnológica.
        </p>

        <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Laura Méndez",
              role: "Directora de Innovación, TechWave",
              text: "El equipo logró acelerar nuestro roadmap tecnológico en tiempo récord. Profesionalismo y resultados tangibles.",
              img: "https://randomuser.me/api/portraits/women/68.jpg",
            },
            {
              name: "Carlos Ramírez",
              role: "CEO, DataNova Solutions",
              text: "Gracias a su asesoría implementamos automatizaciones que nos ahorraron más del 30% en operaciones.",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Sofía Torres",
              role: "Gerente IT, Cloudify LATAM",
              text: "Excelente experiencia. Supieron entender nuestras necesidades y proponer soluciones realistas y escalables.",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Martín Duarte",
              role: "CTO, NovaAI Labs",
              text: "El enfoque estratégico y técnico marcó la diferencia. Hoy nuestra infraestructura es más eficiente y segura.",
              img: "https://randomuser.me/api/portraits/men/51.jpg",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-ink p-6 rounded-2xl border border-white/10 shadow-soft hover:-translate-y-1 transition-transform"
            >
              <div className="flex justify-center mb-3">
                <span className="text-accent text-lg">★★★★★</span>
              </div>
              <p className="italic text-sm text-muted mb-4">"{t.text}"</p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div className="text-left">
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTAME */}
      <section
        id="contactame"
        className="py-14 md:py-16 px-6 bg-gradient-to-b from-ink to-panel border-t border-white/10 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-accent">
          Contactame
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* IZQUIERDA */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-[420px] h-[420px] border-2 border-dashed border-white/20 rounded-2xl flex flex-col justify-center items-center bg-ink/40 hover:border-accent transition relative">
              <h2 className="text-2xl font-bold text-accent mb-2">Presentate</h2>
              <span className="text-muted text-sm mb-2">📁 Cargar foto o video</span>
              <input
                type="file"
                accept="image/*,video/*"
                className="opacity-0 absolute w-full h-full cursor-pointer"
                title="Seleccionar archivo"
              />
            </div>

            {/* ÍCONOS */}
            <div className="flex justify-center gap-6">
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-black text-2xl hover:scale-105 transition-transform"
              >
                <FiPhone />
              </a>
              <a
                href="https://instagram.com/TU_USUARIO"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 flex items-center justify-center text-white text-2xl hover:scale-105 transition-transform"
              >
                <FiCamera />
              </a>
            </div>
          </div>

          {/* DERECHA */}
          <div className="flex flex-col items-center text-center space-y-6">
            <p className="text-muted max-w-md leading-relaxed">
              Estoy disponible para ayudarte con consultorías, mentorías o desarrollo de proyectos tecnológicos.  
              Mi enfoque está en lograr resultados tangibles que potencien tu visión.  
              Si querés contactarme, podés hacerlo fácilmente a través de WhatsApp o Instagram.
            </p>

            <div className="flex flex-col items-center gap-4 w-full max-w-sm">
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noreferrer"
                className="w-full px-6 py-3 rounded-xl bg-green-500 font-semibold text-black hover:brightness-90 transition"
              >
                WhatsApp
              </a>
              <a
                href="https://instagram.com/TU_USUARIO"
                target="_blank"
                rel="noreferrer"
                className="w-full px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 hover:scale-105 transition-transform"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink border-t border-white/10 py-10 text-center text-sm text-muted">
        <p className="mb-4">© {new Date().getFullYear()} Alexis Mauriz — Caballero Estratégico</p>
        <p className="mb-3 font-medium text-white">Mis redes sociales</p>
        <div className="flex justify-center gap-5">
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black text-xl hover:scale-110 transition-transform"
          >
            <FiPhone />
          </a>
          <a
            href="https://instagram.com/TU_USUARIO"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 flex items-center justify-center text-white text-xl hover:scale-110 transition-transform"
          >
            <FiCamera />
          </a>
        </div>
      </footer>
    </div>
  );
}

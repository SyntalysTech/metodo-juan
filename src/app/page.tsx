import Link from "next/link";
import { ArrowRight, BookOpen, Brain, CheckCircle, Clock, FileText, Monitor, RefreshCw, Smartphone } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-32 max-w-7xl mx-auto text-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/50 via-slate-50 to-slate-50"></div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
            Entrena tus oposiciones con <br className="hidden md:block" />
            <span className="text-primary relative inline-block">
              tests inteligentes
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-indigo-200" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
            </span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Más de 5000 preguntas para practicar. Tests ilimitados, sin restricciones. Corrección automática inmediata y explicación detallada de cada de error para que no vuelvas a fallar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
              Probar plataforma <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/dashboard" className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-sm flex items-center justify-center">
              Ver demo del dashboard
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-24 border-y border-slate-100 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Todo lo que necesitas para aprobar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <RefreshCw className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Práctica ilimitada</h3>
                <p className="text-slate-600">No hay límites. Haz todos los tests que necesites hasta dominar el temario por completo.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Corrección automática</h3>
                <p className="text-slate-600">Recibe tu nota al instante. Deja de perder tiempo corrigiendo con plantillas de papel.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Explicación de errores</h3>
                <p className="text-slate-600">Aprende de cada fallo con retroalimentación detallada y justificación para cada pregunta.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Multi-dispositivo</h3>
                <p className="text-slate-600">Estudia desde el móvil en el metro, la tablet en el sofá o el ordenador en el escritorio.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">¿Cómo funciona?</h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-slate-200 -z-10"></div>

            {[
              { icon: BookOpen, title: "Elige tema", desc: "Selecciona el bloque o temario que quieres repasar hoy." },
              { icon: FileText, title: "Haz el test", desc: "Configura el número de preguntas y el tiempo a tu gusto." },
              { icon: CheckCircle, title: "Recibe corrección", desc: "Obtén tus resultados, aciertos y fallos de forma instantánea." },
              { icon: Brain, title: "Aprende", desc: "Revisa las explicaciones de los errores para mejorar tu nivel." }
            ].map((step, i) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center relative bg-slate-50 md:bg-transparent">
                <div className="w-14 h-14 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center font-bold text-xl mb-4 shadow-sm z-10">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Categorías (CTA) */}
        <section className="bg-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Explora nuestros tests por categorías</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-12">Disponemos de cientos de tests segmentados por las áreas más demandadas en las oposiciones.</p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
              {['Inglés', 'Ortografía', 'Gramática', 'Psicotécnicos', 'Temario General'].map((cat, i) => (
                <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="font-medium">{cat}</span>
                </div>
              ))}
            </div>

            <Link href="/login" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
              Comenzar a practicar <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8 text-center text-slate-500">
        <p className="flex items-center justify-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          <span className="font-bold text-slate-900">Método Juan</span>
        </p>
        <p className="mt-4 text-sm">© {new Date().getFullYear()} Método Juan. Prototipo de plataforma de tests.</p>
      </footer>
    </div>
  );
}

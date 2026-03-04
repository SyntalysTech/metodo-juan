import Link from "next/link";
import { ArrowRight, BookOpen, Brain, CheckCircle, FileText, Smartphone, LayoutGrid, Award, Cpu, SpellCheck } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-slate-50 selection:bg-primary/20">
      <Navbar />

      <main className="flex-1 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-blue-50/10 to-transparent"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute top-[40%] left-[-10%] w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-40 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200/50 bg-blue-50 text-blue-700 text-sm font-semibold mb-8 shadow-sm backdrop-blur-sm shadow-blue-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Nueva plataforma v2.0 disponible
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[1.1]">
            Entrena tus oposiciones con <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-primary">
              tests inteligentes
            </span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-medium">
            Supera a tu competencia practicando sin límites. Corrección automática inmediata y explicación detallada de cada error para que domines el temario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-slate-900/20 hover:shadow-slate-900/30 flex items-center justify-center gap-2 group ring-4 ring-transparent hover:ring-slate-900/10 hover:-translate-y-1">
              Probar plataforma <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/dashboard" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-sm flex items-center justify-center hover:-translate-y-1">
              Ver demo interactiva
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-32 border-y border-slate-200/50 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Todo lo que necesitas para aprobar</h2>
              <p className="mt-4 text-lg text-slate-500 font-medium">Olvídate de acumular montañas de papel. Nuestra tecnología te ayudará a focalizar tus esfuerzos en las preguntas que fallas.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-slate-50/50 hover:bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300">
                <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-indigo-100/50 group-hover:scale-110 transition-transform">
                  <LayoutGrid className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Práctica ilimitada</h3>
                <p className="text-slate-500 font-medium leading-relaxed">No hay límites. Haz todos los tests que necesites hasta dominar el temario por completo de principio a fin.</p>
              </div>
              <div className="group bg-slate-50/50 hover:bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/5 hover:-translate-y-2 transition-all duration-300">
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-emerald-100/50 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Corrección al vuelo</h3>
                <p className="text-slate-500 font-medium leading-relaxed">Recibe tu nota al instante. Deja de perder tiempo comprobando respuestas con plantillas de papel arrugadas.</p>
              </div>
              <div className="group bg-slate-50/50 hover:bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-amber-900/5 hover:-translate-y-2 transition-all duration-300">
                <div className="bg-gradient-to-br from-amber-100 to-amber-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-amber-100/50 group-hover:scale-110 transition-transform">
                  <Brain className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Explicaciones ricas</h3>
                <p className="text-slate-500 font-medium leading-relaxed">Aprende de cada fallo con retroalimentación detallada y razonamiento justificado para cada pregunta del profesor.</p>
              </div>
              <div className="group bg-slate-50/50 hover:bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-blue-100/50 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Multi-dispositivo</h3>
                <p className="text-slate-500 font-medium leading-relaxed">Estudia en el metro desde el móvil, en el sofá con tu tablet o en el escritorio frente a tu ordenador sin problemas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center text-slate-900 tracking-tight mb-20">¿Cómo funciona el método?</h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative">
            <div className="hidden md:block absolute top-[36px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-slate-200 via-primary/30 to-slate-200 -z-10"></div>

            {[
              { icon: BookOpen, title: "1. Elige tema", desc: "Selecciona el bloque o temario que quieres repasar." },
              { icon: FileText, title: "2. Haz el test", desc: "Configura el número de preguntas y ajusta el límite de tiempo." },
              { icon: Award, title: "3. Descubre tu nota", desc: "Obtén tus estadísticas de aciertos y fallos instantáneamente." },
              { icon: Cpu, title: "4. Mejora diaria", desc: "Estudia las soluciones de la mano del algoritmo." }
            ].map((step, i) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center relative group">
                <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center font-bold text-xl mb-6 shadow-sm z-10 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 shadow-primary/20">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 font-medium max-w-[200px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Categorías (CTA) */}
        <section className="bg-slate-950 text-white py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Abarcamos todo el temario</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">Sumérgete en una base de datos de preguntas premium elaboradas bajo los más exigentes estándares educativos para tu Oposición.</p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
              {[
                { name: 'Inglés dialectal', icon: BookOpen },
                { name: 'Rigor Ortográfico', icon: SpellCheck },
                { name: 'Estructura Gramatical', icon: FileText },
                { name: 'Lógica Psicotécnica', icon: Brain },
                { name: 'Bases Generales', icon: LayoutGrid }
              ].map((cat, i) => (
                <div key={i} className="group bg-white/5 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all cursor-pointer backdrop-blur-md hover:-translate-y-1">
                  <cat.icon className="w-8 h-8 text-slate-300 group-hover:text-primary mb-3 transition-colors" />
                  <span className="font-bold text-sm tracking-wide">{cat.name}</span>
                </div>
              ))}
            </div>

            <Link href="/login" className="inline-flex items-center gap-3 bg-white text-slate-950 px-10 py-5 rounded-full font-bold hover:bg-slate-100 transition-all group shadow-2xl hover:scale-105">
              Comenzar tu preparación hoy <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200/60 py-16 px-4 sm:px-6 lg:px-8 text-center text-slate-500">
        <p className="flex items-center justify-center gap-2">
          <div className="bg-primary text-white p-1 rounded">
            <CheckCircle className="w-4 h-4" />
          </div>
          <span className="font-black tracking-tight text-slate-900 text-lg">Método Juan</span>
        </p>
        <p className="mt-4 text-sm font-medium">© {new Date().getFullYear()} Método Juan. Prototipo de plataforma de educación.</p>
      </footer>
    </div>
  );
}

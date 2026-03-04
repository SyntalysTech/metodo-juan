import Link from "next/link";
import { Award, BookOpen, Brain, CheckCircle, Flame, LogOut, Target, User, Search, Play, FileText, Settings2, LayoutList, Fingerprint } from "lucide-react";

export default function Dashboard() {
    const stats = [
        { title: "Tests completados", value: "34", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-100/50", border: "border-blue-200" },
        { title: "Tasa de aciertos", value: "82%", icon: Target, color: "text-emerald-600", bg: "bg-emerald-100/50", border: "border-emerald-200" },
        { title: "Preguntas resueltas", value: "1.250", icon: Brain, color: "text-amber-600", bg: "bg-amber-100/50", border: "border-amber-200" },
        { title: "Racha de estudio", value: "7 días", icon: Flame, color: "text-rose-600", bg: "bg-rose-100/50", border: "border-rose-200" },
    ];

    const categories = [
        { name: "Gramática Teórica", total: 850, icon: FileText, color: "group-hover:text-amber-600" },
        { name: "Ortografía Avanzada", total: 1200, icon: Fingerprint, color: "group-hover:text-indigo-600" },
        { name: "Inglés Nivel C1", total: 500, icon: Settings2, color: "group-hover:text-blue-600" },
        { name: "Tests Psicotécnicos", total: 2000, icon: LayoutList, color: "group-hover:text-emerald-600" },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans selection:bg-primary/20">
            {/* App Navbar */}
            <header className="bg-white border-b border-slate-200/60 sticky top-0 z-50 backdrop-blur-md bg-white/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/dashboard" className="flex items-center gap-2 group transition-all">
                            <div className="bg-primary text-white p-1.5 rounded-lg group-hover:scale-110 shadow-md shadow-primary/20 transition-transform">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-primary transition-colors">Método Juan</span>
                        </Link>

                        <div className="hidden md:flex relative flex-1 max-w-md mx-8">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input type="text" placeholder="Buscar preguntas, categorías..." className="w-full bg-slate-100/50 border border-slate-200 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-1.5 py-1.5 rounded-full pr-4 shadow-sm cursor-pointer hover:bg-slate-100 transition-colors">
                                <div className="bg-gradient-to-tr from-primary to-indigo-600 w-7 h-7 rounded-full flex items-center justify-center text-white shadow-inner">
                                    <User className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-bold text-slate-700">Juan Alumno</span>
                            </div>
                            <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-colors" title="Cerrar sesión">
                                <LogOut className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

                {/* Welcome Section */}
                <div className="mb-12">
                    <h1 className="text-4xl font-black text-slate-900 flex items-center gap-3 tracking-tight">
                        Panel de control
                    </h1>
                    <p className="text-slate-500 mt-2 text-lg font-medium max-w-2xl">
                        Continúa donde lo dejaste. Selecciona una categoría específica para entrenar tus debilidades.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
                    {stats.map((stat, i) => (
                        <div key={i} className={`bg-white p-6 rounded-3xl border ${stat.border} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden relative`}>
                            <div className="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-current to-transparent opacity-[0.03] rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="flex justify-between items-start mb-4">
                                <div className={`${stat.bg} ${stat.color} p-3 rounded-2xl ring-1 ring-black/5`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <p className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</p>
                                <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mt-1">{stat.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Categories / Tests */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3 tracking-tight">
                        <div className="bg-primary/10 text-primary p-2 rounded-xl">
                            <Award className="w-6 h-6" />
                        </div>
                        Categorías disponibles
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, i) => (
                        <Link
                            href="/configurar-test"
                            key={i}
                            className="group flex flex-col bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-300 overflow-hidden hover:-translate-y-2 relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="p-8 flex flex-col items-center text-center flex-1 relative z-10">
                                <div className={`w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-400 ${cat.color} group-hover:rotate-6 transition-all shadow-inner group-hover:scale-110`}>
                                    <cat.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-black text-slate-900 mb-2 leading-tight">{cat.name}</h3>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mt-auto group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                    <DatabaseInfo total={cat.total} />
                                </span>
                            </div>
                            <div className="bg-slate-50/50 p-4 border-t border-slate-100 flex items-center justify-center gap-2 text-primary font-bold opacity-80 group-hover:opacity-100 group-hover:bg-primary/5 transition-all">
                                <Play className="w-4 h-4 fill-primary/20" /> Iniciar Práctica
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}

// Small helper just to keep imports clean
function DatabaseInfo({ total }: { total: number }) {
    return (
        <>
            <span className="w-1.5 h-1.5 rounded-full bg-current"></span> {total} Preguntas
        </>
    )
}

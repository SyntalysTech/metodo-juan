import Link from "next/link";
import { Award, BookOpen, Brain, CheckCircle, Flame, LogOut, Target, User } from "lucide-react";

export default function Dashboard() {
    const stats = [
        { title: "Tests realizados", value: "34", icon: BookOpen, color: "text-blue-500", bg: "bg-blue-100" },
        { title: "Porcentaje aciertos", value: "82%", icon: Target, color: "text-emerald-500", bg: "bg-emerald-100" },
        { title: "Preguntas respondidas", value: "1.250", icon: Brain, color: "text-amber-500", bg: "bg-amber-100" },
        { title: "Racha actual", value: "7 días", icon: Flame, color: "text-rose-500", bg: "bg-rose-100" },
    ];

    const categories = [
        { name: "Inglés", total: 500, icon: "🇬🇧" },
        { name: "Ortografía", total: 1200, icon: "✍️" },
        { name: "Gramática", total: 850, icon: "📖" },
        { name: "Psicotécnicos", total: 2000, icon: "🧩" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* App Navbar Simplified */}
            <header className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/dashboard" className="flex items-center gap-2">
                            <div className="bg-primary/10 text-primary p-1 rounded-md">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <span className="font-bold text-xl text-slate-900">Método Juan</span>
                        </Link>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                                <User className="w-4 h-4 text-slate-600" />
                                <span className="text-sm font-medium text-slate-700">Juan</span>
                            </div>
                            <Link href="/" className="text-slate-500 hover:text-slate-800" title="Cerrar sesión">
                                <LogOut className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                {/* Welcome Section */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                        Hola, Juan <span className="text-4xl animate-bounce">👋</span>
                    </h1>
                    <p className="text-slate-600 mt-2 text-lg">
                        Selecciona un test para comenzar y seguir mejorando.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start justify-between">
                            <div>
                                <p className="text-slate-500 text-sm font-medium mb-1">{stat.title}</p>
                                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                            </div>
                            <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Categories / Tests */}
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Award className="w-6 h-6 text-primary" />
                    Categorías de examen
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:border-primary/50 transition-colors group">
                            <div className="p-6 flex-1 text-center border-b border-slate-100 bg-slate-50/50">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.name}</h3>
                                <p className="text-sm text-slate-500">{cat.total} preguntas en la base para practicar</p>
                            </div>
                            <div className="p-4 bg-white flex justify-center">
                                <Link
                                    href="/configurar-test"
                                    className="w-full text-center bg-slate-900 hover:bg-primary text-white font-medium py-3 px-4 rounded-xl transition-colors"
                                >
                                    Configurar Test
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

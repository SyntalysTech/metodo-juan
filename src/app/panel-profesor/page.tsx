import Link from "next/link";
import { CheckCircle, Database, LayoutDashboard, PlusCircle, Settings, Users, LogOut } from "lucide-react";

export default function PanelProfesor() {
    const preguntasTest = [
        {
            id: "Q001",
            pregunta: "Which sentence is grammatically correct?",
            categoria: "Inglés",
            correcta: "B",
        },
        {
            id: "Q002",
            pregunta: "Selecciona la palabra correctamente escrita:",
            categoria: "Ortografía",
            correcta: "C",
        },
        {
            id: "Q003",
            pregunta: "Si todos los ZORROS son ANIMALES y todos los ANIMALES respiran, entonces:",
            categoria: "Psicotécnicos",
            correcta: "B",
        },
        {
            id: "Q004",
            pregunta: "El sinónimo de 'Inexorable' es...",
            categoria: "Gramática",
            correcta: "A",
        },
        {
            id: "Q005",
            pregunta: "3, 6, 9, 12... el siguiente es:",
            categoria: "Psicotécnicos",
            correcta: "C",
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
            {/* Sidebar Panel Profesor */}
            <aside className="w-full md:w-64 bg-slate-900 text-white min-h-full flex flex-col">
                <div className="p-6 border-b border-slate-800">
                    <Link href="/panel-profesor" className="flex items-center gap-2">
                        <div className="bg-primary p-1.5 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-xl tracking-tight">Método Juan</span>
                    </Link>
                    <span className="text-xs text-slate-400 mt-2 block uppercase tracking-widest font-bold">Panel Administrador</span>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <Link href="#" className="flex items-center gap-3 px-4 py-3 bg-primary/20 text-primary rounded-xl font-medium transition-colors">
                        <Database className="w-5 h-5" /> Base de Preguntas
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-xl transition-colors">
                        <Users className="w-5 h-5" /> Alumnos Matriculados
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-xl transition-colors">
                        <LayoutDashboard className="w-5 h-5" /> Estadísticas
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-xl transition-colors">
                        <Settings className="w-5 h-5" /> Configuración
                    </Link>
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <Link href="/" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-rose-900/40 hover:text-rose-400 rounded-xl transition-colors">
                        <LogOut className="w-5 h-5" /> Cerrar sesión
                    </Link>
                </div>
            </aside>

            {/* Main Content Pane */}
            <main className="flex-1 p-4 sm:p-8 overflow-y-auto">

                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-900 mb-1">Base de Preguntas</h1>
                        <p className="text-slate-500 font-medium tracking-wide">Gestiona y actualiza el contenido de los tests de tus alumnos.</p>
                    </div>

                    <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2 border border-blue-600 shrink-0">
                        <PlusCircle className="w-5 h-5" />
                        Nueva Pregunta
                    </button>
                </header>

                <div className="grid lg:grid-cols-3 gap-8 items-start">

                    {/* Table List */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                            <h2 className="font-bold text-slate-900">Listado de Preguntas (5,204 total)</h2>
                            <div className="flex gap-2">
                                <select className="bg-white border border-slate-200 rounded-lg text-sm px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary shadow-sm">
                                    <option>Todas las categorías</option>
                                    <option>Inglés</option>
                                    <option>Ortografía</option>
                                </select>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-200">
                                        <th className="p-4 font-bold uppercase tracking-wider">ID</th>
                                        <th className="p-4 font-bold uppercase tracking-wider">Pregunta</th>
                                        <th className="p-4 font-bold uppercase tracking-wider">Categoría</th>
                                        <th className="p-4 font-bold uppercase tracking-wider text-center">Correcta</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {preguntasTest.map((q) => (
                                        <tr key={q.id} className="hover:bg-slate-50/80 transition-colors">
                                            <td className="p-4 font-medium text-slate-400 text-xs">
                                                {q.id}
                                            </td>
                                            <td className="p-4 text-slate-900 font-medium max-w-[200px] truncate">
                                                {q.pregunta}
                                            </td>
                                            <td className="p-4">
                                                <span className="inline-flex bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full text-xs font-bold border border-slate-200">
                                                    {q.categoria}
                                                </span>
                                            </td>
                                            <td className="p-4 text-center">
                                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                                                    {q.correcta}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Formulario Simulado */}
                    <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden sticky top-8 p-6">
                        <h2 className="font-bold text-slate-900 text-xl border-b border-slate-100 pb-4 mb-6 relative">
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
                            Añadir nueva pregunta
                        </h2>

                        <form className="space-y-4" action="#">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Categoría</label>
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm text-sm">
                                    <option>Inglés</option>
                                    <option>Ortografía</option>
                                    <option>Gramática</option>
                                    <option>Psicotécnicos</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Enunciado / Pregunta</label>
                                <textarea
                                    rows={2}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm text-sm resize-none"
                                    placeholder="Ej: ¿Cuál es el formato correcto...?"
                                ></textarea>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-slate-700">Opciones</label>
                                {['A', 'B', 'C', 'D'].map((opt) => (
                                    <div key={opt} className="flex gap-2 items-center">
                                        <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 font-bold shrink-0">{opt}</span>
                                        <input
                                            type="text"
                                            placeholder={`Respuesta ${opt}`}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                        <input type="radio" name="correcta" title="Marcar como correcta" className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 rounded-full border-slate-300" defaultChecked={opt === 'B'} />
                                    </div>
                                ))}
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Explicación del fallo (apuntes para alumno)</label>
                                <textarea
                                    rows={3}
                                    className="w-full bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-sm text-sm resize-none"
                                    placeholder="Explica aquí por qué la respuesta correcta es esa..."
                                ></textarea>
                            </div>

                            <button className="w-full bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-sm pt-4 mt-2">
                                Guardar pregunta
                            </button>
                        </form>
                    </div>

                </div>

            </main>
        </div>
    );
}

"use client";

import Link from "next/link";
import { CheckCircle, Database, LayoutDashboard, PlusCircle, Settings, Settings2, Users, LogOut, ChevronDown, MoreHorizontal, FileText, Fingerprint, LayoutList, Check, Link as LinkIcon } from "lucide-react";

export default function PanelProfesor() {
    const preguntasTest = [
        {
            id: "Q001",
            pregunta: "Which sentence is grammatically correct?",
            categoria: "Inglés",
            correcta: "C",
            fecha: "Hoy"
        },
        {
            id: "Q002",
            pregunta: "Selecciona la palabra correctamente escrita:",
            categoria: "Ortografía",
            correcta: "B",
            fecha: "Ayer"
        },
        {
            id: "Q003",
            pregunta: "Si todos los ZORROS son ANIMALES y todos los ANIMALES respiran entonces",
            categoria: "Psicotécnicos",
            correcta: "B",
            fecha: "Hace 2d"
        },
        {
            id: "Q004",
            pregunta: "El sinónimo de 'Inexorable' es...",
            categoria: "Gramática",
            correcta: "A",
            fecha: "Hace 5d"
        },
        {
            id: "Q005",
            pregunta: "3, 6, 9, 12... el número que sigue a continuación es:",
            categoria: "Psicotécnicos",
            correcta: "A",
            fecha: "1 Mar"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans selection:bg-primary/20">
            {/* Sidebar Panel Profesor */}
            <aside className="w-full md:w-72 bg-slate-950 text-white min-h-full flex flex-col fixed md:sticky top-0 h-screen overflow-y-auto">
                <div className="p-8 border-b border-white/5">
                    <Link href="/panel-profesor" className="flex items-center gap-3 group">
                        <div className="bg-primary/20 p-2 rounded-xl group-hover:bg-primary transition-colors border border-primary/30">
                            <CheckCircle className="w-6 h-6 text-primary group-hover:text-white" />
                        </div>
                        <div>
                            <span className="font-black text-xl tracking-tight block leading-none">Método Juan</span>
                            <span className="text-[10px] text-slate-400 mt-1 block uppercase tracking-[0.2em] font-bold">Admin Console</span>
                        </div>
                    </Link>
                </div>

                <nav className="flex-1 px-4 py-8 space-y-2">
                    <p className="px-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">Gestión Principal</p>
                    <Link href="#" className="flex items-center gap-4 px-4 py-3.5 bg-primary text-white rounded-2xl font-bold transition-all shadow-xl shadow-primary/20 relative overflow-hidden group">
                        <Database className="w-5 h-5 relative z-10" />
                        <span className="relative z-10">Base de Datos</span>
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Link>
                    <Link href="#" className="flex items-center gap-4 px-4 py-3.5 text-slate-400 hover:bg-white/5 hover:text-white rounded-2xl font-bold transition-all group">
                        <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>Alumnado</span>
                        <span className="ml-auto bg-white/10 text-white text-[10px] px-2 py-0.5 rounded-full">42</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-4 px-4 py-3.5 text-slate-400 hover:bg-white/5 hover:text-white rounded-2xl font-bold transition-all group">
                        <LayoutDashboard className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>Analítica</span>
                    </Link>

                    <p className="px-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-8 mb-4">Sistema</p>
                    <Link href="#" className="flex items-center gap-4 px-4 py-3.5 text-slate-400 hover:bg-white/5 hover:text-white rounded-2xl font-bold transition-all group">
                        <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                        <span>Configuración</span>
                    </Link>
                </nav>

                <div className="p-6">
                    <Link href="/" className="flex items-center justify-between px-4 py-4 text-slate-400 hover:text-white bg-white/5 hover:bg-rose-500 hover:shadow-lg hover:shadow-rose-500/20 rounded-2xl font-bold transition-all group border border-white/5 hover:border-transparent">
                        <div className="flex items-center gap-3">
                            <img src="/api/placeholder/40/40" alt="Avatar" className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-700 group-hover:border-rose-300 pointer-events-none opacity-0" />
                            <div className="flex flex-col">
                                <span className="text-sm">Juan Profesor</span>
                                <span className="text-[10px] text-slate-500 group-hover:text-rose-200">Profesor Titular</span>
                            </div>
                        </div>
                        <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </Link>
                </div>
            </aside>

            {/* Main Content Pane */}
            <main className="flex-1 p-6 sm:p-10 lg:p-12 overflow-y-auto bg-slate-50 relative min-h-screen">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 relative z-10">
                    <div>
                        <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Repositorio de Preguntas</h1>
                        <p className="text-slate-500 font-medium text-lg">Administra el inventario de tests para la evaluación continua.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="bg-white hover:bg-slate-100 text-slate-700 px-5 py-3 rounded-2xl font-bold transition-all shadow-sm flex items-center justify-center gap-2 border border-slate-200 shrink-0">
                            <LinkIcon className="w-5 h-5" /> Importar Word
                        </button>
                        <button className="bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2 border border-slate-800 shrink-0 group">
                            <PlusCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Nuevo Formulario
                        </button>
                    </div>
                </header>

                <div className="grid xl:grid-cols-3 gap-8 items-start relative z-10">

                    {/* Table List */}
                    <div className="xl:col-span-2 bg-white rounded-[2rem] shadow-sm border border-slate-200/60 overflow-hidden flex flex-col relative group">
                        <div className="p-6 bg-white border-b border-slate-100 flex items-center justify-between sticky top-0 z-20">
                            <h2 className="font-black text-slate-900 text-lg flex items-center gap-2">
                                Listado de Inventario
                                <span className="bg-slate-100 text-slate-500 px-2.5 py-1 rounded-lg text-xs tracking-wider">5,204 REGISTROS</span>
                            </h2>
                            <div className="flex gap-2 relative">
                                <select className="appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm font-bold text-slate-600 text-sm cursor-pointer hover:bg-slate-100 transition-colors">
                                    <option>Todas las categorías</option>
                                    <option>Inglés C1</option>
                                    <option>Ortografía Avanz.</option>
                                </select>
                                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50/50 text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-slate-100">
                                        <th className="px-6 py-4">Ref. ID</th>
                                        <th className="px-6 py-4">Enunciado / Pregunta</th>
                                        <th className="px-6 py-4">Clasificación</th>
                                        <th className="px-6 py-4 text-center">Clave</th>
                                        <th className="px-6 py-4 text-right">Alta</th>
                                        <th className="px-6 py-4"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {preguntasTest.map((q) => (
                                        <tr key={q.id} className="hover:bg-slate-50/80 transition-colors group/row cursor-pointer">
                                            <td className="px-6 py-5 font-bold text-slate-400 text-xs">
                                                #{q.id}
                                            </td>
                                            <td className="px-6 py-5 text-slate-900 font-bold max-w-[250px] truncate text-sm">
                                                {q.pregunta}
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border border-slate-200 shadow-sm">
                                                    {q.categoria === 'Inglés' && <Settings2 className="w-3 h-3 text-blue-500" />}
                                                    {q.categoria === 'Ortografía' && <Fingerprint className="w-3 h-3 text-indigo-500" />}
                                                    {q.categoria === 'Gramática' && <FileText className="w-3 h-3 text-amber-500" />}
                                                    {q.categoria === 'Psicotécnicos' && <LayoutList className="w-3 h-3 text-emerald-500" />}
                                                    {q.categoria}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 text-center">
                                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 text-xs font-black shadow-sm relative overflow-hidden group-hover/row:scale-110 transition-transform">
                                                    {q.correcta}
                                                    <div className="absolute inset-0 bg-emerald-100 opacity-0 group-hover/row:opacity-20 transition-opacity"></div>
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 text-right font-bold text-slate-400 text-xs">
                                                {q.fecha}
                                            </td>
                                            <td className="px-6 py-5">
                                                <button className="text-slate-400 hover:text-slate-900 bg-white hover:bg-slate-100 p-2 rounded-xl transition-colors border border-transparent hover:border-slate-200 shadow-none hover:shadow-sm">
                                                    <MoreHorizontal className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-center sticky bottom-0">
                            <button className="text-sm font-bold text-primary hover:text-indigo-700 py-2 px-4 rounded-xl hover:bg-primary/5 transition-colors">
                                Cargar más registros de la DB
                            </button>
                        </div>
                    </div>

                    {/* Formulario Simulado */}
                    <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-200/60 overflow-hidden sticky top-8 relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-[40px] pointer-events-none -z-10 group-hover:bg-indigo-100 transition-colors duration-1000"></div>

                        <div className="p-8 border-b border-slate-100">
                            <h2 className="font-black text-slate-900 text-2xl tracking-tight">Formulario de Alta</h2>
                            <p className="text-sm text-slate-500 font-medium mt-1">Registra nuevos problemas al algoritmo.</p>
                        </div>

                        <form className="p-8 space-y-6" action="#">
                            <div>
                                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Familia / Categoría</label>
                                <div className="relative">
                                    <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 pr-10 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm text-sm font-bold text-slate-700 appearance-none cursor-pointer">
                                        <option>Inglés Nivel C1</option>
                                        <option>Ortografía Avanzada</option>
                                        <option>Bases Gramaticales</option>
                                        <option>Lógica Psicotécnica</option>
                                    </select>
                                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Desarrollo del Enunciado</label>
                                <textarea
                                    rows={3}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm text-sm font-medium resize-none text-slate-900 placeholder:text-slate-400 transition-shadow"
                                    placeholder="Ej: Define el formato correcto para establecer una cláusula condicional compuesta por tres ejes..."
                                ></textarea>
                            </div>

                            <div className="space-y-3">
                                <label className="flex items-center justify-between text-xs font-black text-slate-500 uppercase tracking-widest mb-2">
                                    Cuadro de Respuestas
                                    <span className="text-[9px] bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full border border-slate-200">MARCA LA CORRECTA</span>
                                </label>
                                {['A', 'B', 'C', 'D'].map((opt, idx) => (
                                    <label key={opt} className="flex gap-3 items-center group/opt cursor-pointer relative">
                                        <input type="radio" name="resKey" value={opt} className="peer sr-only" defaultChecked={idx === 1} />
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 font-black shrink-0 transition-colors peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary shadow-sm">
                                            {opt}
                                        </div>
                                        <input
                                            type="text"
                                            placeholder={`Opcion del texto ${opt}`}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary hover:border-slate-300 transition-colors font-medium text-slate-700"
                                        />
                                        {/* Tick mark visible only when selected */}
                                        <div className="absolute left-[30px] -bottom-[5px] bg-white rounded-full p-0.5 shadow-sm opacity-0 peer-checked:opacity-100 transition-opacity">
                                            <Check className="w-3 h-3 text-primary" />
                                        </div>
                                    </label>
                                ))}
                            </div>

                            <div className="pt-2">
                                <label className="block text-xs font-black text-amber-600 uppercase tracking-widest mb-2">Feedback al Alumno / Explicación del fallo</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-amber-50/50 border border-amber-200/60 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-amber-50 shadow-sm text-sm font-medium resize-none text-slate-800 placeholder:text-amber-700/40 transition-shadow"
                                    placeholder="Justifica aquí el error para que el alumno aprenda el patrón y no vuelva a cometer este fallo en el futuro..."
                                ></textarea>
                            </div>

                            <button className="w-full bg-primary hover:bg-indigo-600 text-white py-4 px-6 rounded-2xl font-black transition-all shadow-xl shadow-primary/20 hover:shadow-2xl hover:-translate-y-0.5 mt-4 group/btn overflow-hidden relative">
                                <span className="relative z-10">Ingresar a la Base de Datos</span>
                                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                            </button>
                        </form>
                    </div>

                </div>

            </main>
        </div>
    );
}

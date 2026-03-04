"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle, Database, LayoutDashboard, PlusCircle, Settings, Settings2, Users, LogOut, ChevronDown, Trash2, FileText, Fingerprint, LayoutList, Check, Link as LinkIcon, Search } from "lucide-react";

// Utilizamos la estructura parecida a la app real
interface PreguntaProfesor {
    id: string;
    pregunta: string;
    categoria: string;
    opciones: string[];
    correctaIndex: number; // 0, 1, 2 o 3
    explicacion: string;
    fecha: string;
}

const preguntasIniciales: PreguntaProfesor[] = [
    {
        id: "Q1001",
        pregunta: "Which sentence is grammatically correct?",
        categoria: "Inglés Nivel C1",
        opciones: ["She don't like playing tennis.", "She doesn't likes playing tennis.", "She doesn't like playing tennis.", "She not likes playing tennis."],
        correctaIndex: 2,
        explicacion: "En negativo para 3ª persona se usa doesn't + verbo en infinitivo.",
        fecha: "Hoy"
    },
    {
        id: "Q1002",
        pregunta: "Selecciona la palabra correctamente escrita:",
        categoria: "Ortografía Avanzada",
        opciones: ["Exhuberante", "Exuberante", "Eshuberante", "Exhuverante"],
        correctaIndex: 1,
        explicacion: "Exuberante nunca lleva H intercalada.",
        fecha: "Ayer"
    },
    {
        id: "Q1003",
        pregunta: "Continúa la serie numérica: 5, 10, 20, 40, ...",
        categoria: "Lógica Psicotécnica",
        opciones: ["50", "60", "70", "80"],
        correctaIndex: 3,
        explicacion: "Progresión multiplicando por 2 en cada paso.",
        fecha: "Hace 2d"
    }
];

export default function PanelProfesor() {
    const [preguntas, setPreguntas] = useState<PreguntaProfesor[]>(preguntasIniciales);
    const [categoriaFiltro, setCategoriaFiltro] = useState<string>("Todas las categorías");
    const [busqueda, setBusqueda] = useState<string>("");
    const [activeTab, setActiveTab] = useState<string>("database");

    // Estado del formulario
    const [nuevaCategoria, setNuevaCategoria] = useState("Inglés Nivel C1");
    const [nuevaPregunta, setNuevaPregunta] = useState("");
    const [opcionA, setOpcionA] = useState("");
    const [opcionB, setOpcionB] = useState("");
    const [opcionC, setOpcionC] = useState("");
    const [opcionD, setOpcionD] = useState("");
    const [nuevaCorrecta, setNuevaCorrecta] = useState<number>(0);
    const [nuevaExplicacion, setNuevaExplicacion] = useState("");

    // Cargar desde localStorage si es que hubieran
    useEffect(() => {
        const guardadas = localStorage.getItem("preguntas_profesor");
        if (guardadas) {
            setPreguntas(JSON.parse(guardadas));
        }
    }, []);

    // Guardar en localStorage al cambiar
    useEffect(() => {
        localStorage.setItem("preguntas_profesor", JSON.stringify(preguntas));
    }, [preguntas]);

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();

        // Validación básica
        if (!nuevaPregunta || !opcionA || !opcionB || !opcionC || !opcionD || !nuevaExplicacion) {
            alert("Por favor, rellena todos los campos antes de guardar.");
            return;
        }

        const nueva: PreguntaProfesor = {
            id: `Q${1000 + preguntas.length + 1}`,
            pregunta: nuevaPregunta,
            categoria: nuevaCategoria,
            opciones: [opcionA, opcionB, opcionC, opcionD],
            correctaIndex: nuevaCorrecta,
            explicacion: nuevaExplicacion,
            fecha: "Recién añadido"
        };

        setPreguntas([nueva, ...preguntas]);

        // Reset formulario
        setNuevaPregunta("");
        setOpcionA("");
        setOpcionB("");
        setOpcionC("");
        setOpcionD("");
        setNuevaExplicacion("");
        setNuevaCorrecta(0);

        alert("¡Pregunta guardada exitosamente en la base de datos!");
    };

    const handleDelete = (id: string) => {
        if (confirm("¿Estás seguro de que deseas eliminar esta pregunta del repositorio?")) {
            setPreguntas(preguntas.filter((p) => p.id !== id));
        }
    };

    const getLetraCorrecta = (index: number) => {
        return String.fromCharCode(65 + index); // 0 -> A, 1 -> B, etc.
    };

    const getIconoCategoria = (cat: string) => {
        if (cat.includes("Inglés")) return <Settings2 className="w-3 h-3 text-blue-500" />;
        if (cat.includes("Ortografía")) return <Fingerprint className="w-3 h-3 text-indigo-500" />;
        if (cat.includes("Gramatical")) return <FileText className="w-3 h-3 text-amber-500" />;
        return <LayoutList className="w-3 h-3 text-emerald-500" />;
    };

    // Filtrado final
    const preguntasFiltradas = preguntas.filter(p => {
        const matchCat = categoriaFiltro === "Todas las categorías" || p.categoria === categoriaFiltro;
        const matchBusqueda = p.pregunta.toLowerCase().includes(busqueda.toLowerCase());
        return matchCat && matchBusqueda;
    });

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
                    <button onClick={() => setActiveTab('database')} className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold transition-all relative overflow-hidden group ${activeTab === 'database' ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
                        <Database className="w-5 h-5 relative z-10" />
                        <span className="relative z-10">Base de Datos</span>
                        {activeTab === 'database' && <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>}
                    </button>
                    <button onClick={() => setActiveTab('alumnado')} className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold transition-all group ${activeTab === 'alumnado' ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
                        <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>Alumnado</span>
                        <span className="ml-auto bg-white/10 text-white text-[10px] px-2 py-0.5 rounded-full">42</span>
                    </button>
                    <button onClick={() => setActiveTab('analitica')} className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold transition-all group ${activeTab === 'analitica' ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
                        <LayoutDashboard className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>Analítica</span>
                    </button>

                    <p className="px-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-8 mb-4">Sistema</p>
                    <button onClick={() => setActiveTab('config')} className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold transition-all group ${activeTab === 'config' ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
                        <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                        <span>Configuración</span>
                    </button>
                </nav>

                <div className="p-6">
                    <Link href="/" className="flex items-center justify-between px-4 py-4 text-slate-400 hover:text-white bg-white/5 hover:bg-rose-500 hover:shadow-lg hover:shadow-rose-500/20 rounded-2xl font-bold transition-all group border border-white/5 hover:border-transparent">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-700 group-hover:border-rose-300 flex items-center justify-center text-xs font-bold shrink-0">JP</div>
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

                {activeTab === 'database' ? (
                    <>
                        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6 relative z-10">
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

                        <div className="grid xl:grid-cols-5 gap-8 items-start relative z-10">

                            {/* Table List */}
                            <div className="xl:col-span-3 bg-white rounded-[2rem] shadow-sm border border-slate-200/60 overflow-hidden flex flex-col relative group h-full">
                                <div className="p-6 bg-white border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 z-20">
                                    <h2 className="font-black text-slate-900 text-lg flex items-center gap-2 shrink-0">
                                        Inventario
                                        <span className="bg-slate-100 text-slate-500 px-2.5 py-1 rounded-lg text-xs tracking-wider">{preguntas.length} REGISTROS</span>
                                    </h2>
                                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                                        <div className="relative w-full sm:w-48">
                                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <input
                                                type="text"
                                                placeholder="Buscar enunciado..."
                                                value={busqueda}
                                                onChange={(e) => setBusqueda(e.target.value)}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm font-bold text-slate-600 text-sm transition-colors"
                                            />
                                        </div>
                                        <div className="relative w-full sm:w-auto">
                                            <select
                                                value={categoriaFiltro}
                                                onChange={(e) => setCategoriaFiltro(e.target.value)}
                                                className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm font-bold text-slate-600 text-sm cursor-pointer hover:bg-slate-100 transition-colors"
                                            >
                                                <option>Todas las categorías</option>
                                                <option>Inglés Nivel C1</option>
                                                <option>Ortografía Avanzada</option>
                                                <option>Bases Gramaticales</option>
                                                <option>Lógica Psicotécnica</option>
                                            </select>
                                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse min-w-[600px]">
                                        <thead>
                                            <tr className="bg-slate-50/50 text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-slate-100">
                                                <th className="px-6 py-4">Ref. ID</th>
                                                <th className="px-6 py-4">Enunciado / Pregunta</th>
                                                <th className="px-6 py-4">Clasificación</th>
                                                <th className="px-6 py-4 text-center">Clave</th>
                                                <th className="px-6 py-4 text-right">Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {preguntasFiltradas.length > 0 ? preguntasFiltradas.map((q) => (
                                                <tr key={q.id} className="hover:bg-slate-50/80 transition-colors group/row">
                                                    <td className="px-6 py-5 font-bold text-slate-400 text-xs">
                                                        #{q.id}
                                                    </td>
                                                    <td className="px-6 py-5 text-slate-900 font-bold max-w-[220px] 2xl:max-w-[300px] truncate text-sm" title={q.pregunta}>
                                                        {q.pregunta}
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border border-slate-200 shadow-sm whitespace-nowrap">
                                                            {getIconoCategoria(q.categoria)}
                                                            <span className="truncate max-w-[80px] sm:max-w-none">{q.categoria}</span>
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-5 text-center">
                                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 text-xs font-black shadow-sm relative overflow-hidden group-hover/row:scale-110 transition-transform">
                                                            {getLetraCorrecta(q.correctaIndex)}
                                                            <div className="absolute inset-0 bg-emerald-100 opacity-0 group-hover/row:opacity-20 transition-opacity"></div>
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-5 text-right flex justify-end">
                                                        <button
                                                            onClick={() => handleDelete(q.id)}
                                                            className="text-slate-400 hover:text-rose-600 bg-white hover:bg-rose-50 p-2 rounded-xl transition-colors border border-transparent hover:border-rose-200 shadow-none hover:shadow-sm"
                                                            title="Eliminar pregunta"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            )) : (
                                                <tr>
                                                    <td colSpan={5} className="py-12 text-center text-slate-400 font-bold">
                                                        No se encontraron preguntas bajo este filtro.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                {preguntasFiltradas.length > 0 && (
                                    <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-center sticky bottom-0 mt-auto">
                                        <button className="text-sm font-bold text-primary hover:text-indigo-700 py-2 px-4 rounded-xl hover:bg-primary/5 transition-colors">
                                            Cargar más registros de la DB
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Formulario Interactivo */}
                            <div className="xl:col-span-2 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-200/60 overflow-hidden sticky top-8 relative group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-[40px] pointer-events-none -z-10 group-hover:bg-indigo-100 transition-colors duration-1000"></div>

                                <div className="p-8 border-b border-slate-100">
                                    <h2 className="font-black text-slate-900 text-2xl tracking-tight">Formulario de Alta</h2>
                                    <p className="text-sm text-slate-500 font-medium mt-1">Inserta nuevas preguntas al algoritmo.</p>
                                </div>

                                <form className="p-8 space-y-6" onSubmit={handleCreate}>
                                    <div>
                                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Familia / Categoría</label>
                                        <div className="relative">
                                            <select
                                                required
                                                value={nuevaCategoria}
                                                onChange={(e) => setNuevaCategoria(e.target.value)}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 pr-10 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm text-sm font-bold text-slate-700 appearance-none cursor-pointer"
                                            >
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
                                            required
                                            rows={3}
                                            value={nuevaPregunta}
                                            onChange={(e) => setNuevaPregunta(e.target.value)}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm text-sm font-medium resize-none text-slate-900 placeholder:text-slate-400 transition-shadow"
                                            placeholder="Ej: Define el formato correcto para establecer una cláusula condicional compuesta..."
                                        ></textarea>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="flex items-center justify-between text-xs font-black text-slate-500 uppercase tracking-widest mb-2">
                                            Cuadro de Respuestas
                                            <span className="text-[9px] bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full border border-slate-200 shadow-sm">MARCA LA CORRECTA</span>
                                        </label>

                                        {/* Opciones A B C D */}
                                        {[
                                            { id: 0, val: opcionA, set: setOpcionA },
                                            { id: 1, val: opcionB, set: setOpcionB },
                                            { id: 2, val: opcionC, set: setOpcionC },
                                            { id: 3, val: opcionD, set: setOpcionD },
                                        ].map((opt) => (
                                            <label key={opt.id} className="flex gap-3 items-center group/opt cursor-pointer relative">
                                                <input
                                                    type="radio"
                                                    name="resKey"
                                                    className="peer sr-only"
                                                    checked={nuevaCorrecta === opt.id}
                                                    onChange={() => setNuevaCorrecta(opt.id)}
                                                />
                                                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 font-black shrink-0 transition-colors peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary shadow-sm">
                                                    {String.fromCharCode(65 + opt.id)}
                                                </div>
                                                <input
                                                    type="text"
                                                    required
                                                    value={opt.val}
                                                    onChange={(e) => opt.set(e.target.value)}
                                                    placeholder={`Opción de respuesta ${String.fromCharCode(65 + opt.id)}`}
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary hover:border-slate-300 transition-colors font-medium text-slate-700"
                                                />
                                                <div className="absolute left-[30px] -bottom-[5px] bg-white rounded-full p-0.5 shadow-sm opacity-0 peer-checked:opacity-100 transition-opacity">
                                                    <Check className="w-3 h-3 text-primary" />
                                                </div>
                                            </label>
                                        ))}
                                    </div>

                                    <div className="pt-2">
                                        <label className="block text-xs font-black text-amber-600 uppercase tracking-widest mb-2">Explicación para el Alumno</label>
                                        <textarea
                                            required
                                            rows={3}
                                            value={nuevaExplicacion}
                                            onChange={(e) => setNuevaExplicacion(e.target.value)}
                                            className="w-full bg-amber-50/50 border border-amber-200/60 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-amber-50 shadow-sm text-sm font-medium resize-none text-slate-800 placeholder:text-amber-700/40 transition-shadow"
                                            placeholder="Justifica aquí el error para que el alumno aprenda y no vuelva a cometer este fallo..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-primary hover:bg-indigo-600 text-white py-4 px-6 rounded-2xl font-black transition-all shadow-xl shadow-primary/20 hover:shadow-2xl hover:-translate-y-0.5 mt-4 group/btn overflow-hidden relative">
                                        <span className="relative z-10">Ingresar a la Base de Datos</span>
                                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                                    </button>
                                </form>
                            </div>

                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center relative z-10 animate-in fade-in zoom-in duration-500">
                        <div className="bg-slate-200/50 p-8 rounded-full mb-6">
                            {activeTab === 'alumnado' && <Users className="w-16 h-16 text-slate-400" />}
                            {activeTab === 'analitica' && <LayoutDashboard className="w-16 h-16 text-slate-400" />}
                            {activeTab === 'config' && <Settings className="w-16 h-16 text-slate-400" />}
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Sección en construcción</h2>
                        <p className="text-slate-500 font-medium max-w-md mx-auto text-lg pt-2">Esta es una vista del prototipo. La sección de <span className="font-bold text-slate-700">{activeTab === 'alumnado' ? 'Alumnado' : activeTab === 'analitica' ? 'Analítica' : 'Configuración'}</span> estará disponible una vez conectemos el dashboard real al modelo Backend.</p>
                    </div>
                )}
            </main>
        </div>
    );
}

import Link from "next/link";
import { ArrowLeft, CheckCircle, Fingerprint, LayoutList, Play, Settings2, SlidersHorizontal, Timer, FileText } from "lucide-react";

export default function ConfigurarTest() {
    return (
        <div className="min-h-[100dvh] bg-slate-50 flex flex-col items-center justify-center p-4 selection:bg-primary/20 relative">
            <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

            <div className="w-full max-w-3xl">
                <Link href="/dashboard" className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-8 font-bold gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm transition-all hover:pr-5 hover:-translate-y-0.5">
                    <ArrowLeft className="w-5 h-5" /> Volver al control
                </Link>

                <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">
                    <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-primary via-indigo-500 to-primary/50 top-0"></div>

                    <div className="bg-slate-950 p-10 text-white relative overflow-hidden">
                        <SlidersHorizontal className="absolute -right-8 -bottom-8 w-40 h-40 text-white/[0.03] rotate-12" />
                        <h1 className="text-4xl font-black mb-3 tracking-tight relative z-10">Parámetros del Test</h1>
                        <p className="text-slate-400 font-medium text-lg relative z-10">Ajusta tu próxima sesión de estudio según tus necesidades.</p>
                    </div>

                    <form action="/test" className="p-10 space-y-10">

                        <div className="space-y-6">
                            <label className="flex items-center gap-3 text-xl font-black text-slate-900 tracking-tight">
                                <div className="bg-primary/10 p-2 rounded-xl text-primary">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                Selecciona la Categoría
                            </label>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    { id: 'ingles', name: 'Inglés C1', icon: Settings2 },
                                    { id: 'ortografia', name: 'Ortografía', icon: Fingerprint },
                                    { id: 'gramatica', name: 'Gramática', icon: FileText },
                                    { id: 'psico', name: 'Psicotécnicos', icon: LayoutList }
                                ].map((cat) => (
                                    <label key={cat.id} className="cursor-pointer group relative">
                                        <input type="radio" name="categoria" value={cat.id} className="peer sr-only" defaultChecked={cat.id === 'ingles'} />
                                        <div className="bg-slate-50 border-2 border-slate-100 text-center p-6 rounded-2xl peer-checked:border-primary peer-checked:bg-primary/[0.03] peer-checked:text-primary transition-all shadow-sm hover:border-slate-300 relative overflow-hidden flex flex-col items-center gap-3 h-full">
                                            <cat.icon className="w-8 h-8 text-slate-400 peer-checked:text-primary transition-colors group-hover:scale-110 duration-300" />
                                            <span className="font-bold text-slate-600 peer-checked:text-slate-900">{cat.name}</span>
                                            <div className="absolute right-3 top-3 w-4 h-4 rounded-full border-2 border-slate-300 peer-checked:border-primary flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
                                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                            </div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <label className="flex items-center gap-3 text-xl font-black text-slate-900 tracking-tight">
                                <div className="bg-indigo-100 p-2 rounded-xl text-indigo-600">
                                    <LayoutList className="w-6 h-6" />
                                </div>
                                Volumen de Preguntas
                            </label>
                            <div className="grid grid-cols-3 gap-4">
                                {[10, 20, 30].map((num) => (
                                    <label key={num} className="cursor-pointer relative group">
                                        <input type="radio" name="preguntas" value={num} className="peer sr-only" defaultChecked={num === 10} />
                                        <div className="bg-white border-2 border-slate-100 text-center py-5 rounded-2xl peer-checked:border-primary peer-checked:bg-primary/[0.03] transition-all font-black text-2xl text-slate-400 peer-checked:text-primary shadow-sm group-hover:border-slate-300 group-hover:shadow-md relative overflow-hidden">
                                            <span className="relative z-10">{num}</span>
                                            <span className="block text-xs uppercase tracking-widest mt-1 text-slate-400 peer-checked:text-slate-600 font-bold relative z-10">Items</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <label className="flex items-center gap-3 text-xl font-black text-slate-900 tracking-tight">
                                <div className="bg-amber-100 p-2 rounded-xl text-amber-600">
                                    <Timer className="w-6 h-6" />
                                </div>
                                Límite de Tiempo
                            </label>
                            <div className="grid grid-cols-3 gap-4">
                                {['Sin límite', '10 min', '20 min'].map((time, idx) => (
                                    <label key={time} className="cursor-pointer relative group">
                                        <input type="radio" name="tiempo" value={time} className="peer sr-only" defaultChecked={idx === 0} />
                                        <div className="bg-white border-2 border-slate-100 text-center py-5 rounded-2xl peer-checked:border-primary peer-checked:bg-primary/[0.03] transition-all font-black text-lg text-slate-500 peer-checked:text-primary shadow-sm group-hover:border-slate-300 group-hover:shadow-md relative overflow-hidden">
                                            {time}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8 border-t border-slate-100">
                            <button type="submit" className="w-full bg-slate-900 hover:bg-black text-white text-xl font-bold py-5 px-6 rounded-2xl transition-all shadow-xl shadow-slate-900/20 hover:shadow-2xl flex justify-center items-center gap-3 group relative overflow-hidden">
                                <span className="relative z-10 flex items-center gap-3">Empezar el Desafío <Play className="w-5 h-5 fill-white" /></span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

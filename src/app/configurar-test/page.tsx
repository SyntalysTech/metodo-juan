import Link from "next/link";
import { ArrowLeft, CheckCircle, Settings, SlidersHorizontal, Timer } from "lucide-react";

export default function ConfigurarTest() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-2xl">

                <Link href="/dashboard" className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-6 font-medium gap-2">
                    <ArrowLeft className="w-4 h-4" /> Volver al dashboard
                </Link>

                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">

                    <div className="bg-slate-900 p-8 text-white relative">
                        <Settings className="absolute right-8 top-8 w-24 h-24 text-white/5" />
                        <h1 className="text-3xl font-bold mb-2">Configurar Test</h1>
                        <p className="text-slate-300">Personaliza tu sesión de estudio según tus necesidades.</p>
                    </div>

                    <form action="/test" className="p-8 space-y-8">

                        <div className="space-y-4">
                            <label className="flex items-center gap-2 text-lg font-bold text-slate-900">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                Categoría
                            </label>
                            <select
                                className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-lg rounded-xl focus:ring-primary focus:border-primary block p-4 shadow-sm"
                                defaultValue="ingles"
                            >
                                <option value="ingles">🇬🇧 Inglés</option>
                                <option value="ortografia">✍️ Ortografía</option>
                                <option value="gramatica">📖 Gramática</option>
                                <option value="psicotecnico">🧩 Psicotécnicos</option>
                            </select>
                        </div>

                        <div className="space-y-4">
                            <label className="flex items-center gap-2 text-lg font-bold text-slate-900">
                                <SlidersHorizontal className="w-5 h-5 text-primary" />
                                Número de preguntas
                            </label>
                            <div className="grid grid-cols-3 gap-4">
                                {[10, 20, 50].map((num) => (
                                    <label key={num} className="cursor-pointer relative">
                                        <input type="radio" name="preguntas" value={num} className="peer sr-only" defaultChecked={num === 10} />
                                        <div className="bg-slate-50 border-2 border-slate-200 text-center py-4 rounded-xl peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all font-bold text-slate-600 shadow-sm hover:border-slate-300">
                                            {num}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="flex items-center gap-2 text-lg font-bold text-slate-900">
                                <Timer className="w-5 h-5 text-primary" />
                                Límite de tiempo
                            </label>
                            <div className="grid grid-cols-3 gap-4">
                                {['Sin límite', '10 min', '20 min'].map((time) => (
                                    <label key={time} className="cursor-pointer relative">
                                        <input type="radio" name="tiempo" value={time} className="peer sr-only" defaultChecked={time === 'Sin límite'} />
                                        <div className="bg-slate-50 border-2 border-slate-200 text-center py-4 rounded-xl peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all font-bold text-slate-600 shadow-sm hover:border-slate-300">
                                            {time}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-100">
                            <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white text-lg font-bold py-4 px-6 rounded-xl transition-colors shadow-lg shadow-primary/30 flex justify-center items-center gap-2">
                                Empezar test ahora <ArrowLeft className="w-5 h-5 rotate-180" />
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

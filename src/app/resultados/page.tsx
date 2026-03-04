import Link from "next/link";
import { ArrowRight, CheckCircle, RotateCcw, Target, XCircle } from "lucide-react";

export default function ResultadosTest() {
    const stats = {
        aciertos: 35,
        errores: 5,
        blanco: 10,
        nota: 6.25,
    };

    const fallos = [
        {
            pregunta: "Which sentence is grammatically correct?",
            tuRespuesta: "She don't like playing tennis.",
            respuestaCorrecta: "She doesn't like playing tennis.",
            explicacion: "En inglés, para la tercera persona del singular (he, she, it) se utiliza el auxiliar 'doesn't' en oraciones negativas, seguido del verbo en infinitivo sin 's'. Por lo tanto, 'likes' es incorrecto después de 'doesn't'."
        },
        {
            pregunta: "Selecciona la palabra correctamente escrita:",
            tuRespuesta: "Exhuberante",
            respuestaCorrecta: "Exuberante",
            explicacion: "La palabra 'exuberante' se escribe sin 'h' intercalada. Proviene del latín 'exuberans, -antis'. Muchas personas confunden su escritura debido a la pronunciación, pero la RAE es clara al respecto."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-3xl">

                {/* Resultado Summary */}
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 mb-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mb-6 border-4 border-white shadow-sm ring-1 ring-slate-100">
                        <Target className="w-10 h-10" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-2">¡Test completado!</h1>
                    <p className="text-slate-500 mb-8 max-w-md mx-auto">Has completado tu sesión. Revisa tus fallos para no volver a cometerlos en el examen real.</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <span className="block text-slate-500 text-sm font-medium">Aciertos</span>
                            <span className="block text-3xl font-bold text-emerald-500">{stats.aciertos}</span>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <span className="block text-slate-500 text-sm font-medium">Errores</span>
                            <span className="block text-3xl font-bold text-rose-500">{stats.errores}</span>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <span className="block text-slate-500 text-sm font-medium">En blanco</span>
                            <span className="block text-3xl font-bold text-slate-400">{stats.blanco}</span>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 relative overflow-hidden">
                            <span className="block text-slate-500 text-sm font-medium relative z-10">Nota final</span>
                            <span className="block text-3xl font-bold text-primary relative z-10">{stats.nota.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/configurar-test" className="px-6 py-3 bg-white text-slate-700 font-bold border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2">
                            <RotateCcw className="w-5 h-5" /> Repetir test
                        </Link>
                        <Link href="/dashboard" className="px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                            Volver al dashboard <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Fallos Review */}
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <XCircle className="w-6 h-6 text-rose-500" />
                    Revisión de errores
                </h2>

                <div className="space-y-6">
                    {fallos.map((fallo, i) => (
                        <div key={i} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="p-6 border-b border-slate-100">
                                <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-slate-200">
                                    Pregunta {i + 1}
                                </span>
                                <p className="text-xl font-bold text-slate-900 leading-snug">{fallo.pregunta}</p>
                            </div>
                            <div className="p-6 bg-slate-50 space-y-4">

                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0 border border-rose-200 mt-1">
                                        <XCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-bold text-slate-500 uppercase tracking-wide">Tu respuesta</span>
                                        <span className="block text-lg font-medium text-slate-700 line-through opacity-80">{fallo.tuRespuesta}</span>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-200 mt-1">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-bold text-slate-500 uppercase tracking-wide">Respuesta correcta</span>
                                        <span className="block text-lg font-medium text-slate-900">{fallo.respuestaCorrecta}</span>
                                    </div>
                                </div>

                                <div className="mt-6 p-5 bg-indigo-50 border border-indigo-100 rounded-2xl relative">
                                    <span className="absolute -top-3 left-6 bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full">
                                        Explicación del profesor
                                    </span>
                                    <p className="text-slate-700 font-medium leading-relaxed pt-2">
                                        {fallo.explicacion}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

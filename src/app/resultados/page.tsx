"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, RotateCcw, Target, XCircle, BarChart3, Info } from "lucide-react";

interface Fallo {
    pregunta: string;
    tuRespuesta: string;
    respuestaCorrecta: string;
    explicacion: string;
}

interface Stats {
    aciertos: number;
    errores: number;
    blanco: number;
    nota: number;
    fallos: Fallo[];
}

export default function ResultadosTest() {
    const [stats, setStats] = useState<Stats | null>(null);

    useEffect(() => {
        const data = sessionStorage.getItem("resultadosTest");
        if (data) {
            setStats(JSON.parse(data));
        } else {
            // Fallback por si entran directo por URL
            setStats({
                aciertos: 0, errores: 0, blanco: 0, nota: 0, fallos: []
            });
        }
    }, []);

    if (!stats) {
        return <div className="min-h-screen flex items-center justify-center text-slate-400 font-bold">Generando analíticas...</div>;
    }

    const isAprobado = stats.nota >= 5;

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 relative font-sans selection:bg-primary/20">
            <div className="absolute top-[0%] left-[20%] w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

            <div className="w-full max-w-4xl">

                {/* Resultado Summary */}
                <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-10 mb-10 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50/50 to-transparent pointer-events-none z-0"></div>

                    <div className={`inline-flex items-center justify-center w-24 h-24 rounded-[2rem] text-white mb-6 border-4 border-white shadow-lg relative z-10 rotate-12 group-hover:rotate-0 transition-transform duration-500 ${isAprobado ? 'bg-gradient-to-tr from-emerald-500 to-emerald-400 shadow-emerald-500/20' : 'bg-gradient-to-tr from-rose-500 to-rose-400 shadow-rose-500/20'}`}>
                        <Target className="w-12 h-12" />
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 mb-3 tracking-tight relative z-10">
                        {isAprobado ? '¡Test superado!' : 'No alcanzas el corte'}
                    </h1>
                    <p className="text-slate-500 font-medium mb-10 max-w-xl mx-auto text-lg relative z-10">
                        {isAprobado
                            ? 'Has demostrado un gran dominio. Sigue así para asegurar tu plaza.'
                            : 'Revisa cuidadosamente tus errores porque hay margen de mejora notable.'}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                        <div className="bg-slate-50/80 p-6 rounded-3xl border border-slate-100 hover:scale-105 transition-transform">
                            <span className="block text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Aciertos</span>
                            <span className="block text-4xl font-black text-emerald-500 drop-shadow-sm">{stats.aciertos}</span>
                        </div>
                        <div className="bg-slate-50/80 p-6 rounded-3xl border border-slate-100 hover:scale-105 transition-transform">
                            <span className="block text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Errores</span>
                            <span className="block text-4xl font-black text-rose-500 drop-shadow-sm">{stats.errores}</span>
                        </div>
                        <div className="bg-slate-50/80 p-6 rounded-3xl border border-slate-100 hover:scale-105 transition-transform">
                            <span className="block text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Blanco</span>
                            <span className="block text-4xl font-black text-slate-400 drop-shadow-sm">{stats.blanco}</span>
                        </div>
                        <div className={`p-6 rounded-3xl border ${isAprobado ? 'border-emerald-200 bg-emerald-50/50' : 'border-rose-200 bg-rose-50/50'} relative overflow-hidden hover:scale-105 transition-transform`}>
                            <span className={`block text-xs font-black uppercase tracking-widest relative z-10 mb-2 ${isAprobado ? 'text-emerald-700' : 'text-rose-700'}`}>Nota Final / 10</span>
                            <span className={`block text-4xl font-black relative z-10 ${isAprobado ? 'text-emerald-600' : 'text-rose-600'}`}>{stats.nota.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <Link href="/configurar-test" className="px-8 py-4 bg-white text-slate-700 font-bold border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-2xl transition-all shadow-sm flex items-center justify-center gap-3">
                            <RotateCcw className="w-5 h-5" /> Iniciar Sesión Nueva
                        </Link>
                        <Link href="/dashboard" className="px-8 py-4 bg-slate-900 hover:bg-black text-white font-bold rounded-2xl transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3 group">
                            Volver al Panel <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Fallos Review */}
                {stats.fallos.length > 0 ? (
                    <>
                        <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3 tracking-tight">
                            <div className="bg-rose-100 p-2 text-rose-600 rounded-xl">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            Análisis de tus debilidades
                        </h2>

                        <div className="space-y-6">
                            {stats.fallos.map((fallo, i) => (
                                <div key={i} className="bg-white rounded-[2rem] shadow-sm border border-slate-200/60 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="p-8 border-b border-slate-100 bg-gradient-to-b from-slate-50/50 to-white">
                                        <span className="inline-block bg-white text-slate-500 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-5 border border-slate-200 shadow-sm">
                                            Revisión nº {i + 1}
                                        </span>
                                        <p className="text-2xl font-black text-slate-900 leading-snug tracking-tight">{fallo.pregunta}</p>
                                    </div>
                                    <div className="p-8 space-y-6">

                                        <div className="flex gap-5 items-start bg-rose-50/50 p-5 rounded-2xl border border-rose-100/50">
                                            <div className="w-10 h-10 rounded-[1rem] bg-white flex items-center justify-center text-rose-500 shrink-0 border border-rose-200 shadow-sm shadow-rose-200/50 mt-1 rotate-6">
                                                <XCircle className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <span className="block text-xs font-black text-rose-400/80 uppercase tracking-widest mb-1.5">Tu respuesta en el examen</span>
                                                <span className="block text-xl font-bold text-slate-600 line-through opacity-80">{fallo.tuRespuesta}</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-5 items-start bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100/50">
                                            <div className="w-10 h-10 rounded-[1rem] bg-white flex items-center justify-center text-emerald-500 shrink-0 border border-emerald-200 shadow-sm shadow-emerald-200/50 mt-1 -rotate-6">
                                                <CheckCircle className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <span className="block text-xs font-black text-emerald-600/60 uppercase tracking-widest mb-1.5">Respuesta oficial correcta</span>
                                                <span className="block text-xl font-black text-slate-900">{fallo.respuestaCorrecta}</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-indigo-100 rounded-2xl relative shadow-inner">
                                            <div className="absolute -top-4 left-6 bg-white border border-indigo-200 text-indigo-700 text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl shadow-sm flex items-center gap-2">
                                                <Info className="w-4 h-4" /> Desglose del Profesor
                                            </div>
                                            <p className="text-slate-700 font-medium leading-relaxed pt-4 text-lg">
                                                {fallo.explicacion}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="bg-white rounded-[2rem] p-10 text-center border border-slate-200 shadow-sm">
                        <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-10 h-10" />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">¡Examen impecable!</h2>
                        <p className="text-slate-500 font-medium mt-2">No has cometido ningún error en esta sesión. Excelente trabajo.</p>
                    </div>
                )}

            </div>
        </div>
    );
}

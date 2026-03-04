"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Clock, LogOut, SkipForward, X } from "lucide-react";
import { mockQuestions, Question } from "@/lib/mockQuestions";

// El componente principal del test envuelto en Suspense por el uso de useSearchParams
function TestActive() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [respuestas, setRespuestas] = useState<Record<number, number>>({});
    const [preguntasTest, setPreguntasTest] = useState<Question[]>([]);

    useEffect(() => {
        // Al montar, extraemos parámetros de la URL y filtramos las preguntas
        const numPreguntas = Number(searchParams.get("preguntas") || "10");
        // Seleccionamos un máximo del número pedido mezclando las mocks
        // Para el prototipo, simplemente recortamos el array original de mockQuestions
        const preguntasAleatorias = [...mockQuestions].sort(() => 0.5 - Math.random()).slice(0, numPreguntas);
        setPreguntasTest(preguntasAleatorias);
    }, [searchParams]);

    if (preguntasTest.length === 0) {
        return <div className="min-h-screen flex items-center justify-center font-bold text-slate-400">Cargando test...</div>;
    }

    const totalPreguntas = preguntasTest.length;
    const progreso = ((currentQuestion) / totalPreguntas) * 100;

    const handleSeleccionarOpcion = (index: number) => {
        setRespuestas(prev => ({ ...prev, [currentQuestion]: index }));
    };

    const handleSiguiente = () => {
        if (currentQuestion < totalPreguntas - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleFinalizar();
        }
    };

    const handleAnterior = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleFinalizar = () => {
        // Calcular resultados y guardarlos en sessionStorage
        let aciertos = 0;
        let errores = 0;
        let blanco = 0;

        // Guardamos que fallo para la vista de resultados
        const fallos: { pregunta: string; tuRespuesta: string; respuestaCorrecta: string; explicacion: string }[] = [];

        preguntasTest.forEach((q, idx) => {
            const respUsuario = respuestas[idx];
            if (respUsuario === undefined) {
                blanco++;
            } else if (respUsuario === q.respuestaCorrecta) {
                aciertos++;
            } else {
                errores++;
                fallos.push({
                    pregunta: q.pregunta,
                    tuRespuesta: q.opciones[respUsuario],
                    respuestaCorrecta: q.opciones[q.respuestaCorrecta],
                    explicacion: q.explicacion
                });
            }
        });

        const notaBase = (aciertos / totalPreguntas) * 10;
        // Penalización simple para demo: cada error resta 0.1 de la nota máxima 10
        const notaFinal = Math.max(0, notaBase - (errores * (10 / totalPreguntas) * 0.33));

        sessionStorage.setItem("resultadosTest", JSON.stringify({
            aciertos, errores, blanco, nota: notaFinal, fallos
        }));

        router.push("/resultados");
    };

    const currentData = preguntasTest[currentQuestion];
    const seleccionActual = respuestas[currentQuestion];

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-primary/20">
            {/* Test Header */}
            <header className="bg-white border-b border-slate-200/60 sticky top-0 z-10 backdrop-blur-md bg-white/80">
                <div className="w-full h-1.5 bg-slate-100 absolute top-0">
                    <div
                        className="h-full bg-gradient-to-r from-primary to-indigo-500 transition-all duration-500 ease-out"
                        style={{ width: `${progreso}%` }}
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 w-full h-[72px] flex items-center justify-between mt-1">
                    <button onClick={handleFinalizar} className="text-slate-400 hover:text-slate-900 flex items-center gap-2 p-2 group transition-colors" title="Finalizar Test de Golpe">
                        <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                    </button>

                    <div className="flex flex-col items-center">
                        <span className="font-black text-slate-900 tracking-tight text-lg">
                            Pregunta <span className="text-primary">{currentQuestion + 1}</span> de {totalPreguntas}
                        </span>
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">{currentData.categoria}</span>
                    </div>

                    <div className="flex items-center gap-2 text-primary font-black bg-primary/10 px-4 py-2 rounded-xl border border-primary/20 shadow-sm animate-pulse-slow">
                        <Clock className="w-4 h-4" />
                        <span className="tabular-nums">12:45</span>
                    </div>
                </div>
            </header>

            {/* Test Body */}
            <main className="flex-1 w-full max-w-3xl mx-auto p-4 flex flex-col justify-center py-10">
                <div className="bg-white p-8 sm:p-14 rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100/80 relative overflow-hidden group">
                    <div className="absolute top-0 right-[-10%] w-[300px] h-[300px] bg-slate-100/50 rounded-full pointer-events-none -z-10 group-hover:scale-150 transition-transform duration-1000"></div>

                    <h2 className="text-3xl font-black text-slate-900 mb-10 leading-tight tracking-tight relative z-10">
                        {currentData.pregunta}
                    </h2>

                    <div className="space-y-4 relative z-10">
                        {currentData.opciones.map((opcion, i) => {
                            const isActive = seleccionActual === i;
                            return (
                                <label
                                    key={i}
                                    className={`
                    flex items-center p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300
                    ${isActive
                                            ? 'border-primary bg-primary/5 shadow-md shadow-primary/10 translate-x-2'
                                            : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50'}
                  `}
                                >
                                    <div className={`
                    flex items-center justify-center w-8 h-8 rounded-full font-black shadow-sm mr-5 shrink-0 transition-colors
                    ${isActive ? 'bg-primary border-primary text-white' : 'bg-white border-2 border-slate-200 text-slate-400'}
                  `}>
                                        {String.fromCharCode(65 + i)}
                                    </div>
                                    <input
                                        type="radio"
                                        name="respuesta"
                                        className="sr-only"
                                        checked={isActive}
                                        onChange={() => handleSeleccionarOpcion(i)}
                                    />
                                    <span className={`text-lg font-bold leading-snug ${isActive ? 'text-primary' : 'text-slate-600'}`}>
                                        {opcion}
                                    </span>
                                </label>
                            );
                        })}
                    </div>

                </div>
            </main>

            {/* Test Footer */}
            <footer className="bg-white border-t border-slate-200/60 p-6 sticky bottom-0 backdrop-blur-md bg-white/80 z-20">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <button
                        onClick={handleAnterior}
                        disabled={currentQuestion === 0}
                        className={`px-6 py-3.5 rounded-2xl font-black transition-all flex items-center gap-2
              ${currentQuestion === 0
                                ? 'text-slate-300 cursor-not-allowed opacity-50'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm'}
            `}
                    >
                        <ArrowLeft className="w-5 h-5" /> Regresar
                    </button>

                    <button
                        onClick={handleSiguiente}
                        className={`px-8 py-3.5 rounded-2xl font-black transition-all shadow-md flex items-center gap-2 group overflow-hidden relative
              ${seleccionActual === undefined && currentQuestion !== totalPreguntas - 1
                                ? 'bg-slate-100 text-slate-400 pointer-events-none'
                                : 'bg-primary hover:bg-indigo-600 text-white shadow-primary/30 hover:shadow-xl hover:-translate-y-1'
                            }
            `}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            {currentQuestion === totalPreguntas - 1 ? 'Terminar e Ir a Corrección' : 'Continuar Pregunta'}
                            {currentQuestion !== totalPreguntas - 1 && <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />}
                            {currentQuestion === totalPreguntas - 1 && <SkipForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        </span>
                        {seleccionActual !== undefined && (
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        )}
                    </button>
                </div>
            </footer>
        </div>
    );
}

export default function TestPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center font-bold text-slate-500">Cargando motor de test...</div>}>
            <TestActive />
        </Suspense>
    );
}

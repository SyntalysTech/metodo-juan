"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Clock, LogOut, X } from "lucide-react";

const preguntasFicticias = [
    {
        pregunta: "Which sentence is grammatically correct?",
        opciones: [
            "She don't like playing tennis.",
            "She doesn't likes playing tennis.",
            "She doesn't like playing tennis.",
            "She not likes playing tennis."
        ]
    },
    {
        pregunta: "Selecciona la palabra correctamente escrita:",
        opciones: [
            "Exhuberante",
            "Exuberante",
            "Eshuberante",
            "Exuverante"
        ]
    },
    {
        pregunta: "Si todos los ZORROS son ANIMALES y todos los ANIMALES respiran, entonces:",
        opciones: [
            "Algunos zorros no respiran.",
            "Todos los zorros respiran.",
            "Solo los animales respiran.",
            "Ninguna de las anteriores."
        ]
    }
];

export default function TestPage() {
    const router = useRouter();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [respuestas, setRespuestas] = useState<number[]>([]);

    const totalPreguntas = preguntasFicticias.length;
    const progreso = ((currentQuestion) / totalPreguntas) * 100;

    const handleSeleccionarOpcion = (index: number) => {
        const nuevasRespuestas = [...respuestas];
        nuevasRespuestas[currentQuestion] = index;
        setRespuestas(nuevasRespuestas);
    };

    const handleSiguiente = () => {
        if (currentQuestion < totalPreguntas - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            router.push("/resultados");
        }
    };

    const handleAnterior = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const currentData = preguntasFicticias[currentQuestion];
    const seleccionActual = respuestas[currentQuestion];

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Test Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
                {/* Progress bar line */}
                <div className="w-full h-1 bg-slate-100">
                    <div
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: `${progreso}%` }}
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 w-full h-16 flex items-center justify-between">
                    <Link href="/dashboard" className="text-slate-500 hover:text-slate-900 flex items-center gap-2 p-2" title="Salir del test">
                        <X className="w-6 h-6" />
                    </Link>

                    <div className="flex flex-col items-center">
                        <span className="font-bold text-slate-900 tracking-tight">Pregunta {currentQuestion + 1} de {totalPreguntas}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-500 font-medium bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                        <Clock className="w-4 h-4" />
                        <span className="tabular-nums">12:45</span>
                    </div>
                </div>
            </header>

            {/* Test Body */}
            <main className="flex-1 w-full max-w-3xl mx-auto p-4 flex flex-col justify-center py-10">
                <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-lg border border-slate-100">

                    <h2 className="text-2xl font-bold text-slate-900 mb-8 leading-relaxed">
                        {currentData.pregunta}
                    </h2>

                    <div className="space-y-4">
                        {currentData.opciones.map((opcion, i) => (
                            <label
                                key={i}
                                className={`
                  flex items-center p-5 rounded-2xl border-2 cursor-pointer transition-all
                  ${seleccionActual === i
                                        ? 'border-primary bg-primary/5 shadow-sm'
                                        : 'border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100/50'}
                `}
                            >
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-slate-300 font-bold text-slate-500 shadow-sm mr-4 shrink-0">
                                    {String.fromCharCode(65 + i)}
                                </div>
                                <input
                                    type="radio"
                                    name="respuesta"
                                    className="sr-only"
                                    checked={seleccionActual === i}
                                    onChange={() => handleSeleccionarOpcion(i)}
                                />
                                <span className={`text-lg font-medium ${seleccionActual === i ? 'text-primary' : 'text-slate-700'}`}>
                                    {opcion}
                                </span>
                            </label>
                        ))}
                    </div>

                </div>

            </main>

            {/* Test Footer */}
            <footer className="bg-white border-t border-slate-200 p-4 sticky bottom-0">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <button
                        onClick={handleAnterior}
                        disabled={currentQuestion === 0}
                        className={`px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2
              ${currentQuestion === 0
                                ? 'text-slate-300 cursor-not-allowed'
                                : 'text-slate-600 hover:bg-slate-100 border border-slate-200'}
            `}
                    >
                        <ArrowLeft className="w-5 h-5" /> Anterior
                    </button>

                    <button
                        onClick={handleSiguiente}
                        disabled={seleccionActual === undefined && currentQuestion === totalPreguntas - 1}
                        className="px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold transition-colors shadow-sm flex items-center gap-2"
                    >
                        {currentQuestion === totalPreguntas - 1 ? 'Finalizar Test' : 'Siguiente'}
                        {currentQuestion !== totalPreguntas - 1 && <ArrowLeft className="w-5 h-5 rotate-180" />}
                    </button>
                </div>
            </footer>
        </div>
    );
}

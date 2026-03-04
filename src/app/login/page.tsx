import Link from "next/link";
import { ArrowLeft, CheckCircle, Eye, Lock, Mail, ChevronRight, Fingerprint } from "lucide-react";

export default function Login() {
    return (
        <div className="flex min-h-[100dvh] bg-slate-50 items-center justify-center p-4 font-sans selection:bg-primary/20 relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

            <div className="w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl shadow-primary/5 p-10 sm:p-14 border border-slate-100 relative group">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-indigo-500 to-primary/50"></div>

                <Link href="/" className="absolute top-6 left-6 w-10 h-10 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 hover:scale-105 transition-all">
                    <ArrowLeft className="w-5 h-5" />
                </Link>

                <div className="flex flex-col items-center justify-center mb-10 mt-6 relative z-10">
                    <div className="bg-primary text-white p-3 rounded-2xl mb-5 shadow-lg shadow-primary/20 border border-white/50 group-hover:scale-110 transition-transform duration-500">
                        <CheckCircle className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Acceso al Sistema</h1>
                    <p className="text-slate-400 mt-2 text-sm font-bold uppercase tracking-widest">Portal del Alumno</p>
                </div>

                <form className="space-y-6" action="/dashboard">

                    <div className="space-y-2">
                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">Credencial (Email)</label>
                        <div className="relative group/input">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within/input:text-primary transition-colors" />
                            <input
                                type="email"
                                placeholder="alumno@academia.com"
                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm font-medium text-slate-900 bg-slate-50 hover:bg-slate-100 focus:bg-white"
                                required
                                defaultValue="alumno@metodojuan.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">Contraseña Maestra</label>
                            <Link href="#" className="font-bold text-primary hover:text-indigo-600 text-[10px] uppercase tracking-wider">
                                ¿Recuperar clave?
                            </Link>
                        </div>
                        <div className="relative group/input">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within/input:text-primary transition-colors" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full pl-12 pr-12 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm font-medium text-slate-900 bg-slate-50 hover:bg-slate-100 focus:bg-white tracking-widest"
                                required
                                defaultValue="password123"
                            />
                            <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-slate-200 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-sm">
                                <Eye className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm py-2">
                        <label className="flex items-center cursor-pointer group/check">
                            <div className="relative flex items-center justify-center mr-3">
                                <input type="checkbox" className="peer sr-only" defaultChecked />
                                <div className="w-5 h-5 bg-white border-2 border-slate-300 rounded-md peer-checked:bg-primary peer-checked:border-primary transition-colors"></div>
                                <CheckCircle className="w-3.5 h-3.5 text-white absolute opacity-0 peer-checked:opacity-100 transition-opacity" />
                            </div>
                            <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Mantener sesión iniciada</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-slate-900 hover:bg-black text-white font-black py-4 px-6 rounded-2xl transition-all shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group/btn relative overflow-hidden mt-6"
                    >
                        <span className="relative z-10 flex items-center gap-2">Autenticar Entrada <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform border border-white/20 rounded-full" /></span>
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover/btn:opacity-10 transition-opacity"></div>
                    </button>
                </form>

                <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col items-center gap-4">
                    <Link href="/panel-profesor" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-50/50 hover:bg-indigo-100 text-indigo-700 rounded-xl transition-colors font-bold text-xs uppercase tracking-widest border border-indigo-100/50">
                        <Fingerprint className="w-4 h-4" /> Acceso para Profesores (Demo)
                    </Link>
                    <p className="text-center text-xs text-slate-400 font-medium">Conexión encriptada AES-256. Prototipo Modo Demo.</p>
                </div>

            </div>
        </div>
    );
}

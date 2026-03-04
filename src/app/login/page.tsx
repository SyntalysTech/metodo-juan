import Link from "next/link";
import { CheckCircle, Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function Login() {
    return (
        <div className="flex h-screen bg-slate-50 items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">

                <div className="flex flex-col items-center justify-center mb-8">
                    <div className="bg-primary/10 text-primary p-2 rounded-xl mb-4">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">Método Juan</h1>
                    <p className="text-slate-500 mt-2 text-sm">Entrena tus oposiciones</p>
                </div>

                <form className="space-y-6" action="/dashboard">

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Correo electrónico</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                            <input
                                type="email"
                                placeholder="alumno@ejemplo.com"
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                required
                                defaultValue="alumno@metodojuan.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Contraseña</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                required
                                defaultValue="password123"
                            />
                            <button type="button" className="absolute right-3 top-3 text-slate-400 hover:text-slate-600">
                                <Eye className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center">
                            <input type="checkbox" className="rounded border-slate-300 text-primary w-4 h-4 mr-2" defaultChecked />
                            <span className="text-slate-600">Recordarme</span>
                        </label>
                        <Link href="#" className="font-medium text-primary hover:text-primary-hover">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-sm"
                    >
                        Entrar
                    </button>
                </form>

                <p className="mt-8 text-center text-sm text-slate-500">
                    ¿No tienes cuenta? <Link href="#" className="font-medium text-primary hover:text-primary-hover">Contacta con el profesor</Link>
                </p>

                <div className="mt-6 pt-6 border-t border-slate-100 flex justify-center">
                    <Link href="/panel-profesor" className="text-xs text-slate-400 hover:text-slate-600 underline">
                        Acceso Profesores (Demo)
                    </Link>
                </div>

            </div>
        </div>
    );
}

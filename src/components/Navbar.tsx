import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Navbar() {
    return (
        <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-primary/10 text-primary p-1 rounded-md">
                            <CheckCircle className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-slate-900">Método Juan</span>
                    </Link>

                    <nav className="hidden md:flex gap-6">
                        <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Características</Link>
                        <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Testimonios</Link>
                        <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Precios</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                            Iniciar sesión
                        </Link>
                        <Link href="/login" className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors shadow-sm">
                            Ver demo
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

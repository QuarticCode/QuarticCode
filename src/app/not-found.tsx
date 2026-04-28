import Link from "next/link";
import "@/src/components/ui/globals.css";

export default async function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="text-center p-8 max-w-2xl">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-white mb-2">
            ¡Oops! Página no encontrada
          </h2>
          <p className="text-gray-400 mb-4">La página no existe.</p>
          <p className="text-gray-500">
            Puede que la página haya sido movida o eliminada.
          </p>
        </div>

        {/* Sugerencias de navegación */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mr-4"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

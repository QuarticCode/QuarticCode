export function Footer() {
  return (
    <footer className="flex md:flex-row flex-col justify-evenly p-8 dark:bg-blue-950 bg-blue-900 text-white">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Quienes de somos</h1>
        <ul className="text-zinc-300">
          <li>Desarrollo Web</li>
          <li>Diseno grafico</li>
          <li>Desarrollo de movil</li>
          <li>Desarrollo de videojuegos</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Servicios</h1>
        <ul className="text-zinc-300">
          <li>Desarrollo Web</li>
          <li>Diseno grafico</li>
          <li>Desarrollo de movil</li>
          <li>Desarrollo de videojuegos</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Contacto</h1>
        <ul className="text-zinc-300">
          <li>
            <b>Correo:</b> quarticcode@gmail.com
          </li>
          <li>
            <b>Telegram:</b> quarticcode@gmail.com
          </li>
        </ul>
      </div>
    </footer>
  );
}

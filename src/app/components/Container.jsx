// Archivo: src/app/components/Container.jsx

export default function Container({ children, className }) {
  // `max-w-7xl` es un ancho grande de Tailwind
  // `mx-auto` centra el contenedor horizontalmente
  return (
    <div className={`mx-auto max-w-7xl px-4 md:px-8 ${className || ''}`}>
      {children}
    </div>
  );
}
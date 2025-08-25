// Archivo: src/app/components/Section.jsx

import Container from './Container';

export default function Section({ children, className, py = 'py-16 md:py-20' }) {
  return (
    <section className={`${py} ${className || ''}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}
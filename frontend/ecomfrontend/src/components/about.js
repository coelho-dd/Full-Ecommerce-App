import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-800 text-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-4">Sobre o Projeto</h2>
        <p className="text-center mb-6">
          Este projeto foi desenvolvido para apresentar minhas habilidades como desenvolvedor fullstack.
        </p>
        <h3 className="text-xl font-semibold text-center mb-2">Tecnologias Utilizadas</h3>
        <ul className="list-disc list-inside text-gray-100 mx-auto max-w-md">
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Django REST Framework</li>
          <li>PostgreSQL</li>
          <li>JavaScript</li>
          <li>HTML e CSS</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
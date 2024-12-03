window.onload = function () {
  // Função para mostrar o texto gradual
  function mostrarTextoGradualmente(id, texto, delay) {
    setTimeout(function () {
      let elemento = document.getElementById(id);
      elemento.innerHTML = texto;
      elemento.style.opacity = 1; // Torna o texto visível
    }, delay);
  }

  // Sequência de frases com delays progressivos
  mostrarTextoGradualmente(
    "p1",
    "É com grande prazer que lhe recebemos em nosso espaço de entrevistas, um ambiente pensado para compartilhar histórias e experiências valiosas daqueles que contribuem para a formação e o crescimento de nossa comunidade acadêmica.",
    1000
  );
  mostrarTextoGradualmente(
    "p2",
    "Aqui, você terá a oportunidade de conhecer mais de perto a trajetória de servidores ativos, aposentados e egressos do IFPB Campus Cajazeiras, que com dedicação e comprometimento, ajudam a construir o futuro da educação em nossa região.",
    4000
  );
  mostrarTextoGradualmente(
    "p3",
    "Este espaço foi criado para celebrar a diversidade de experiências que fazem parte da história do Instituto Federal da Paraíba, e queremos que você, visitante, se sinta parte dessa história.",
    8000
  );
  mostrarTextoGradualmente(
    "p4",
    "A cada vídeo, novas perspectivas e reflexões serão compartilhadas, ampliando nossa visão sobre a educação, o serviço público e o impacto transformador que o IFPB tem em nossa sociedade.",
    12000
  );
};

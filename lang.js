const translations = {
  pt: {
    title: "PTS Lda.",
    subtitle: "20+ anos de experiência em Contabilidade e Gestão",
    "menu-about": "Sobre Nós",
    "menu-services": "Serviços",
    "menu-contact": "Contactos",
    "about-title": "Sobre Nós",
    "about-text": "A PTS Lda. é uma empresa de contabilidade com mais de 20 anos de experiência, especializada em apoiar empresas e particulares na gestão fiscal, financeira e estratégica. Apostamos na confiança, proximidade e rigor, acompanhando os nossos clientes em todas as etapas do negócio.",
    "services-title": "Serviços",
    "services-list": [
      "Contabilidade e Fiscalidade",
      "Consultoria Financeira",
      "Gestão Empresarial",
      "Apoio em IVA e Obrigações Fiscais",
      "Criação de Empresas"
    ],
    "contact-title": "Contactos",
    "form-title": "Envie-nos uma mensagem",
    "label-name": "Nome:",
    "label-email": "Email:",
    "label-topic": "Assunto:",
    "label-message": "Mensagem:",
    "btn-send": "Enviar",
    "footer-text": "© 2025 PTS Lda. - Todos os direitos reservados."
  },
  en: {
    title: "PTS Lda.",
    subtitle: "20+ years of experience in Accounting and Management",
    "menu-about": "About Us",
    "menu-services": "Services",
    "menu-contact": "Contact",
    "about-title": "About Us",
    "about-text": "PTS Lda. is an accounting company with more than 20 years of experience, specialized in supporting businesses and individuals in tax, financial and strategic management. We focus on trust, proximity and accuracy, supporting our clients at every stage of their business.",
    "services-title": "Services",
    "services-list": [
      "Accounting and Taxation",
      "Financial Consulting",
      "Business Management",
      "VAT and Tax Support",
      "Company Formation"
    ],
    "contact-title": "Contact",
    "form-title": "Send us a message",
    "label-name": "Name:",
    "label-email": "Email:",
    "label-topic": "Subject:",
    "label-message": "Message:",
    "btn-send": "Send",
    "footer-text": "© 2025 PTS Lda. - All rights reserved."
  }
};

function setLang(lang) {
  const t = translations[lang];
  document.getElementById("title").innerText = t.title;
  document.getElementById("subtitle").innerText = t.subtitle;
  document.getElementById("menu-about").innerText = t["menu-about"];
  document.getElementById("menu-services").innerText = t["menu-services"];
  document.getElementById("menu-contact").innerText = t["menu-contact"];
  document.getElementById("about-title").innerText = t["about-title"];
  document.getElementById("about-text").innerText = t["about-text"];
  document.getElementById("services-title").innerText = t["services-title"];
  const ul = document.getElementById("services-list");
  ul.innerHTML = "";
  t["services-list"].forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = item;
    ul.appendChild(div);
  });
  document.getElementById("contact-title").innerText = t["contact-title"];
  document.getElementById("form-title").innerText = t["form-title"];
  document.getElementById("label-name").innerText = t["label-name"];
  document.getElementById("label-email").innerText = t["label-email"];
  document.getElementById("label-topic").innerText = t["label-topic"];
  document.getElementById("label-message").innerText = t["label-message"];
  document.getElementById("btn-send").innerText = t["btn-send"];
  document.getElementById("footer-text").innerText = t["footer-text"];
}
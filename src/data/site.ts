export const siteData = {
  name: "Pacho Parrilla #",
  location: "Medellín, Colombia",
  address: "Carrera 84 # 29A-40, Los Alpes, Medellín, Antioquia",
  phone: "320 7411591",
  whatsapp: "573207411591", 
  hours: "Abierto hasta las 11:30 p. m.",
  priceRange: "$20.000 - $30.000 por persona",
  rating: "4.7",
  reviewsCount: "177",
  services: ["Consumo en el lugar", "Para llevar", "Entrega sin contacto"],
  social: {
    instagram: "https://instagram.com/pachoparrilla" // Enlace editable
  },
  hero: {
    title: "Parrilla con sabor, porciones generosas y atención rápida en Medellín",
    subtitle: "Carne a la brasa, hamburguesas abundantes y ambiente acogedor. El verdadero sabor local que te provoca pedir de inmediato.",
    cta1: "Pedir ahora",
    cta2: "Ver menú"
  },
  products: [
    {
      id: "hamburguesa-mixta",
      name: "Hamburguesa Mixta",
      description: "Nuestra estrella: carne de res, pollo a la plancha, tocineta crujiente, queso fundido y vegetales.",
      price: "$28.000",
      image: "/images/product-burger-mixta.jpg",
      badge: "Popular"
    },
    {
      id: "solomito",
      name: "Solomito a la Parrilla",
      description: "Corte premium jugoso y tierno, asado a la perfección. Acompañado de papas y ensalada.",
      price: "$30.000",
      image: "/images/product-solomito.jpg",
      badge: "Recomendado"
    },
    {
      id: "bandeja-paisa",
      name: "Bandeja Paisa",
      description: "Generosa porción con chicharrón, carne molida, chorizo, huevo frito, frijoles tiernos, arroz y tajada.",
      price: "$25.000",
      image: "/images/product-bandeja-paisa.jpg"
    },
    {
      id: "hamburguesa-doble",
      name: "Hamburguesa Doble Carne",
      description: "Para los de apetito voraz. Doble carne artesanal, doble queso, tocineta y salsas de la casa.",
      price: "$28.000",
      image: "/images/product-burger-doble.jpg"
    }
  ],
  menuHighlights: [
    { category: "Hamburguesas", items: ["Mixta", "Doble Carne", "Pollo Crujiente", "Clásica"] },
    { category: "Parrilla y Cortes", items: ["Solomito", "Churrasco", "Punta de Anca", "Costillas BBQ"] },
    { category: "Platos Especiales", items: ["Bandeja Paisa", "Menú del día (hasta 3 p.m.)", "Picada Familiar"] },
    { category: "Acompañamientos", items: ["Papas a la francesa", "Papas en casco", "Patacón con hogao", "Ensalada"] }
  ],
  features: [
    {
      title: "Atención Rápida",
      description: "Servicio ágil y cordial para que disfrutes tu comida sin largas esperas.",
      icon: "⚡"
    },
    {
      title: "Excelente Reputación",
      description: "177 reseñas nos respaldan como la opción preferida de Los Alpes.",
      icon: "⭐"
    },
    {
      title: "Porciones Generosas",
      description: "Comida abundante con el auténtico sazón casero.",
      icon: "🥩"
    },
    {
      title: "Ambiente Agradable",
      description: "Un espacio acogedor ideal para almorzar, cenar o compartir en familia.",
      icon: "🏠"
    }
  ],
  testimonials: [
    {
      name: "Carlos M.",
      text: "La atención es rapidísima y las hamburguesas son de muy buen tamaño. Excelente relación calidad-precio.",
      rating: 5
    },
    {
      name: "Ana S.",
      text: "El mejor solomito que he probado en Los Alpes. El lugar es súper agradable y la carne tiene un sabor a parrilla espectacular.",
      rating: 5
    },
    {
      name: "David R.",
      text: "Vine por el menú del día y me sorprendió la porción. Muy recomendado si buscas comer rico, abundante y rápido.",
      rating: 5
    }
  ],
  gallery: [
    { image: "/images/gallery-1.jpg", alt: "Hamburguesa premium Pacho Parrilla" },
    { image: "/images/gallery-2.jpg", alt: "Corte de carne asado a la parrilla" },
    { image: "/images/gallery-3.jpg", alt: "Detalle de acompañamientos y papas fritas" },
    { image: "/images/gallery-4.jpg", alt: "Bandeja paisa completa" },
    { image: "/images/gallery-5.jpg", alt: "Ambiente del restaurante Los Alpes" },
    { image: "/images/gallery-6.jpg", alt: "Elaboración de parrilla" }
  ]
};

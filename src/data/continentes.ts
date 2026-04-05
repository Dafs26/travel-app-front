import { ContinenteInfo } from "../types";

export const continenteMeta: Record<string, ContinenteInfo> = {
  EUROPA: {
    label: "Europa",
    tagline: "Historia, cultura y paisajes sin igual",
    description:
      "Desde los fiordos noruegos hasta las playas mediterráneas, Europa despliega siglos de historia, arquitectura monumental y gastronomía irresistible en cada esquina.",
    heroImage:
      //"https://images.unsplash.com/photo-1471874708586-a6a5b1af35b4?w=1600&q=80",
      "https://images.unsplash.com/photo-1608817576203-3c27ed168bd2?q=80&w=5504",
    carouselImage:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=75",
    accentColor: "#3a7bd5",
    emoji: "🏛️",
  },
  ASIA: {
    label: "Asia",
    tagline: "Tradición milenaria y modernidad vibrante",
    description:
      "Templos ancestrales, metrópolis futuristas, sabores únicos y paisajes de otro mundo. Asia es el continente que más transforma a quienes lo visitan.",
    heroImage:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&q=80",
    carouselImage:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=75",
    accentColor: "#e8875a",
    emoji: "🏯",
  },
  AFRICA: {
    label: "África",
    tagline: "La cuna de la humanidad te espera",
    description:
      "Safaris emocionantes, desiertos infinitos, culturas ancestrales y costas paradisíacas. África es el continente más fascinante, salvaje y auténtico del mundo.",
    heroImage:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600&q=80",
    carouselImage:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=75",
    accentColor: "#c0392b",
    emoji: "🌍",
  },
  AMERICA: {
    label: "América",
    tagline: "Del Ártico a la Patagonia",
    description:
      "Selvas amazónicas, ruinas mayas, ciudades cosmopolitas y playas de arena blanca. América ofrece una diversidad sin límites para todos los viajeros.",
    heroImage:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1600&q=80",
    carouselImage:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=75",
    accentColor: "#27ae60",
    emoji: "🗺️",
  },
};

export const destinoImages: Record<string, string> = {
  // EUROPA
  "Alemania Mágica":
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=70",
  "Alemania Romántica Múnich–Berlín":
    "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&q=70",
  Austria:
    "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600&q=70",
  "Bretaña y Normandía":
    "https://images.unsplash.com/photo-1531250552633-528fe896fdd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bm9ybWFuZGlhfGVufDB8fDB8fHww",
  "Croacia y Eslovenia":
    "https://images.unsplash.com/photo-1520900828798-002c1800f31a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXNsb3ZlbmlhfGVufDB8fDB8fHww",
  "Croacia, Bosnia y Eslovenia":
    "https://images.unsplash.com/photo-1575540291670-8d3b26f7d327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JvYWNpYXxlbnwwfHwwfHx8MA%3D%3D",
  "Escocia y Tierras Altas":
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=70",
  "Eslovenia, Istria y Véneto":
    "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVuZXRvfGVufDB8fDB8fHww",
  "Estocolmo y Fiordos Noruegos":
    "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=70",
  "Fiordos y Oslo":
    "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=600&q=70",
  Irlanda:
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=600&q=70",
  "Italia Clásica":
    "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&q=70",
  Madeira:
    "https://images.unsplash.com/photo-1594498653385-d5172c532c00?w=600&q=70",
  "Múnich, Praga y Berlín":
    "https://images.unsplash.com/photo-1611693088055-f20ef834328a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVuaWNofGVufDB8fDB8fHww",
  "Norte de Italia, Lagos y Véneto":
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=70",
  "Países Bajos":
    "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=600&q=70",
  "París, Normandía y Loira":
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=70",
  Polonia:
    "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=600&q=70",
  Portugal:
    "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=70",
  "Praga y Budapest":
    "https://images.unsplash.com/photo-1541849546-216549ae216d?w=600&q=70",
  "Rumanía Histórica":
    "https://images.unsplash.com/photo-1585211969224-3e992986159d?w=600&q=70",
  Sicilia:
    "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=600&q=70",
  Suiza:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=70",
  "Toscana, Norte de Italia y Véneto":
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=70",
  "Capitales Imperiales":
    "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=600&q=70",

  // ASIA
  China: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&q=70",
  "China — Fin de Año":
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=70",
  Camboya:
    "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=70",
  "Corea del Sur":
    "https://images.unsplash.com/photo-1583833008338-31a6657917ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "India — Festival Diwali":
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=70",
  "India — Triángulo Dorado":
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=70",
  "Indonesia — Bali":
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=70",
  "Japón Espectacular":
    "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=70",
  "Japón en Otoño":
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=70",
  "Japón Matsumoto":
    "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=70",
  "Ruta de la Seda — Uzbekistán":
    "https://images.unsplash.com/photo-1705077016239-1fd62735562d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJ1dGElMjBkZSUyMGxhJTIwc2VkYSUyMHVzYmVraXN0YW58ZW58MHx8MHx8fDA%3D",
  Tailandia:
    "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=600&q=70",
  Turquía:
    "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&q=70",
  Vietnam:
    "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=600&q=70",

  // AFRICA
  Egipto:
    "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600&q=70",
  Jordania:
    "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&q=70",
  Kenia:
    "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=70",
  Marruecos:
    "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=600&q=70",
  Senegal:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70",
  "Tanzania y Zanzíbar":
    "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=70",
  Túnez:
    "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&q=70",
  Zanzíbar:
    "https://images.unsplash.com/photo-1621583628955-42fbc37bf424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8emFuemliYXJ8ZW58MHx8MHx8fDA%3D",

  // AMERICA
  Canadá:
    "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&q=70",
  Colombia:
    "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=600&q=70",
  "Costa Rica — Guanacaste":
    "https://images.unsplash.com/photo-1643400814192-381f57499b42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fENvc3RhJTIwUmljYSUyMCVFMiU4MCU5NCUyMEd1YW5hY2FzdGV8ZW58MHx8MHx8fDA%3D",
  "Costa Rica — Manuel Antonio":
    "https://images.unsplash.com/photo-1536708952035-0a982a1a1984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q29zdGElMjBSaWNhJTIwJUUyJTgwJTk0JTIwbWFudWVsJTIwYW50b25pb3xlbnwwfHwwfHx8MA%3D%3D",
  Perú: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=70",
  "Perú — Montaña Arcoíris":
    "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=600&q=70",
  "Perú Mágico":
    "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=70",
  "Riviera Maya":
    "https://images.unsplash.com/photo-1606848685862-e165a7b69ac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJpdmVyYSUyMG1heWF8ZW58MHx8MHx8fDA%3D",
  "Punta Cana":
    "https://images.unsplash.com/photo-1505738313577-5357ff512f16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHB1bnRhJTIwY2FuYXxlbnwwfHwwfHx8MA%3D%3D",
};

export const CONTINENTES = ["EUROPA", "ASIA", "AFRICA", "AMERICA"] as const;

export type Tipologia =
  | "plaza_a_plaza_en_grupo"
  | "plaza_a_plaza"
  | "cupo"
  | "grupo"
  | "singles"
  | "viaje_dinamico"
  | null;

export type Continente = "EUROPA" | "ASIA" | "AFRICA" | "AMERICA";

export interface Viaje {
  continente: Continente;
  nombre: string;
  tipologia: Tipologia;
  dias: number | null;
  fechas: string | null;
  mes: string | null;
  ciudadSalida: string | null;
  precioHabDoble: number | null;
  precioIndividual: number | null;
  // proveedor: string | null;
  // linkWeb?: string | null;
  activo: boolean;
}

export interface ContinenteInfo {
  label: string;
  tagline: string;
  description: string;
  heroImage: string;
  carouselImage: string;
  accentColor: string;
  emoji: string;
}

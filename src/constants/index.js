export const series = [
  "A1",
  "A2",
  "B",
  "C",
  "D",
  "E",
  "F1",
  "F2",
  "F3",
  "F4",
  "G1",
  "G2",
  "G3",
];

const startYear = 2021;

const currentYear = new Date().getFullYear();

export const schoolYears = Array.from(
  { length: currentYear - startYear + 1 },
  (_, i) => currentYear - i
);

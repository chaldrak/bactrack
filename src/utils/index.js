const verdicts = ["refuse", "oral"];

export const isFailure = (verdict) => {
  return verdicts.includes(verdict.toLocaleLowerCase());
};

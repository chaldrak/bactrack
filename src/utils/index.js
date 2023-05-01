const verdicts = ["refuse", "oral"];

export const isFailure = (verdict) => {
  return verdicts.includes(verdict.toLocaleLowerCase());
};

export const getInitials = (name) => {
  const words = name.split(" ");
  let initials = "";
  for (let i = 0; i < words.length; i++) {
    initials += words[i].charAt(0).toUpperCase();
  }
  return initials;
};

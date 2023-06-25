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

export const sortInAlphabeticOrder = (tab) => {
  if (!tab) return [];
  return tab.sort((a, b) => {
    const nameA = a.lastname.toUpperCase();
    const nameB = b.lastname.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};

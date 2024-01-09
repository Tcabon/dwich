const isCustomEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) || "Adresse e-mail non valide";
};

export default isCustomEmailValid;
export function validateName(name: string): boolean {

  const nameRegex = /^[A-Za-z]+$/;
  return nameRegex.test(name);
};

export function validateEmail(email: string): boolean {
  //Expressão regular pra testar um input de email de forma simples
  const emailRegex = /^\s*([^\s@]+@[^\s@]+\.[^\s@]+)\s*$/;
  return emailRegex.test(email);
}


const inputEmail = "john.doe@example.com"; 
const isEmailValid = validateEmail(inputEmail);

if (isEmailValid) {
  console.log("Email is valid");
} else {
  console.log("Invalid email format");
}
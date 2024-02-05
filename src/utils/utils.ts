export function validateName(name: string): boolean {
  // Use a regular expression to check if the input contains only letters
  const nameRegex = /^[A-Za-z]+$/;

  // Test the input against the regular expression
  return nameRegex.test(name);
}

// Example usage:
// const inputName = "John"; // Replace with your actual input value
// const isValid = validateName(inputName);

// if (isValid) {
//   return true
// } else {
//   console.log("Invalid characters in the name");
// }


export function validateEmail(email: string): boolean {
  // Regular expression for a simple email validation
  const emailRegex = /^\s*([^\s@]+@[^\s@]+\.[^\s@]+)\s*$/;

  // Test the input against the regular expression
  return emailRegex.test(email);
}

// Example usage:
const inputEmail = "john.doe@example.com"; // Replace with your actual email address
const isEmailValid = validateEmail(inputEmail);

if (isEmailValid) {
  console.log("Email is valid");
} else {
  console.log("Invalid email format");
}
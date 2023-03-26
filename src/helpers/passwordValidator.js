import axios from 'axios';
export async function passwordValidator(credentials) {

  const { email, password } = credentials;
  const returnValue = await axios.post('http://localhost:3001/api/login/validpassword', { email: email, PasswordHash: password });
  const UserDetails = returnValue.data;

  if (!password) return "Password can't be empty."
  if (password.length < 5) return 'Password must be at least 5 characters long.'
  if (UserDetails.Type == "Patient") {
    return 'a'
  }
  if (UserDetails.Type == "Doctor") {
    return 'd'
  }
  return "Wrong Password!"
}

import axios from 'axios';
import react from 'react';
import { useState,useCallback,useEffect } from 'react';


export async function emailValidator(email) {
  const returnValue = await axios.post('http://localhost:3001/api/login/validemail', { email: email });
  const returnMessage = returnValue.data;
  const re = /\S+@\S+\.\S+/
  if (!email) return "Email can't be empty."
  if (!re.test(email)) return 'Ooops! We need a valid email address.'
  if (returnMessage == "exists") return ''
  return "This email is not registered"
}

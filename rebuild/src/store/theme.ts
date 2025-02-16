import { atom } from 'nanostores';

let savedTheme = 'light'; // Default value

if (typeof window !== 'undefined') {
  // Ensure this code only runs on the client side
  savedTheme = localStorage.getItem('theme') || 'light';
}

// Create the theme store with the initial value
export const theme= atom(() => savedTheme);

// Update localStorage whenever the theme changes
export function setTheme(newTheme: any) {
  theme.set(newTheme);
  if (typeof window !== 'undefined') {
    // Update localStorage only on the client side
    localStorage.setItem('theme', newTheme);
  }
}

theme.listen((value: any) => {
  // Here, we also listen for changes to the theme and update localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', value);
  }
});

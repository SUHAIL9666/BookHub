const API_KEY = 'AIzaSyBfzDZG4aE5HnxTslR6Fy19DHVMFg-Twe4';
const BASE_URL = 'https://www.googleapis.com/books/v1';

export async function searchBooks(query: string) {
  const response = await fetch(
    `${BASE_URL}/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}`
  );
  return response.json();
}

export async function getTrendingBooks() {
  // Using popular subjects to simulate trending books
  const subjects = ['fiction', 'bestseller', 'new releases'];
  const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
  const response = await fetch(
    `${BASE_URL}/volumes?q=subject:${randomSubject}&orderBy=newest&maxResults=12&key=${API_KEY}`
  );
  return response.json();
}

export async function getBookById(id: string) {
  const response = await fetch(`${BASE_URL}/volumes/${id}?key=${API_KEY}`);
  return response.json();
}
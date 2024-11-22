const API_KEY = 'AIzaSyBfzDZG4aE5HnxTslR6Fy19DHVMFg-Twe4';
const BASE_URL = 'https://www.googleapis.com/books/v1';
<<<<<<< HEAD
const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';

export interface SearchResponse {
  items?: any[];
  totalItems: number;
}

export async function searchBooks(query: string, maxResults: number = 20): Promise<SearchResponse> {
  try {
    const response = await fetch(
      `${GOOGLE_BOOKS_API}?q=${encodeURIComponent(query)}&key=${API_KEY}&maxResults=${maxResults}`
    );
    return await response.json();
  } catch (error) {
    console.error('Error searching books:', error);
    return { items: [], totalItems: 0 };
  }
}

export async function searchBooksByGenre(genre: string, maxResults: number = 20): Promise<SearchResponse> {
  try {
    // Use "subject:" filter to search by genre/category
    const response = await fetch(
      `${GOOGLE_BOOKS_API}?q=subject:${encodeURIComponent(genre)}&key=${API_KEY}&maxResults=${maxResults}`
    );
    return await response.json();
  } catch (error) {
    console.error('Error searching books by genre:', error);
    return { items: [], totalItems: 0 };
  }
=======

export async function searchBooks(query: string) {
  const response = await fetch(
    `${BASE_URL}/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}`
  );
  return response.json();
>>>>>>> a27dbe6688d1b56c400df5fcc62266b77dad7307
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
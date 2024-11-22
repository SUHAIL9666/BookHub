export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate?: string;
    description?: string;
    imageLinks?: {
      thumbnail: string;
      smallThumbnail: string;
    };
    averageRating?: number;
    ratingsCount?: number;
    categories?: string[];
    publisher?: string;
    pageCount?: number;
    language?: string;
  };
  saleInfo?: {
    buyLink?: string;
    isEbook?: boolean;
  };
}
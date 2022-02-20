interface Category {
  id: number,
  name: string
}

interface Page {
  id: number,
  text: string
}

export interface Book {
  id: number,
  author: string,
  releaseDate: string,
  title: string,
  description: string,
  cover: string,
  categories: Category[],
  pages: Page[],
}
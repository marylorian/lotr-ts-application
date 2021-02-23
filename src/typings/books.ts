export interface IBook {
  id: string
  name: string
  chapters?: any
}

export type TBookFromData = Omit<IBook, 'id'> & { _id: string }

export interface IBookChapter {
  id: string
  bookName: string
  chapterName: string
}

export type TBookChapterFromData = Omit<IBookChapter, 'id'> & { _id: string }

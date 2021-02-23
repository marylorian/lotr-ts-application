import {
  IBook,
  IBookChapter,
  TBookChapterFromData,
  TBookFromData,
} from '../typings/books'

export class BooksMapper {
  static mapBookItem = ({ _id: id, ...bookData }: TBookFromData): IBook => ({
    id,
    ...bookData,
  })

  static mapChapterItem = ({
    _id: id,
    ...chapterData
  }: TBookChapterFromData): IBookChapter => ({ id, ...chapterData })
}

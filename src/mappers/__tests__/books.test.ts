import { BooksMapper } from '../books'

describe('mappers/books', () => {
  describe('mapBookItem', () => {
    it('should map book item from data to IBook', () => {
      expect(
        BooksMapper.mapBookItem({ _id: 'id123', name: 'book name' })
      ).toEqual({ id: 'id123', name: 'book name' })
    })
  })

  describe('mapChapterItem', () => {
    it('should map book chapter item from data to IBookChapter', () => {
      expect(
        BooksMapper.mapChapterItem({
          _id: 'id123',
          bookName: 'book name',
          chapterName: 'chapter name',
        })
      ).toEqual({
        id: 'id123',
        bookName: 'book name',
        chapterName: 'chapter name',
      })
    })
  })
})

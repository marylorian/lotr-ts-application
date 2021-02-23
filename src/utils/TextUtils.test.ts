import { TextUtils } from './TextUtils'

describe('utils/TextUtils', () => {
  describe('pluralizeStringByCount', () => {
    it('should return non-plural word for one thing', () => {
      expect(
        TextUtils.pluralizeStringByCount(1, ['million', 'millions'])
      ).toEqual('1 million')
    })

    it('should return plural word for more than one thing', () => {
      expect(
        TextUtils.pluralizeStringByCount(10, ['million', 'millions'])
      ).toEqual('10 millions')
    })

    it('FOR LOT CASES: should return non-plural word for one thing', () => {
      expect(
        TextUtils.pluralizeStringByCount(1, [
          'миллион',
          'миллиона',
          'миллионов',
        ])
      ).toEqual('1 миллион')
    })

    it('FOR LOT CASES: should return first plural word for first case and lot of thing', () => {
      expect(
        TextUtils.pluralizeStringByCount(3, [
          'миллион',
          'миллиона',
          'миллионов',
        ])
      ).toEqual('3 миллиона')
    })

    it('FOR LOT CASES: should return second plural word for second case and lot of thing', () => {
      expect(
        TextUtils.pluralizeStringByCount(10, [
          'миллион',
          'миллиона',
          'миллионов',
        ])
      ).toEqual('10 миллионов')
    })
  })
})

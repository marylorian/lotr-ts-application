type TTitlesLotCases = [string, string, string]
type TTitlesFewCases = [string, string]

export class TextUtils {
  /**
   * Returns count with suitable word from titles param, e.g 1 million or 10 millions
   *
   * sorry, this util was for russian language, but it's still usefull for english
   * @param {number} count
   * @param {TTitlesLotCases} titles - if you want
   * to use it for languages with a lot of cases and declensions, use this case,
   * e.g [one thing, lot of things (1st case), lot of things (2nd case)]
   * @param {TTitlesFewCases} titles - instead use this case, e.g [one thing, lot of things]
   *
   * @returns {string} count with suitable word from titles
   */
  static pluralizeStringByCount = (
    count: number = 0,
    titles: TTitlesLotCases | TTitlesFewCases = ['thing', 'things']
  ): string => {
    const titlesFullArr: TTitlesLotCases =
      titles.length < 3
        ? [titles[0], titles[1], titles[1]]
        : (titles as TTitlesLotCases)
    const cases = [2, 0, 1, 1, 1, 2]

    return `${count} ${
      titlesFullArr[
        count % 100 > 4 && count % 100 < 20
          ? 2
          : cases[count % 10 < 5 ? count % 10 : 5]
      ]
    }`
  }
}

import { MoviesMapper } from '../movies'

describe('mappers/movies', () => {
  describe('mapMovieItem', () => {
    it('should map movie item from data to IMovie', () => {
      expect(
        MoviesMapper.mapMovieItem({
          _id: 'id123',
          academyAwardNominations: 1,
          budgetInMillions: 1,
          runtimeInMinutes: 1,
          academyAwardWins: 1,
          boxOfficeRevenueInMillions: 1,
          rottenTomatesScore: 1,
          name: 'movie name',
        })
      ).toEqual({
        id: 'id123',
        academyAwardNominations: 1,
        budgetInMillions: 1,
        runtimeInMinutes: 1,
        academyAwardWins: 1,
        boxOfficeRevenueInMillions: 1,
        rottenTomatesScore: 1,
        name: 'movie name',
      })
    })
  })
})

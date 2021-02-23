export interface IMovie {
  id: string
  name: string
  runtimeInMinutes: number
  academyAwardNominations: number
  academyAwardWins: number
  boxOfficeRevenueInMillions: number
  budgetInMillions: number
  rottenTomatesScore: number
}

export type TMovieFromData = Omit<IMovie, 'id'> & {
  _id: string
}

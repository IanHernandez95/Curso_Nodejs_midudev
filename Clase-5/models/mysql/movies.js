import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Pass12word45',
  database: 'moviesdb'
}

const connection = await mysql.createConnection(config)

export class MovieModel {
  static async getAll ({ genre }) {
    if (genre) {
      const lowerCaseGenre = genre.toLowerCase()

      const [genres] = await connection.query(
        'SELECT id, name FROM genre WHERE LOWER(name) = ? ', [lowerCaseGenre]
      )

      if (genres.length === 0) return []

      const [{ id }] = genres

      const [movieGenres] = await connection.query(
        `SELECT BIN_TO_UUID(m.id) AS id, m.title, m.year, m.director, m.duration, m.poster, m.rate , g.name genre 
        FROM movies m
        JOIN movie_genre mg ON m.id = mg.movie_id
        JOIN genre g ON g.id = mg.genre_id
        WHERE g.id = ? ;`, [id]
      )
      // Query a movie_genres
      // join
      // devolver resultados
      return [movieGenres]
    }

    const [movies] = await connection.query(
      'SELECT BIN_TO_UUID(id) id, title, year, director, duration, poster, rate FROM movies;'
    )

    return movies
  }

  static async getById ({ id }) {
    const [movies] = await connection.query(
      'SELECT BIN_TO_UUID(id) id, title, year, director, duration, poster, rate FROM movies WHERE id = UUID_TO_BIN(?);',
      [id]
    )

    if (movies.length === 0) return null

    return movies[0]
  }

  static async create ({ input }) {
    const {
      genre: genreInput,
      title,
      year,
      director,
      duration,
      poster,
      rate
    } = input

    const [uuidResult] = await connection.query('SELECT UUID() uuid;')
    const [{ uuid }] = uuidResult

    try {
      await connection.query(
        `INSERT INTO movies (id, title, year, director, duration, poster, rate) 
        VALUES (UUID_TO_BIN(?),?,?,?,?,?,?);`,
        [uuid, title, year, director, duration, poster, rate]
      )
    } catch (e) {
      throw new Error('Error Creating Movie')
      // sendLog(e)
    }

    const [movies] = await connection.query(
      'SELECT BIN_TO_UUID(id) id, title, year, director, duration, poster, rate FROM movies WHERE id = UUID_TO_BIN(?);',
      [uuid]
    )

    return movies[0]
  }

  static async delete ({ id }) {
    const [movies] = await connection.query(
      'SELECT BIN_TO_UUID(id) id, title, year, director, duration, poster, rate FROM movies WHERE id = UUID_TO_BIN(?);',
      [id]
    )

    if (movies.length === 0) return false

    // Delete Movie
    try {
      await connection.query(
        'DELETE FROM movies WHERE id = UUID_TO_BIN(?)', [id]
      )
    } catch (e) {
      throw new Error('Error Deleting Movie')
    }

    return true
  }

  static async update ({ id, input }) {
    // TODO: update movies
  }
}

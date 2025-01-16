import z from 'zod'

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Movie title must be a string',
    required_error: 'Movie title is required'
  }),
  year: z.number().int().min(1900).max(2026),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).default(4),
  poster: z.string().url({
    message: 'Poster must be a valid url'
  }),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Crime', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi']),
    {
      required_error: 'Movie Genre is required',
      invalid_type_error: 'Movie Genre must be an array of enum Genre'
    }
  )
})

export function validateMovie (input) {
  return movieSchema.safeParse(input)
}

export function validatePartialMovie (input) {
  return movieSchema.partial().safeParse(input)
}

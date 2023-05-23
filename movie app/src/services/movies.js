const API_KEY = 'b2567f12'

export const searchMovies = async ({ search }) => {
  if (search === '') return null;

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=b2567f12&s=${search}`);
    const json = await response.json();

    const movies = json.Search

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (error) {
    throw new Error('Error searching movies')
  }
  if (search) {

  }



}
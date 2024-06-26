import http from "~/utils/http";

class Movie {
    create = async (data) => {
        try {
            const res = await http.post('/movie/createMovie', data)
            return res.data
        } catch (error) {
            console.log(error);
        }
    };
    addType = async (movieId, movieTypeId) => {
        try {
            const res = await http.post(`/movie/addMovieTypeToMovie?movieId=${ movieId }&movieTypeId=${ movieTypeId }`)
            return res.data
        } catch (error) {
            console.log(error);
        }
    };
    getAll = async () => {
        try {
            const res = await http.get('/movie')
            return res.data
        } catch (error) {
            console.log(error);
        }
    };
    findType = async (id) => {
        try {
            const res = await http.get(`/movie/findMovieTypeByMovieId?id=${ id }`)
            return res.data
        } catch (error) {
            console.log(error);
        }
    };
    getAllMovieType = async () => {
        try {
            const res = await http.get('/movie/findAllMovieType')
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
    deleteById = async (id) => {
        try {
            const res = await http.delete('/movie/deleteMovie/' + id)
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
}
export default new Movie()
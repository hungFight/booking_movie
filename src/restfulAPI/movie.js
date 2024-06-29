import http from "~/utils/http";

class Movie {
    create = async (data) => {
        try {
            const res = await http.post('/movie/createMovie', data)
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
    }
    getMovieTypeByMovieId = async (id) => {
        try {
            const res = await http.get(`/movie/findMovieTypeByMovieId?id=${id}`)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
    getMovieById = async(id) => {
        try {
            const res = await http.get('/movie/findMovieId?id=' + id)
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
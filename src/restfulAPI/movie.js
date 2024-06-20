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
            const res = await http.get('/movie/')
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
    getAll = async (id) => {
        try {
            const res = await http.post('/movie/deleteMovie/' + id)
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
}
export default new Movie()
class Promotion {
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
    };
    getAllMovieType = async () => {
        try {
            const res = await http.get('/movie/findAllMovieType')
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
    getAllMovieType = async () => {
        try {
            const res = await http.get('/movie')
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
export default new Promotion()
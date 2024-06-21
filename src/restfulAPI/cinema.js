import http from "~/utils/http";

class Cinema {
    create = async (data) => {
        try {
            const res = await http.post('/cinema/createCinema', data)
        } catch (error) {
            console.log(error);
        }
    };
    update = async (id, data) => {
        try {
            const res = await http.put('/schedule/update/' + id, data)
        } catch (error) {
            console.log(error);
        }
    };
    getAll = async () => {
        try {
            const res = await http.get('/cinema')
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
export default new Cinema()
import http from "~/utils/http";

class Schedule {
    create = async (data) => {
        try {
            const res = await http.post('/schedule/create', data)
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
            const res = await http.get('/movie/')
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
export default new Schedule()
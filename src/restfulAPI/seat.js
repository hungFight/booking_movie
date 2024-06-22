import http from "~/utils/http";

class Seat {
    create = async (data) => {
        try {
            const res = await http.post('/seat/create', data)
            return res.data
        } catch (error) {
            console.log(error);
        }
    };
    getAll = async () => {
        try {
            const res = await http.get('/seat')
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
    deleteById = async (id) => {
        try {
            const res = await http.delete('/seat/deleteSeat/' + id)
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
}
export default new Seat()
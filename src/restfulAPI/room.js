import http from "~/utils/http";

class Room {
    create = async (data) => {
        try {
            const res = await http.post('/room/create', data)
            return res.data
        } catch (error) {
            console.log(error);
        }
    };
    update = async (id, data) => {
        try {
            const res = await http.put('/room/update/' + id, data)
            return res.data
        } catch (error) {
            console.log(error);
        }
    };
    getAll = async () => {
        try {
            const res = await http.get('/room')
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
    deleteById = async (id) => {
        try {
            const res = await http.delete('/room/deleteRoom/' + id)
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
}
export default new Room()
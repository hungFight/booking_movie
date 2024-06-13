import http from '~/utils/http';

class Authentication {
    register = async (data) => {
        try {
            const res = await http.post('/user/register', { ...data, role_id: 2, user_status_id: 1, rank_customer_id: 1 });
            return res.data;
        } catch (error) {
            console.log(error);
            return { status: true, message: error.response.data };
        }
    };
    login = async (data) => {
        try {
            const res = await http.post('/user/login', { ...data });
            return res.data;
        } catch (error) {
            console.log(error);
            return { status: true, message: error.response.data };
        }
    };
}
export default new Authentication();

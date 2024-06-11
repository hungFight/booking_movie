import http from '~/utils/http';

class Authentication {
    register = async (data) => {
        try {
            const res = await http.post('/user/register', { ...data, role_id: 2, user_status_id: 1, rank_customer_id: 1 });
        } catch (error) {
            console.log(error);
        }
    };
}
export default new Authentication();

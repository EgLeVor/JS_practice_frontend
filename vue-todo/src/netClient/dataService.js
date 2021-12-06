import http from '@/netClient/config';

export async function doRegister(login, password, email, name) {
    try{
        const response = await http.post('/auth/registration', {
            login,
            password,
            email,
            name
        });
        return response.data;
    } catch (error) {
        console.error({ error })
        throw error;
    }
}

export async function doLogin(login, password){
    try{
        const response = await http.post('/auth/login', {
            login, 
            password
        });
        const { accessToken } = response.data;
        localStorage.accessToken = accessToken;
        return accessToken;
    }
    catch(error){
        console.error({error});
        throw error;
    }
}

export async function doLogout(){
    try{
        const response = await http.post('/user/logout', {},
        {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.accessToken
            }
        });
        localStorage.removeItem('accessToken');
        return response.data;
    }
    catch(error){
        console.error({error});
        throw error;
    }
}

export async function fetchTodoList(){
    try {
        const response = await http.get('/todos',
        {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.accessToken
            }
        });
        return response.data?.todos || [];
    }
    catch(error){
        console.error({error});
        throw error;
    }
}
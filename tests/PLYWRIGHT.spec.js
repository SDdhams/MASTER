

import { test,expect } from '@playwright/test'

test('POST request', async (request) => {

const response = await request.post('https://reqres.in/api/users',
    {
        BODY : {
            
            NAME : 'DHAMS',
            PASSWORD : '1224'
        }
    }
)
response.toBe(200);
 
const variable = response.json();

const token = variable.token();

const response1 = await request.get('https://reqres.in/api/users',{
    Headers:{
        authorization:`Bearer ${token}`
    }
});
 

})















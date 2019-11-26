var url = 'localhost:3000';

const getuser = () => {
    return new Promise((resolve, reject) => {
        request( {
            url: url + '/user',
            json: true
        }, (error, response, body) => {
            if(!body) {
                reject(error);
            } else {
                resolve(body); 
            }
        });
    });
};

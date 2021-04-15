const requestURL = 'https://jsonplaceholder.typicode.com/users';
function sendRequest(method, url, body = null){
        return new Promise( (resolve, reject)=> {
        const xhr = new XMLHttpRequest();
        xhr.open(method, requestURL);
        xhr.responseType = 'json'

        xhr.onload = () => {
            //return string
            //console.log(JSON.parse(xhr.response ))
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else
                resolve(xhr.response)
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send(JSON.stringify(body));
    })
}
// sendRequest('GET', requestURL)
//     .then(data =>console.log(data))
//     .catch(err=>console.log(err))

const body = {
    name: 'Dmitriy',
    vocation: 'Programmer',
    age: 32
}
sendRequest('POST', requestURL, body)
    .then(data =>console.log(data))
    .catch(err=>console.log(err))
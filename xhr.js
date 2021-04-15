const req = 'https://jsonplaceholder.typicode.com/users';
const xhr = new XMLHttpRequest();
xhr.open('GET', req);
xhr.responseType = 'json'

xhr.onload = () => {
    //return string
    //console.log(JSON.parse(xhr.response ))
    if (xhr.status >=400){
        console.error(xhr.response)
    } else
    console.log(xhr.response)
}
xhr.onerror=()=>{
    console.log(xhr.response)
}
xhr.send();
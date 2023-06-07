fetch('https://api.github.com/users')
    .then(response => console.log(response))
    .catch(error => console.error(error));

fetch('https://api.github.com/users/brenden-ferguson/events').then( response => {
    response.json().then( user => {
            console.log(user[0].created_at);
    });
});

function wait(num){

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve()
        }, num)
    })
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
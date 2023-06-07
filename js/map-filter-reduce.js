const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// const atLeastThree = users.filter(function(user) {
//     return user.languages.length >= 3;
// });

const atLeastThree = users.filter(user => user.languages.length >= 3);

console.log(atLeastThree);

const emails = users.map(user => user.email);

console.log(emails);

const experiences = users.reduce((total, user) => {
    return Math.floor((total + user.yearsOfExperience) / users.length);
}, 0);

console.log(experiences);

const longestEmail = users.reduce((longest, user) => {
        if (longest.length > user.email.length) {
            return longest
        } else {
            return user.email
        }
    },'');

console.log(longestEmail);

const userNames = users.reduce((string, user, index) => {
    if(index === users.length - 1){
        return string + user.name + '.'
    }
    return string + user.name + ', ';
},'Your instructors are: ');

console.log(userNames)

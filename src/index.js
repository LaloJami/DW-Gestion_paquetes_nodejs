const messages = [
    "Lalo",
    "Alan",
    "Samy",
    "Joha",
    "Jose",
    "Pepe"
]

const randomMsg = () => {
    const message = messages[Math.floor(random() * messages.length)];
    console.log(message);
}

module.exports = {randomMsg};
import answers from "./answers"

function getRandom() {
    return Math.floor(Math.random() * answers.length);
};

export { getRandom };
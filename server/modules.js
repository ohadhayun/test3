const jsonFile = require('jsonFile');


exports.getRandom = async () => {
    let counter = 0;
    const data = await jsonFile.readFile("./db.json");
    counter = data.length;
    let x = Math.floor((Math.random() * counter) + 1);
    const filtered = data.filter((user) => { return x == user.id })
    return filtered;
}

exports.getAll = async () => {
    const data = await jsonFile.readFile("./db.json");
    return data;
}

exports.getId = async (id) => {
    const data = await jsonFile.readFile("./db.json");
    const filtered = data.filter((user) => { return id == user.id })
    return filtered;
}

exports.postUser = async (obj) => {
    try {
        const oldData = await jsonFile.readFile("./db.json");
        oldData.push(obj);
        jsonFile.writeFile("./db.json", oldData);
        return "Good Job."
    }
    catch (err) {
        console.log(err);
    }
}

exports.dealeteUser = async (objUser) => {
    let isItFound = false;
    try {
        const oldData = await jsonFile.readFile("./db.json");
        const newData = oldData.filter((element) => {
            if (objUser.id == element.id) {
                isItFound = true;
            }
            else {
                return element;
            }
        });
        jsonFile.writeFile("./db.json", newData);
        if(isItFound){
            return "Well Done!"
        }
        else{
            return "Id is not found."
        }
    }
    catch (err) {
        console.log(err);
    }
}








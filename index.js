const employee = {
    name: 'Sam'
}

function updateEmployeeWithKeyAndValue(object, key, value){
    const newObj = {...object};

    newObj[key] = value;

    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    const newObj = object;

    newObj[key] = value;

    return newObj;
}

function deleteFromEmployeeByKey(object, key){
    const newObj = {...object};

    delete newObj[key];

    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(object, key){
    const newObj = object;

    delete newObj[key];

    return newObj;
}
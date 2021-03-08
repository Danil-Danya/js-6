var names = [];

for (var i = 0; i < Infinity; i++){
    var add = prompt("Введите команду");
    var command = add.split(", ");
    if (command[0] == 'add'){
        names.push(command[1]);
    }else if (command[0] == 'del'){
        names.splice(command[1])
    }         
    console.log(names);
    if (command[0] == 'stop'){
        break;
    }
}


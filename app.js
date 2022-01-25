//Prints out in the console log a parody of "99 Bottles"
function CodeSingAlong(friends) {
    for (i = 0; i < friends.length; i++) {
        let name = friends[i];
        let code = 99;
        console.log(name.toUpperCase() + ":");
        while (code > 0) {

            let codeCLEAR = code - 1;

            if (code > 2) {
                console.log(code + " lines of code in the file, " + code + " lines of code; " + name + " strikes one out, clears it all out, " + codeCLEAR + " lines of code in the file");
            }
            else if (code > 1) {
                console.log(code + " lines of code in the file, " + code + " lines of code; " + name + " strikes one out, clears it all out, " + codeCLEAR + " line of code in the file");
            }
            else {
                console.log(code + " line of code in the file, " + code + " line of code; " + name + " strikes one out, clears it all out, " + "no more lines of code in the file");
            }

            code--;

        }
    }
    return;
}

let friends = ["Josh", "Harry", "Jonathan", "Chris", "Michael"];
CodeSingAlong(friends);
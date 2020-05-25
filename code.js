var fs = require('fs');

var myArgs = require('minimist')(process.argv.slice(2));

//Arguments:
// -t: type(topic / subtopic / page)
// -o: original name
// -d: display name
// -u: URL
// -p: parent topic
// -s: parent subtopic

if (myArgs.h) { 
    console.log(
    'Arguments:\n\
    -t: type(topic / subtopic / page)\n\
    -o: original name\n\
    -d: display name\n\
    -u: URL\n\
    -p: parent topic\n\
    -s: parent subtopic');
}

//create main topic
if (myArgs.t == "topic") {
    //create folder for the topic
    fs.mkdirSync(myArgs.o);

    //update readme.md with link of the topic
    fs.appendFileSync('README.md', '\n* ### [' + myArgs.d + '](/' + myArgs.o + '/)');

    //update _sidebar.md with the link of the topic
    fs.appendFileSync('_sidebar.md', '\n\t* [' + myArgs.d + '](/' + myArgs.o + '/)');

    //create _sidebar.md file inside topic folder
    fs.writeFileSync(myArgs.o + '\\_navbar.md', '\n* # [Home](/)');

    //create readme.md file inside topic folder
    fs.writeFileSync(myArgs.o + '\\README.md', '# ' + myArgs.d + '\n\n\n');

    //create folder for storing images of the topic
    fs.mkdirSync('assets\\images\\' + myArgs.o);
}

// create subtopic
if (myArgs.t == "subtopic") {
    //create subtopic's folder inside parent topic's folder
    fs.mkdirSync(myArgs.p + '\\' + myArgs.o);

    //update parent topic's readme.md file with subtopic's link
    fs.appendFileSync(myArgs.p + '\\README.md', '\n* ### [' + myArgs.d + '](/' + myArgs.p + '/' + myArgs.o + '/' + myArgs.u + ')');

    //create _navbar.md file for the subtopic
    fs.writeFileSync(myArgs.p + '\\' + myArgs.o + '\\' + '_navbar.md', '\n* # [Home](/)');
    fs.appendFileSync(myArgs.p + '\\' + myArgs.o + '\\' + '_navbar.md', '\n* # [Back](/' + myArgs.p + '/)')

    //create _sidebar.md file for the subtopic
    fs.writeFileSync(myArgs.p + '\\' + myArgs.o + '\\' + '_sidebar.md', '\n* **' + myArgs.d + '**');
    
    //create folder for storing images of the subtopic
    fs.mkdirSync('assets\\images\\' + myArgs.p + '\\' + myArgs.o);

}

//create page
if (myArgs.t == "page") { 
    //create page .md file
    fs.writeFileSync(myArgs.p + '\\' + myArgs.s + '\\' + myArgs.o + '.md', '\n# ' + myArgs.d);

    //add link of the page in subtopic's _sidebar.md
    fs.appendFileSync(myArgs.p + '\\' + myArgs.s + '\\' + '_sidebar.md', '\n\t+ [' + myArgs.d +'](/'+ myArgs.p +'/'+ myArgs.s +'/'+ myArgs.o +')')
}

const {exec} = require("child_process");
const fs = require("fs");
const package = require("../package.json");

const schemas = [
    "Character",
    "Spell",
    "tags",
    "source"
];

function copyFile(file, destination){
    fs.copyFileSync(file, destination);
        console.log("copied " + file + " to " + destination);
}

const docs = "docs/";
schemas.map(schema => {
    const destination = docs + schema + '/';
    const schemaFile = schema + ".json";
    // generate documentation for the schema.
    exec("bootprint json-schema " + schemaFile + " " + destination, (err) => {
        console.log("doc " + schemaFile + ": ", err || "no errors");
        // Copy the Schema to the docs/ folder for github.io use
        copyFile(schemaFile, docs + schemaFile);
        // copy and rename the index file to root of docs
        copyFile(destination + "index.html", docs + schema + ".html");
    });
});

// Generate the index.md based on _index.md file
var index = fs.readFileSync(docs + "_index.md").toString();
index = index.replace(/%version%/g, package.version);

var schemas_list = "";
schemas.map(schema => {
    schemas_list +=  ("\n - <a href='./%schema%.json'>%schema%.json</a> | <a href='./%schema%.html'>[documentation]</a>").replace(/%schema%/g, schema);
});

index = index.replace(/%schemas%/g, schemas_list);

fs.writeFile(docs + "index.md", index, (err) => {
    console.log("write index.md:", err || "no error");
});
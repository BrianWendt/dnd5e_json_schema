const {exec} = require("child_process");
const fs = require('fs');

const schemas = [
    "Character"
];

schemas.map(schema => {
    const destination = "docs/" + schema + '/';
    const schemaFile = schema + ".json";
    exec("bootprint json-schema " + schemaFile + " " + destination, (err) => {
        console.log("doc " + schemaFile + ": ", err || "no errors");
        fs.copyFile(schemaFile, "docs/" + schemaFile, (err) => {
            console.log("copy " + schemaFile + ": ", err || "no errors");
        });
    });
});

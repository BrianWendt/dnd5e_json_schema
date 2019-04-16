const fs = require("fs");
const package = require("../package.json");
const {schemas} = require("./schemas.js");

var compiled = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "schema.json",
    "title": "JSON Schema for D&D 5e",
    "description": package.description,
    "$comment": "package version " + package.version,
    "definitions": {}
};

const schemaPath = "../schemas/";
schemas.map(schemaName => {
    const schemaFile = schemaName + ".schema.json";
    compiled.definitions[schemaName] = require(schemaPath + schemaFile);
    delete compiled.definitions[schemaName]["$schema"];
});

const json = JSON.stringify(compiled, null, 2);
fs.writeFile("src/schema.json", json, (err) => {
    console.log("write schema.json:", err || "no error");
});
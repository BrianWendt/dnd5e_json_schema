const {exec} = require("child_process");
const fs = require("fs");
const package = require("../package.json");
const {schemas} = require("./schemas.js");
const {JSONSchemaMarkdown} = require('json-schema-md-doc');

class MyDoccer extends JSONSchemaMarkdown {
    refLink(ref){
        if(ref.substring(0, 4).toLowerCase() !== "http"){
            ref += '.md';
        }
        return ref;
    }
};
const Doccer = new MyDoccer();

var index = {
    "title": "dnd5e_json_schemas Documentation",
    "description": "Visit the GitHub project @ [BrianWendt/dnd5e_json_schema](https://github.com/BrianWendt/dnd5e_json_schema)",
    "$comment": "package version `" + package.version + "`",
    "definitions": {}
};

const schemaDir = "../schemas/";
const docsDir = "./docs/";
schemas.map(schema => {
    const schemaFileName = schema + '.schema.json';
    const schemaPath = schemaDir + schemaFileName;
    const json = require(schemaPath);
    Doccer.load(json);
    Doccer.generate();
    fs.writeFileSync(docsDir + schemaFileName + '.md', Doccer.markdown);
    
    index.definitions[schema] = {
        "title": json.title,
        "description": json.description,
        "$ref": schemaFileName
    }
});

Doccer.load(index);
Doccer.generate();

fs.writeFileSync(docsDir + 'index.md', Doccer.markdown);
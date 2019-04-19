# D&D 5e Class
&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)
<b id="class.schema.json">&#36;id: Class.schema.json</b>
_JSON Schema for D&D 5e Character Class._
&#36;comment: _version 0.1.1_
Type: `object`
**_Properties_**
 - **name** `required`
	 - Type: `string`
 - **level** `required`
	 - Type: `integer`
	 - Range:  &ge; 1
 - **subtype**
	 - Type: `string`
 - **hit_die**
	 - Type: `integer`
	 - Enum Values: 
		 1. `1`
		 2. `2`
		 3. `4`
		 4. `6`
		 5. `8`
		 6. `10`
		 7. `12`
		 8. `20`
 - **spellcasting**
	 - Type: `string`
	 - Enum Values: 
		 1. _""_
		 2. _"str"_
		 3. _"dex"_
		 4. _"con"_
		 5. _"int"_
		 6. _"wis"_
		 7. _"cha"_
 - **features**
	 - Type: `array`
		 - **_Items_**
		 - &#36;ref: [feature.schema.json](feature.schema.json.md)
 - **source**
	 - &#36;ref: [source.schema.json](source.schema.json.md)

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
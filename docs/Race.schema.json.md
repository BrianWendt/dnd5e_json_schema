# D&D 5e Race
&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)
<b id="race.schema.json">&#36;id: Race.schema.json</b>
_JSON Schema for D&D 5e Creature Race._
&#36;comment: _version 0.1.1_
Type: `object`
**_Properties_**
 - **name** `required`
	 - Type: `string`
	 - Examples: 
		 1. _"Dragonborn"_
 - **subtype**
	 - Type: `string`
	 - Examples: 
		 1. _"Silver"_
 - **size**
	 - Type: `string`
	 - Enum Values: 
		 1. _"Tiny"_
		 2. _"Small"_
		 3. _"Medium"_
		 4. _"Large"_
		 5. _"Huge"_
		 6. _"Gargantuan"_
	 - Default: _"Medium"_
 - **traits**
	 - Type: `array`
		 - **_Items_**
		 - &#36;ref: [feature.schema.json](feature.schema.json.md)
		 - Examples: 
			 1. _"Amphibious"_
 - **actions**
	 - _Special actions gained by race/race-subtype._
	 - Type: `array`
		 - **_Items_**
		 - &#36;ref: [action.schema.json](action.schema.json.md)
 - **senses**
	 - &#36;ref: [senses.schema.json](senses.schema.json.md)
 - **source**
	 - &#36;ref: [source.schema.json](source.schema.json.md)

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
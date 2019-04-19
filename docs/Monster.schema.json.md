# JSON Schema for D&D 5e Monster.
&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)
<b id="monster.schema.json">&#36;id: Monster.schema.json</b>
_This schema describes a Monster. Extends Creature.schema.json_
&#36;comment: _version 0.1.1_
Type: `object`
**_Properties_**
 - **size** `required`
	 - Type: `string`
	 - Enum Values: 
		 1. _"Tiny"_
		 2. _"Small"_
		 3. _"Medium"_
		 4. _"Large"_
		 5. _"Huge"_
		 6. _"Gargantuan"_
 - **challenge_rating**
	 - Type: `number`
	 - Examples: 
		 1. `0.125`
		 2. `0.25`
		 3. `0.5`
		 4. `1`
		 5. `2`
 - **type** `required`
	 - Type: `string`
	 - Enum Values: 
		 1. _"Aberration"_
		 2. _"Beast"_
		 3. _"Celestial"_
		 4. _"Construct"_
		 5. _"Dragon"_
		 6. _"Elemental"_
		 7. _"Fey"_
		 8. _"Fiend"_
		 9. _"Giant"_
		 10. _"Humanoid"_
		 11. _"Monstrosity"_
		 12. _"Ooze"_
		 13. _"Plant"_
		 14. _"Undead"_
		 15. _"Swarm of Tiny beasts"_
 - **subtype** `required`
	 - Type: `string`
	 - Examples: 
		 1. _"Goblinoid"_
	 - Default: _"Any Race"_
 - **traits**
	 - Type: `array`
		 - **_Items_**
		 - &#36;ref: [feature.schema.json](feature.schema.json.md)
		 - _Creatures may have special traits._
		 - Examples: 
			 1. _"Spellcasting"_
 - **actions**
	 - Type: `array`
		 - **_Items_**
		 - &#36;ref: [action.schema.json](action.schema.json.md)
 - **tags**
	 - &#36;ref: [tag.schema.json](tag.schema.json.md)

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
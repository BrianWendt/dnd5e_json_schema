# JSON Schema for D&D 5e Monster.

&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)

<b id="monster.schema.json">&#36;id: Monster.schema.json</b>

_This schema describes a Monster. Extends Creature.schema.json_

&#36;comment: _version 0.1.1_

Type: `object`

**_Properties_**

 - <i id="/properties/size">size</i> `required`
	 - <i id="/properties/size">path: /properties/size</i>
	 - Type: `string`
	 - Enum Values: 
		 1. _"Tiny"_
		 2. _"Small"_
		 3. _"Medium"_
		 4. _"Large"_
		 5. _"Huge"_
		 6. _"Gargantuan"_
 - <i id="/properties/challenge_rating">challenge_rating</i>
	 - <i id="/properties/challenge_rating">path: /properties/challenge_rating</i>
	 - Type: `number`
Examples: 	 - # JSON Schema for D&D 5e Monster.

&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)

<b id="monster.schema.json">&#36;id: Monster.schema.json</b>

_This schema describes a Monster. Extends Creature.schema.json_

&#36;comment: _version 0.1.1_

Type: `object`

**_Properties_**

 - <i id="/properties/size">size</i> `required`
	 - <i id="/properties/size">path: /properties/size</i>
	 - Type: `string`
	 - Enum Values: 
		 1. _"Tiny"_
		 2. _"Small"_
		 3. _"Medium"_
		 4. _"Large"_
		 5. _"Huge"_
		 6. _"Gargantuan"_
 - <i id="/properties/challenge_rating">challenge_rating</i>
	 - <i id="/properties/challenge_rating">path: /properties/challenge_rating</i>
	 - Type: `number`
Examples: 
		 1. `0.125`
		 2. `0.25`
		 3. `0.5`
		 4. `1`
		 5. `2`
 - <i id="/properties/type">type</i> `required`
	 - <i id="/properties/type">path: /properties/type</i>
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
 - <i id="/properties/subtype">subtype</i> `required`
	 - <i id="/properties/subtype">path: /properties/subtype</i>
	 - Type: `string`
Examples: 	 - # JSON Schema for D&D 5e Monster.

&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)

<b id="monster.schema.json">&#36;id: Monster.schema.json</b>

_This schema describes a Monster. Extends Creature.schema.json_

&#36;comment: _version 0.1.1_

Type: `object`

**_Properties_**

 - <i id="/properties/size">size</i> `required`
	 - <i id="/properties/size">path: /properties/size</i>
	 - Type: `string`
	 - Enum Values: 
		 1. _"Tiny"_
		 2. _"Small"_
		 3. _"Medium"_
		 4. _"Large"_
		 5. _"Huge"_
		 6. _"Gargantuan"_
 - <i id="/properties/challenge_rating">challenge_rating</i>
	 - <i id="/properties/challenge_rating">path: /properties/challenge_rating</i>
	 - Type: `number`
Examples: 	 - # JSON Schema for D&D 5e Monster.

&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)

<b id="monster.schema.json">&#36;id: Monster.schema.json</b>

_This schema describes a Monster. Extends Creature.schema.json_

&#36;comment: _version 0.1.1_

Type: `object`

**_Properties_**

 - <i id="/properties/size">size</i> `required`
	 - <i id="/properties/size">path: /properties/size</i>
	 - Type: `string`
	 - Enum Values: 
		 1. _"Tiny"_
		 2. _"Small"_
		 3. _"Medium"_
		 4. _"Large"_
		 5. _"Huge"_
		 6. _"Gargantuan"_
 - <i id="/properties/challenge_rating">challenge_rating</i>
	 - <i id="/properties/challenge_rating">path: /properties/challenge_rating</i>
	 - Type: `number`
Examples: 
		 1. `0.125`
		 2. `0.25`
		 3. `0.5`
		 4. `1`
		 5. `2`
 - <i id="/properties/type">type</i> `required`
	 - <i id="/properties/type">path: /properties/type</i>
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
 - <i id="/properties/subtype">subtype</i> `required`
	 - <i id="/properties/subtype">path: /properties/subtype</i>
	 - Type: `string`
Examples: 
		 1. _"Goblinoid"_
	 - Default: _"Any Race"_
 - <i id="/properties/traits">traits</i>
	 - <i id="/properties/traits">path: /properties/traits</i>
	 - Type: `array`
		 - **_Items_**
		 - <i id="/properties/traits/items">path: /properties/traits/items</i>
		 - &#36;ref: [feature.schema.json](feature.schema.json.md)
		 - _Creatures may have special traits._
Examples: 		 - # JSON Schema for D&D 5e Monster.

&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)

<b id="monster.schema.json">&#36;id: Monster.schema.json</b>

_This schema describes a Monster. Extends Creature.schema.json_

&#36;comment: _version 0.1.1_

Type: `object`

**_Properties_**

 - <i id="/properties/size">size</i> `required`
	 - <i id="/properties/size">path: /properties/size</i>
	 - Type: `string`
	 - Enum Values: 
		 1. _"Tiny"_
		 2. _"Small"_
		 3. _"Medium"_
		 4. _"Large"_
		 5. _"Huge"_
		 6. _"Gargantuan"_
 - <i id="/properties/challenge_rating">challenge_rating</i>
	 - <i id="/properties/challenge_rating">path: /properties/challenge_rating</i>
	 - Type: `number`
Examples: 	 - # JSON Schema for D&D 5e Monster.

&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)

<b id="monster.schema.json">&#36;id: Monster.schema.json</b>

_This schema describes a Monster. Extends Creature.schema.json_

&#36;comment: _version 0.1.1_

Type: `object`

**_Properties_**

 - <i id="/properties/size">size</i> `required`
	 - <i id="/properties/size">path: /properties/size</i>
	 - Type: `string`
	 - Enum Values: 
		 1. _"Tiny"_
		 2. _"Small"_
		 3. _"Medium"_
		 4. _"Large"_
		 5. _"Huge"_
		 6. _"Gargantuan"_
 - <i id="/properties/challenge_rating">challenge_rating</i>
	 - <i id="/properties/challenge_rating">path: /properties/challenge_rating</i>
	 - Type: `number`
Examples: 
		 1. `0.125`
		 2. `0.25`
		 3. `0.5`
		 4. `1`
		 5. `2`
 - <i id="/properties/type">type</i> `required`
	 - <i id="/properties/type">path: /properties/type</i>
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
 - <i id="/properties/subtype">subtype</i> `required`
	 - <i id="/properties/subtype">path: /properties/subtype</i>
	 - Type: `string`
Examples: 	 - # JSON Schema for D&D 5e Monster.

&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)

<b id="monster.schema.json">&#36;id: Monster.schema.json</b>

_This schema describes a Monster. Extends Creature.schema.json_

&#36;comment: _version 0.1.1_

Type: `object`

**_Properties_**

 - <i id="/properties/size">size</i> `required`
	 - <i id="/properties/size">path: /properties/size</i>
	 - Type: `string`
	 - Enum Values: 
		 1. _"Tiny"_
		 2. _"Small"_
		 3. _"Medium"_
		 4. _"Large"_
		 5. _"Huge"_
		 6. _"Gargantuan"_
 - <i id="/properties/challenge_rating">challenge_rating</i>
	 - <i id="/properties/challenge_rating">path: /properties/challenge_rating</i>
	 - Type: `number`
Examples: 	 - # JSON Schema for D&D 5e Monster.

&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)

<b id="monster.schema.json">&#36;id: Monster.schema.json</b>

_This schema describes a Monster. Extends Creature.schema.json_

&#36;comment: _version 0.1.1_

Type: `object`

**_Properties_**

 - <i id="/properties/size">size</i> `required`
	 - <i id="/properties/size">path: /properties/size</i>
	 - Type: `string`
	 - Enum Values: 
		 1. _"Tiny"_
		 2. _"Small"_
		 3. _"Medium"_
		 4. _"Large"_
		 5. _"Huge"_
		 6. _"Gargantuan"_
 - <i id="/properties/challenge_rating">challenge_rating</i>
	 - <i id="/properties/challenge_rating">path: /properties/challenge_rating</i>
	 - Type: `number`
Examples: 
		 1. `0.125`
		 2. `0.25`
		 3. `0.5`
		 4. `1`
		 5. `2`
 - <i id="/properties/type">type</i> `required`
	 - <i id="/properties/type">path: /properties/type</i>
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
 - <i id="/properties/subtype">subtype</i> `required`
	 - <i id="/properties/subtype">path: /properties/subtype</i>
	 - Type: `string`
Examples: 
		 1. _"Goblinoid"_
	 - Default: _"Any Race"_
 - <i id="/properties/traits">traits</i>
	 - <i id="/properties/traits">path: /properties/traits</i>
	 - Type: `array`
		 - **_Items_**
		 - <i id="/properties/traits/items">path: /properties/traits/items</i>
		 - &#36;ref: [feature.schema.json](feature.schema.json.md)
		 - _Creatures may have special traits._
Examples: 
			 1. _"Spellcasting"_
 - <i id="/properties/actions">actions</i>
	 - <i id="/properties/actions">path: /properties/actions</i>
	 - Type: `array`
		 - **_Items_**
		 - <i id="/properties/actions/items">path: /properties/actions/items</i>
		 - &#36;ref: [action.schema.json](action.schema.json.md)
 - <i id="/properties/tags">tags</i>
	 - <i id="/properties/tags">path: /properties/tags</i>
	 - &#36;ref: [tag.schema.json](tag.schema.json.md)

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
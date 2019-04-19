# D&D 5e Race

&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)

<b id="race.schema.json">&#36;id: Race.schema.json</b>

_JSON Schema for D&D 5e Creature Race._

&#36;comment: _version 0.1.1_

Type: `object`

**_Properties_**

 - <i id="/properties/name">name</i> `required`
	 - <i id="/properties/name">path: /properties/name</i>
	 - Type: `string`
	 - Examples: 
		 1. _"Dragonborn"_
 - <i id="/properties/subtype">subtype</i>
	 - <i id="/properties/subtype">path: /properties/subtype</i>
	 - Type: `string`
	 - Examples: 
		 1. _"Silver"_
 - <i id="/properties/size">size</i>
	 - <i id="/properties/size">path: /properties/size</i>
	 - Type: `string`
	 - Enum Values: 
		 1. _"Tiny"_
		 2. _"Small"_
		 3. _"Medium"_
		 4. _"Large"_
		 5. _"Huge"_
		 6. _"Gargantuan"_
	 - Default: _"Medium"_
 - <i id="/properties/traits">traits</i>
	 - <i id="/properties/traits">path: /properties/traits</i>
	 - Type: `array`
		 - **_Items_**
		 - <i id="/properties/traits/items">path: /properties/traits/items</i>
		 - &#36;ref: [feature.schema.json](feature.schema.json.md)
		 - Examples: 
			 1. _"Amphibious"_
 - <i id="/properties/actions">actions</i>
	 - <i id="/properties/actions">path: /properties/actions</i>
	 - _Special actions gained by race/race-subtype._
	 - Type: `array`
		 - **_Items_**
		 - <i id="/properties/actions/items">path: /properties/actions/items</i>
		 - &#36;ref: [action.schema.json](action.schema.json.md)
 - <i id="/properties/senses">senses</i>
	 - <i id="/properties/senses">path: /properties/senses</i>
	 - &#36;ref: [senses.schema.json](senses.schema.json.md)
 - <i id="/properties/source">source</i>
	 - <i id="/properties/source">path: /properties/source</i>
	 - &#36;ref: [source.schema.json](source.schema.json.md)

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
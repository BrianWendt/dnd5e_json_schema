# D&D 5e Class

&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)

<b id="class.schema.json">&#36;id: Class.schema.json</b>

_JSON Schema for D&D 5e Character Class._

&#36;comment: _version 0.1.1_

Type: `object`

**_Properties_**

 - <i id="/properties/name">name</i> `required`
	 - <i id="/properties/name">path: /properties/name</i>
	 - Type: `string`
 - <i id="/properties/level">level</i> `required`
	 - <i id="/properties/level">path: /properties/level</i>
	 - Type: `integer`
	 - Range:  &ge; 1
 - <i id="/properties/subtype">subtype</i>
	 - <i id="/properties/subtype">path: /properties/subtype</i>
	 - Type: `string`
 - <i id="/properties/hit_die">hit_die</i>
	 - <i id="/properties/hit_die">path: /properties/hit_die</i>
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
 - <i id="/properties/spellcasting">spellcasting</i>
	 - <i id="/properties/spellcasting">path: /properties/spellcasting</i>
	 - Type: `string`
	 - Enum Values: 
		 1. _""_
		 2. _"str"_
		 3. _"dex"_
		 4. _"con"_
		 5. _"int"_
		 6. _"wis"_
		 7. _"cha"_
 - <i id="/properties/features">features</i>
	 - <i id="/properties/features">path: /properties/features</i>
	 - Type: `array`
		 - **_Items_**
		 - <i id="/properties/features/items">path: /properties/features/items</i>
		 - &#36;ref: [feature.schema.json](feature.schema.json.md)
 - <i id="/properties/source">source</i>
	 - <i id="/properties/source">path: /properties/source</i>
	 - &#36;ref: [source.schema.json](source.schema.json.md)

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
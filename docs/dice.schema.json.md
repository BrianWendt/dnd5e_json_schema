# JSON Schema for dice.

&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)

<b id="dice.schema.json">&#36;id: dice.schema.json</b>

_This schema describes a the dice, by number of sides, used in D&D._

&#36;comment: _version 0.1.1_

Type: `object`

**_Properties_**

 - <i id="/properties/sides">sides</i>
	 - <i id="/properties/sides">path: /properties/sides</i>
	 - &#36;comment: _d1 is included for rolls that auto = 1._
	 - Type: `integer`
	 - Enum Values: 
		 1. `1`
		 2. `4`
		 3. `6`
		 4. `8`
		 5. `10`
		 6. `12`
		 7. `20`
		 8. `100`
	 - Default: `4`
 - <i id="/properties/count">count</i>
	 - <i id="/properties/count">path: /properties/count</i>
	 - Type: `integer`
	 - Default: `1`
	 - Range: between 1 and 60
 - <i id="/properties/mod">mod</i>
	 - <i id="/properties/mod">path: /properties/mod</i>
	 - Type: `integer`
	 - Default: `0`

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
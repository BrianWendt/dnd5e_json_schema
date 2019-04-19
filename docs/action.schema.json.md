# JSON Schema for D&D 5e Creature action.
&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)
<b id="action.schema.json">&#36;id: action.schema.json</b>
_This schema describes an action the creature/character may use._
&#36;comment: _version 0.1.1_
Type: `object`
**_Properties_**
 - **name** `required`
	 - Type: `string`
 - **description** `required`
	 - Type: `string`
 - **attack_bonus**
	 - Type: `integer`
	 - Default: `0`
 - **damage_dice**
	 - &#36;ref: [dice.schema.json](dice.schema.json.md)
 - **damage_bonus**
	 - Type: `integer`
	 - Default: `0`
 - **legendary**
	 - Type: `boolean`
	 - Default: _false_
 - **reaction**
	 - Type: `boolean`
	 - Default: _false_
 - **source**
	 - &#36;ref: [source.schema.json](source.schema.json.md)

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
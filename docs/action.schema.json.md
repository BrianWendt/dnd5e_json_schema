# JSON Schema for D&D 5e Creature action.

&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)

<b id="action.schema.json">&#36;id: action.schema.json</b>

_This schema describes an action the creature/character may use._

&#36;comment: _version 0.1.1_

Type: `object`

**_Properties_**

 - <i id="/properties/name">name</i> `required`
	 - <i id="/properties/name">path: /properties/name</i>
	 - Type: `string`
 - <i id="/properties/description">description</i> `required`
	 - <i id="/properties/description">path: /properties/description</i>
	 - Type: `string`
 - <i id="/properties/attack_bonus">attack_bonus</i>
	 - <i id="/properties/attack_bonus">path: /properties/attack_bonus</i>
	 - Type: `integer`
	 - Default: `0`
 - <i id="/properties/damage_dice">damage_dice</i>
	 - <i id="/properties/damage_dice">path: /properties/damage_dice</i>
	 - &#36;ref: [dice.schema.json](dice.schema.json.md)
 - <i id="/properties/damage_bonus">damage_bonus</i>
	 - <i id="/properties/damage_bonus">path: /properties/damage_bonus</i>
	 - Type: `integer`
	 - Default: `0`
 - <i id="/properties/legendary">legendary</i>
	 - <i id="/properties/legendary">path: /properties/legendary</i>
	 - Type: `boolean`
	 - Default: _false_
 - <i id="/properties/reaction">reaction</i>
	 - <i id="/properties/reaction">path: /properties/reaction</i>
	 - Type: `boolean`
	 - Default: _false_
 - <i id="/properties/source">source</i>
	 - <i id="/properties/source">path: /properties/source</i>
	 - &#36;ref: [source.schema.json](source.schema.json.md)

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
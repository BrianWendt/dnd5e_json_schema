# JSON Schema for D&D 5e weapon.

&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)

<b id="weapon.schema.json">&#36;id: weapon.schema.json</b>

_This schema describes a weapon. Extends item.schema.json_

&#36;comment: _version 0.1.1_

Type: `object`

**_Properties_**

 - <i id="/properties/category">category</i>
	 - <i id="/properties/category">path: /properties/category</i>
	 - Type: `string`
 - <i id="/properties/damage">damage</i> `required`
	 - <i id="/properties/damage">path: /properties/damage</i>
	 - Type: `object`
	 - **_Properties_**
		 - <i id="/properties/damage/properties/dice">damage&thinsp;.&thinsp;dice</i>
			 - <i id="/properties/damage/properties/dice">path: /properties/damage/properties/dice</i>
			 - &#36;ref: [dice.schema.json](dice.schema.json.md)
		 - <i id="/properties/damage/properties/type">damage&thinsp;.&thinsp;type</i>
			 - <i id="/properties/damage/properties/type">path: /properties/damage/properties/type</i>
			 - &#36;ref: [damage_type.schema.json](damage_type.schema.json.md)
 - <i id="/properties/versatile_damage">versatile_damage</i>
	 - <i id="/properties/versatile_damage">path: /properties/versatile_damage</i>
	 - Type: `object`
	 - **_Properties_**
		 - <i id="/properties/versatile_damage/properties/dice">versatile_damage&thinsp;.&thinsp;dice</i>
			 - <i id="/properties/versatile_damage/properties/dice">path: /properties/versatile_damage/properties/dice</i>
			 - &#36;ref: [dice.schema.json](dice.schema.json.md)
 - <i id="/properties/range">range</i>
	 - <i id="/properties/range">path: /properties/range</i>
	 - Type: `object`
	 - **_Properties_**
		 - <i id="/properties/range/properties/normal">range&thinsp;.&thinsp;normal</i>
			 - <i id="/properties/range/properties/normal">path: /properties/range/properties/normal</i>
			 - Type: `integer`
			 - Default: `5`
		 - <i id="/properties/range/properties/long">range&thinsp;.&thinsp;long</i>
			 - <i id="/properties/range/properties/long">path: /properties/range/properties/long</i>
			 - Type: `integer`
			 - Default: `0`
 - <i id="/properties/throw_range">throw_range</i>
	 - <i id="/properties/throw_range">path: /properties/throw_range</i>
	 - Type: `object`
	 - **_Properties_**
		 - <i id="/properties/throw_range/properties/normal">throw_range&thinsp;.&thinsp;normal</i>
			 - <i id="/properties/throw_range/properties/normal">path: /properties/throw_range/properties/normal</i>
			 - Type: `integer`
			 - Default: `0`
		 - <i id="/properties/throw_range/properties/long">throw_range&thinsp;.&thinsp;long</i>
			 - <i id="/properties/throw_range/properties/long">path: /properties/throw_range/properties/long</i>
			 - Type: `integer`
			 - Default: `0`
 - <i id="/properties/properties">properties</i>
	 - <i id="/properties/properties">path: /properties/properties</i>
	 - Type: `object`
	 - **_Properties_**
		 - <i id="/properties/properties/properties/Ammunition">properties&thinsp;.&thinsp;Ammunition</i>
			 - <i id="/properties/properties/properties/Ammunition">path: /properties/properties/properties/Ammunition</i>
			 - Type: `string`
		 - <i id="/properties/properties/properties/Finnesse">properties&thinsp;.&thinsp;Finnesse</i>
			 - <i id="/properties/properties/properties/Finnesse">path: /properties/properties/properties/Finnesse</i>
			 - Type: `boolean`
			 - Default: _false_
		 - <i id="/properties/properties/properties/Heavy">properties&thinsp;.&thinsp;Heavy</i>
			 - <i id="/properties/properties/properties/Heavy">path: /properties/properties/properties/Heavy</i>
			 - Type: `boolean`
			 - Default: _false_
		 - <i id="/properties/properties/properties/Light">properties&thinsp;.&thinsp;Light</i>
			 - <i id="/properties/properties/properties/Light">path: /properties/properties/properties/Light</i>
			 - Type: `boolean`
			 - Default: _false_
		 - <i id="/properties/properties/properties/Loading">properties&thinsp;.&thinsp;Loading</i>
			 - <i id="/properties/properties/properties/Loading">path: /properties/properties/properties/Loading</i>
			 - Type: `boolean`
			 - Default: _false_
		 - <i id="/properties/properties/properties/Monk">properties&thinsp;.&thinsp;Monk</i>
			 - <i id="/properties/properties/properties/Monk">path: /properties/properties/properties/Monk</i>
			 - Type: `boolean`
			 - Default: _false_
		 - <i id="/properties/properties/properties/Reach">properties&thinsp;.&thinsp;Reach</i>
			 - <i id="/properties/properties/properties/Reach">path: /properties/properties/properties/Reach</i>
			 - Type: `boolean`
			 - Default: _false_
		 - <i id="/properties/properties/properties/Thrown">properties&thinsp;.&thinsp;Thrown</i>
			 - <i id="/properties/properties/properties/Thrown">path: /properties/properties/properties/Thrown</i>
			 - Type: `boolean`
			 - Default: _false_
		 - <i id="/properties/properties/properties/TwoHanded">properties&thinsp;.&thinsp;TwoHanded</i>
			 - <i id="/properties/properties/properties/TwoHanded">path: /properties/properties/properties/TwoHanded</i>
			 - Type: `boolean`
			 - Default: _false_
		 - <i id="/properties/properties/properties/Versatile">properties&thinsp;.&thinsp;Versatile</i>
			 - <i id="/properties/properties/properties/Versatile">path: /properties/properties/properties/Versatile</i>
			 - Type: `boolean`
			 - Default: _false_
 - <i id="/properties/equipped">equipped</i>
	 - <i id="/properties/equipped">path: /properties/equipped</i>
	 - Type: `boolean`
	 - Default: _false_

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
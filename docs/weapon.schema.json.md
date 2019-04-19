# JSON Schema for D&D 5e weapon.
&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)
<b id="weapon.schema.json">&#36;id: weapon.schema.json</b>
_This schema describes a weapon. Extends item.schema.json_
&#36;comment: _version 0.1.1_
Type: `object`
**_Properties_**
 - **category**
	 - Type: `string`
 - **damage** `required`
	 - Type: `object`
	 - **_Properties_**
		 - **damage&thinsp;.&thinsp;dice**
			 - &#36;ref: [dice.schema.json](dice.schema.json.md)
		 - **damage&thinsp;.&thinsp;type**
			 - &#36;ref: [damage_type.schema.json](damage_type.schema.json.md)
 - **versatile_damage**
	 - Type: `object`
	 - **_Properties_**
		 - **versatile_damage&thinsp;.&thinsp;dice**
			 - &#36;ref: [dice.schema.json](dice.schema.json.md)
 - **range**
	 - Type: `object`
	 - **_Properties_**
		 - **range&thinsp;.&thinsp;normal**
			 - Type: `integer`
			 - Default: `5`
		 - **range&thinsp;.&thinsp;long**
			 - Type: `integer`
			 - Default: `0`
 - **throw_range**
	 - Type: `object`
	 - **_Properties_**
		 - **throw_range&thinsp;.&thinsp;normal**
			 - Type: `integer`
			 - Default: `0`
		 - **throw_range&thinsp;.&thinsp;long**
			 - Type: `integer`
			 - Default: `0`
 - **properties**
	 - Type: `object`
	 - **_Properties_**
		 - **properties&thinsp;.&thinsp;Ammunition**
			 - Type: `string`
		 - **properties&thinsp;.&thinsp;Finnesse**
			 - Type: `boolean`
			 - Default: _false_
		 - **properties&thinsp;.&thinsp;Heavy**
			 - Type: `boolean`
			 - Default: _false_
		 - **properties&thinsp;.&thinsp;Light**
			 - Type: `boolean`
			 - Default: _false_
		 - **properties&thinsp;.&thinsp;Loading**
			 - Type: `boolean`
			 - Default: _false_
		 - **properties&thinsp;.&thinsp;Monk**
			 - Type: `boolean`
			 - Default: _false_
		 - **properties&thinsp;.&thinsp;Reach**
			 - Type: `boolean`
			 - Default: _false_
		 - **properties&thinsp;.&thinsp;Thrown**
			 - Type: `boolean`
			 - Default: _false_
		 - **properties&thinsp;.&thinsp;TwoHanded**
			 - Type: `boolean`
			 - Default: _false_
		 - **properties&thinsp;.&thinsp;Versatile**
			 - Type: `boolean`
			 - Default: _false_
 - **equipped**
	 - Type: `boolean`
	 - Default: _false_

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
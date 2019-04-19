# JSON Schema for D&D 5e physical item.

&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)

<b id="item.schema.json">&#36;id: item.schema.json</b>

_This schema describes physical item._

&#36;comment: _version 0.1.1_

Type: `object`

**_Properties_**

 - <i id="/properties/name">name</i> `required`
	 - <i id="/properties/name">path: /properties/name</i>
	 - Type: `string`
 - <i id="/properties/weight">weight</i>
	 - <i id="/properties/weight">path: /properties/weight</i>
	 - Type: `number`
	 - Default: `0`
 - <i id="/properties/description">description</i>
	 - <i id="/properties/description">path: /properties/description</i>
	 - Type: `string`
 - <i id="/properties/magic">magic</i>
	 - <i id="/properties/magic">path: /properties/magic</i>
	 - Type: `boolean`
	 - Default: _false_
 - <i id="/properties/source">source</i>
	 - <i id="/properties/source">path: /properties/source</i>
	 - &#36;ref: [source.schema.json](source.schema.json.md)

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
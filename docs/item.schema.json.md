# JSON Schema for D&D 5e physical item.
&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)
<b id="item.schema.json">&#36;id: item.schema.json</b>
_This schema describes physical item._
&#36;comment: _version 0.1.1_
Type: `object`
**_Properties_**
 - **name** `required`
	 - Type: `string`
 - **weight**
	 - Type: `number`
	 - Default: `0`
 - **description**
	 - Type: `string`
 - **magic**
	 - Type: `boolean`
	 - Default: _false_
 - **source**
	 - &#36;ref: [source.schema.json](source.schema.json.md)

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
# JSON Schema for images.
&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)
<b id="image.schema.json">&#36;id: image.schema.json</b>
_This schema describes an image asset._
&#36;comment: _version 0.1.1_
Type: `object`
**_Properties_**
 - **uri**
	 - Type: `string`
	 - Format: uri
 - **alt** `required`
	 - _The text to display if image cannot load. `alt` should describe the image generally._
	 - Type: `string`
 - **caption**
	 - _The text to display below the image._
	 - Type: `string`
 - **source**
	 - &#36;ref: [source.schema.json](source.schema.json.md)

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
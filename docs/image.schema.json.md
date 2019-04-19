# JSON Schema for images.

&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)

<b id="image.schema.json">&#36;id: image.schema.json</b>

_This schema describes an image asset._

&#36;comment: _version 0.1.1_

Type: `object`

**_Properties_**

 - <i id="/properties/uri">uri</i>
	 - <i id="/properties/uri">path: /properties/uri</i>
	 - Type: `string`
	 - Format: "uri"
 - <i id="/properties/alt">alt</i> `required`
	 - <i id="/properties/alt">path: /properties/alt</i>
	 - _The text to display if image cannot load. `alt` should describe the image generally._
	 - Type: `string`
 - <i id="/properties/caption">caption</i>
	 - <i id="/properties/caption">path: /properties/caption</i>
	 - _The text to display below the image._
	 - Type: `string`
 - <i id="/properties/source">source</i>
	 - <i id="/properties/source">path: /properties/source</i>
	 - &#36;ref: [source.schema.json](source.schema.json.md)

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
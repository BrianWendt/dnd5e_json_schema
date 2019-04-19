&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)

<b id="spell.schema.json">&#36;id: Spell.schema.json</b>

_This schema describes a 5e spell. <br/>Samples may be found at https://github.com/BrianWendt/dnd5e_json_schema/tree/master/samples/Spell/_

&#36;comment: _version 0.1.1_

Type: `object`

**_Properties_**

 - <i id="/properties/name">name</i> `required`
	 - <i id="/properties/name">path: /properties/name</i>
	 - Type: `string`
	 - Examples: 
		 1. _"Acid Splash"_
 - <i id="/properties/description">description</i> `required`
	 - <i id="/properties/description">path: /properties/description</i>
	 - Type: `string`
 - <i id="/properties/higher_level">higher_level</i>
	 - <i id="/properties/higher_level">path: /properties/higher_level</i>
	 - Type: `string`
 - <i id="/properties/level">level</i> `required`
	 - <i id="/properties/level">path: /properties/level</i>
	 - Type: `string`
	 - Examples: 
		 1. _"Cantrip"_
		 2. _"1"_
		 3. _"2"_
		 4. _"3"_
		 5. _"4"_
 - <i id="/properties/casting_time">casting_time</i> `required`
	 - <i id="/properties/casting_time">path: /properties/casting_time</i>
	 - Type: `string`
	 - Default: _"1 Action"_
 - <i id="/properties/range_area">range_area</i> `required`
	 - <i id="/properties/range_area">path: /properties/range_area</i>
	 - Type: `string`
	 - Examples: 
		 1. _"60ft"_
		 2. _"Self"_
 - <i id="/properties/components">components</i> `required`
	 - <i id="/properties/components">path: /properties/components</i>
	 - Type: `array`
		 - **_Items_**
		 - <i id="/properties/components/items">path: /properties/components/items</i>
		 - Type: `string`
		 - Enum Values: 
			 1. _"V"_
			 2. _"S"_
			 3. _"M"_
			 4. _"F"_
			 5. _"DF"_
			 6. _"XP"_
 - <i id="/properties/material">material</i>
	 - <i id="/properties/material">path: /properties/material</i>
	 - Type: `string`
 - <i id="/properties/ritual">ritual</i>
	 - <i id="/properties/ritual">path: /properties/ritual</i>
	 - Type: `boolean`
	 - Default: _false_
 - <i id="/properties/concentration">concentration</i>
	 - <i id="/properties/concentration">path: /properties/concentration</i>
	 - Type: `boolean`
	 - Default: _false_
 - <i id="/properties/duration">duration</i> `required`
	 - <i id="/properties/duration">path: /properties/duration</i>
	 - Type: `string`
	 - Examples: 
		 1. _"Instantaneous"_
 - <i id="/properties/school">school</i>
	 - <i id="/properties/school">path: /properties/school</i>
	 - Type: `string`
	 - Examples: 
		 1. _"Conjuring"_
 - <i id="/properties/attack_save">attack_save</i>
	 - <i id="/properties/attack_save">path: /properties/attack_save</i>
	 - Type: `string`
	 - Examples: 
		 1. _"DEX Save"_
		 2. _"Ranged"_
 - <i id="/properties/damage_effect">damage_effect</i>
	 - <i id="/properties/damage_effect">path: /properties/damage_effect</i>
	 - Type: `string`
	 - Examples: 
		 1. _"Acid"_
 - <i id="/properties/tags">tags</i>
	 - <i id="/properties/tags">path: /properties/tags</i>
	 - &#36;ref: [tag.schema.json](tag.schema.json.md)
	 - Examples: 
		 1. _"Bard"_
		 2. _"Wizard"_
		 3. _"Warlock"_
 - <i id="/properties/source">source</i>
	 - <i id="/properties/source">path: /properties/source</i>
	 - &#36;ref: [source.schema.json](source.schema.json.md)

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
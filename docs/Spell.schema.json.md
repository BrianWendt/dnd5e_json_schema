&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)
<b id="spell.schema.json">&#36;id: Spell.schema.json</b>
_This schema describes a 5e spell. <br/>Samples may be found at https://github.com/BrianWendt/dnd5e_json_schema/tree/master/samples/Spell/_
&#36;comment: _version 0.1.1_
Type: `object`
**_Properties_**
 - **name** `required`
	 - Type: `string`
	 - Examples: 
		 1. _"Acid Splash"_
 - **description** `required`
	 - Type: `string`
 - **higher_level**
	 - Type: `string`
 - **level** `required`
	 - Type: `string`
	 - Examples: 
		 1. _"Cantrip"_
		 2. _"1"_
		 3. _"2"_
		 4. _"3"_
		 5. _"4"_
 - **casting_time** `required`
	 - Type: `string`
	 - Default: _"1 Action"_
 - **range_area** `required`
	 - Type: `string`
	 - Examples: 
		 1. _"60ft"_
		 2. _"Self"_
 - **components** `required`
	 - Type: `array`
		 - **_Items_**
		 - Type: `string`
		 - Enum Values: 
			 1. _"V"_
			 2. _"S"_
			 3. _"M"_
			 4. _"F"_
			 5. _"DF"_
			 6. _"XP"_
 - **material**
	 - Type: `string`
 - **ritual**
	 - Type: `boolean`
	 - Default: _false_
 - **concentration**
	 - Type: `boolean`
	 - Default: _false_
 - **duration** `required`
	 - Type: `string`
	 - Examples: 
		 1. _"Instantaneous"_
 - **school**
	 - Type: `string`
	 - Examples: 
		 1. _"Conjuring"_
 - **attack_save**
	 - Type: `string`
	 - Examples: 
		 1. _"DEX Save"_
		 2. _"Ranged"_
 - **damage_effect**
	 - Type: `string`
	 - Examples: 
		 1. _"Acid"_
 - **tags**
	 - &#36;ref: [tag.schema.json](tag.schema.json.md)
	 - Examples: 
		 1. _"Bard"_
		 2. _"Wizard"_
		 3. _"Warlock"_
 - **source**
	 - &#36;ref: [source.schema.json](source.schema.json.md)

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
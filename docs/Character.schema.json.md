# D&D 5e Character
&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)
<b id="character.schema.json">&#36;id: Character.schema.json</b>
_JSON Schema for D&D 5e Character data. Extends Creature.schema.json<br>Samples may be found on [GitHub](https://github.com/BrianWendt/dnd5e_json_schema/tree/master/samples/Character)_
&#36;comment: _version 0.1.1_
Type: `object`
**_Properties_**
 - **nickname**
	 - Type: `string`
 - **player** `required`
	 - Type: `object`
	 - **_Properties_**
		 - **player&thinsp;.&thinsp;name**
			 - Type: `string`
			 - Default: _"NPC"_
		 - **player&thinsp;.&thinsp;id**
			 - _Wizards' DCI or other identifier._
			 - Type: `string`
 - **xp**
	 - Type: `integer`
	 - Default: `0`
	 - Range:  &ge; 0
 - **race** `required`
	 - &#36;ref: [Race.schema.json](Race.schema.json.md)
 - **classes**
	 - Type: `array`
		 - **_Items_**
		 - &#36;ref: [Class.schema.json](Class.schema.json.md)
 - **background**
	 - Type: `object`
	 - **_Properties_**
		 - **background&thinsp;.&thinsp;name**
			 - Type: `string`
		 - **background&thinsp;.&thinsp;option**
			 - Type: `string`
		 - **background&thinsp;.&thinsp;description**
			 - Type: `string`
		 - **background&thinsp;.&thinsp;source**
			 - &#36;ref: [source.schema.json](source.schema.json.md)
 - **details**
	 - Type: `object`
	 - **_Properties_**
		 - **details&thinsp;.&thinsp;age**
			 - Type: `integer`
			 - Range:  &ge; 0
		 - **details&thinsp;.&thinsp;eyes**
			 - Type: `string`
		 - **details&thinsp;.&thinsp;hair**
			 - Type: `string`
		 - **details&thinsp;.&thinsp;skin**
			 - Type: `string`
		 - **details&thinsp;.&thinsp;weight**
			 - Type: `integer`
			 - Range:  &ge; 0
		 - **details&thinsp;.&thinsp;height**
			 - Type: `string`
		 - **details&thinsp;.&thinsp;personality**
			 - Type: `string`
		 - **details&thinsp;.&thinsp;ideal**
			 - Type: `string`
		 - **details&thinsp;.&thinsp;bond**
			 - Type: `string`
		 - **details&thinsp;.&thinsp;flaw**
			 - Type: `string`
		 - **details&thinsp;.&thinsp;backstory**
			 - Type: `string`
		 - **details&thinsp;.&thinsp;physical**
			 - Type: `string`
 - **weapon_proficiencies**
	 - Type: `array`
		 - **_Items_**
		 - Type: `string`
		 - Examples: 
			 1. _"Simple Weapons"_
			 2. _"Martial Weapons"_
 - **armor_proficiencies**
	 - Type: `array`
		 - **_Items_**
		 - Type: `string`
		 - Examples: 
			 1. _"Light Armor"_
			 2. _"Medium Armor"_
			 3. _"Heavy Armor"_
			 4. _"Shields"_
 - **tool_proficiencies**
	 - Type: `array`
		 - **_Items_**
		 - Type: `string`
		 - Examples: 
			 1. _"Artisan's Tools"_
			 2. _"Disguise Kit"_
 - **feats**
	 - Type: `array`
		 - **_Items_**
		 - &#36;ref: [feat.schema.json](feat.schema.json.md)
 - **spells**
	 - Type: `array`
		 - **_Items_**
		 - &#36;ref: [Spell.schema.json](Spell.schema.json.md)
 - **weapons**
	 - Type: `array`
		 - **_Items_**
		 - &#36;ref: [weapon.schema.json](weapon.schema.json.md)
 - **equipment**
	 - Type: `array`
		 - **_Items_**
		 - &#36;ref: [equipment.schema.json](equipment.schema.json.md)
 - **treasure**
	 - Type: `object`
	 - **_Properties_**
		 - **treasure&thinsp;.&thinsp;pp**
			 - _Platimum_
			 - Type: `number`
			 - Default: `0`
		 - **treasure&thinsp;.&thinsp;ep**
			 - _Electrum_
			 - Type: `number`
			 - Default: `0`
		 - **treasure&thinsp;.&thinsp;gp**
			 - _Gold_
			 - Type: `number`
			 - Default: `0`
		 - **treasure&thinsp;.&thinsp;sp**
			 - _Silver_
			 - Type: `number`
			 - Default: `0`
		 - **treasure&thinsp;.&thinsp;cp**
			 - _Copper_
			 - Type: `number`
			 - Default: `0`

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
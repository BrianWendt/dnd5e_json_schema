# D&D 5e Character

&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)

<b id="character.schema.json">&#36;id: Character.schema.json</b>

_JSON Schema for D&D 5e Character data. Extends Creature.schema.json<br>Samples may be found on [GitHub](https://github.com/BrianWendt/dnd5e_json_schema/tree/master/samples/Character)_

&#36;comment: _version 0.1.1_

Type: `object`

**_Properties_**

 - <i id="/properties/nickname">nickname</i>
	 - <i id="/properties/nickname">path: /properties/nickname</i>
	 - Type: `string`
 - <i id="/properties/player">player</i> `required`
	 - <i id="/properties/player">path: /properties/player</i>
	 - Type: `object`
	 - **_Properties_**
		 - <i id="/properties/player/properties/name">player&thinsp;.&thinsp;name</i>
			 - <i id="/properties/player/properties/name">path: /properties/player/properties/name</i>
			 - Type: `string`
			 - Default: _"NPC"_
		 - <i id="/properties/player/properties/id">player&thinsp;.&thinsp;id</i>
			 - <i id="/properties/player/properties/id">path: /properties/player/properties/id</i>
			 - _Wizards' DCI or other identifier._
			 - Type: `string`
 - <i id="/properties/xp">xp</i>
	 - <i id="/properties/xp">path: /properties/xp</i>
	 - Type: `integer`
	 - Default: `0`
	 - Range:  &ge; 0
 - <i id="/properties/race">race</i> `required`
	 - <i id="/properties/race">path: /properties/race</i>
	 - &#36;ref: [Race.schema.json](Race.schema.json.md)
 - <i id="/properties/classes">classes</i>
	 - <i id="/properties/classes">path: /properties/classes</i>
	 - Type: `array`
		 - **_Items_**
		 - <i id="/properties/classes/items">path: /properties/classes/items</i>
		 - &#36;ref: [Class.schema.json](Class.schema.json.md)
 - <i id="/properties/background">background</i>
	 - <i id="/properties/background">path: /properties/background</i>
	 - Type: `object`
	 - **_Properties_**
		 - <i id="/properties/background/properties/name">background&thinsp;.&thinsp;name</i>
			 - <i id="/properties/background/properties/name">path: /properties/background/properties/name</i>
			 - Type: `string`
		 - <i id="/properties/background/properties/option">background&thinsp;.&thinsp;option</i>
			 - <i id="/properties/background/properties/option">path: /properties/background/properties/option</i>
			 - Type: `string`
		 - <i id="/properties/background/properties/description">background&thinsp;.&thinsp;description</i>
			 - <i id="/properties/background/properties/description">path: /properties/background/properties/description</i>
			 - Type: `string`
		 - <i id="/properties/background/properties/source">background&thinsp;.&thinsp;source</i>
			 - <i id="/properties/background/properties/source">path: /properties/background/properties/source</i>
			 - &#36;ref: [source.schema.json](source.schema.json.md)
 - <i id="/properties/details">details</i>
	 - <i id="/properties/details">path: /properties/details</i>
	 - Type: `object`
	 - **_Properties_**
		 - <i id="/properties/details/properties/age">details&thinsp;.&thinsp;age</i>
			 - <i id="/properties/details/properties/age">path: /properties/details/properties/age</i>
			 - Type: `integer`
			 - Range:  &ge; 0
		 - <i id="/properties/details/properties/eyes">details&thinsp;.&thinsp;eyes</i>
			 - <i id="/properties/details/properties/eyes">path: /properties/details/properties/eyes</i>
			 - Type: `string`
		 - <i id="/properties/details/properties/hair">details&thinsp;.&thinsp;hair</i>
			 - <i id="/properties/details/properties/hair">path: /properties/details/properties/hair</i>
			 - Type: `string`
		 - <i id="/properties/details/properties/skin">details&thinsp;.&thinsp;skin</i>
			 - <i id="/properties/details/properties/skin">path: /properties/details/properties/skin</i>
			 - Type: `string`
		 - <i id="/properties/details/properties/weight">details&thinsp;.&thinsp;weight</i>
			 - <i id="/properties/details/properties/weight">path: /properties/details/properties/weight</i>
			 - Type: `integer`
			 - Range:  &ge; 0
		 - <i id="/properties/details/properties/height">details&thinsp;.&thinsp;height</i>
			 - <i id="/properties/details/properties/height">path: /properties/details/properties/height</i>
			 - Type: `string`
		 - <i id="/properties/details/properties/personality">details&thinsp;.&thinsp;personality</i>
			 - <i id="/properties/details/properties/personality">path: /properties/details/properties/personality</i>
			 - Type: `string`
		 - <i id="/properties/details/properties/ideal">details&thinsp;.&thinsp;ideal</i>
			 - <i id="/properties/details/properties/ideal">path: /properties/details/properties/ideal</i>
			 - Type: `string`
		 - <i id="/properties/details/properties/bond">details&thinsp;.&thinsp;bond</i>
			 - <i id="/properties/details/properties/bond">path: /properties/details/properties/bond</i>
			 - Type: `string`
		 - <i id="/properties/details/properties/flaw">details&thinsp;.&thinsp;flaw</i>
			 - <i id="/properties/details/properties/flaw">path: /properties/details/properties/flaw</i>
			 - Type: `string`
		 - <i id="/properties/details/properties/backstory">details&thinsp;.&thinsp;backstory</i>
			 - <i id="/properties/details/properties/backstory">path: /properties/details/properties/backstory</i>
			 - Type: `string`
		 - <i id="/properties/details/properties/physical">details&thinsp;.&thinsp;physical</i>
			 - <i id="/properties/details/properties/physical">path: /properties/details/properties/physical</i>
			 - Type: `string`
 - <i id="/properties/weapon_proficiencies">weapon_proficiencies</i>
	 - <i id="/properties/weapon_proficiencies">path: /properties/weapon_proficiencies</i>
	 - Type: `array`
		 - **_Items_**
		 - <i id="/properties/weapon_proficiencies/items">path: /properties/weapon_proficiencies/items</i>
		 - Type: `string`
		 - Examples: 
			 1. _"Simple Weapons"_
			 2. _"Martial Weapons"_
 - <i id="/properties/armor_proficiencies">armor_proficiencies</i>
	 - <i id="/properties/armor_proficiencies">path: /properties/armor_proficiencies</i>
	 - Type: `array`
		 - **_Items_**
		 - <i id="/properties/armor_proficiencies/items">path: /properties/armor_proficiencies/items</i>
		 - Type: `string`
		 - Examples: 
			 1. _"Light Armor"_
			 2. _"Medium Armor"_
			 3. _"Heavy Armor"_
			 4. _"Shields"_
 - <i id="/properties/tool_proficiencies">tool_proficiencies</i>
	 - <i id="/properties/tool_proficiencies">path: /properties/tool_proficiencies</i>
	 - Type: `array`
		 - **_Items_**
		 - <i id="/properties/tool_proficiencies/items">path: /properties/tool_proficiencies/items</i>
		 - Type: `string`
		 - Examples: 
			 1. _"Artisan's Tools"_
			 2. _"Disguise Kit"_
 - <i id="/properties/feats">feats</i>
	 - <i id="/properties/feats">path: /properties/feats</i>
	 - Type: `array`
		 - **_Items_**
		 - <i id="/properties/feats/items">path: /properties/feats/items</i>
		 - &#36;ref: [feat.schema.json](feat.schema.json.md)
 - <i id="/properties/spells">spells</i>
	 - <i id="/properties/spells">path: /properties/spells</i>
	 - Type: `array`
		 - **_Items_**
		 - <i id="/properties/spells/items">path: /properties/spells/items</i>
		 - &#36;ref: [Spell.schema.json](Spell.schema.json.md)
 - <i id="/properties/weapons">weapons</i>
	 - <i id="/properties/weapons">path: /properties/weapons</i>
	 - Type: `array`
		 - **_Items_**
		 - <i id="/properties/weapons/items">path: /properties/weapons/items</i>
		 - &#36;ref: [weapon.schema.json](weapon.schema.json.md)
 - <i id="/properties/equipment">equipment</i>
	 - <i id="/properties/equipment">path: /properties/equipment</i>
	 - Type: `array`
		 - **_Items_**
		 - <i id="/properties/equipment/items">path: /properties/equipment/items</i>
		 - &#36;ref: [equipment.schema.json](equipment.schema.json.md)
 - <i id="/properties/treasure">treasure</i>
	 - <i id="/properties/treasure">path: /properties/treasure</i>
	 - Type: `object`
	 - **_Properties_**
		 - <i id="/properties/treasure/properties/pp">treasure&thinsp;.&thinsp;pp</i>
			 - <i id="/properties/treasure/properties/pp">path: /properties/treasure/properties/pp</i>
			 - _Platimum_
			 - Type: `number`
			 - Default: `0`
		 - <i id="/properties/treasure/properties/ep">treasure&thinsp;.&thinsp;ep</i>
			 - <i id="/properties/treasure/properties/ep">path: /properties/treasure/properties/ep</i>
			 - _Electrum_
			 - Type: `number`
			 - Default: `0`
		 - <i id="/properties/treasure/properties/gp">treasure&thinsp;.&thinsp;gp</i>
			 - <i id="/properties/treasure/properties/gp">path: /properties/treasure/properties/gp</i>
			 - _Gold_
			 - Type: `number`
			 - Default: `0`
		 - <i id="/properties/treasure/properties/sp">treasure&thinsp;.&thinsp;sp</i>
			 - <i id="/properties/treasure/properties/sp">path: /properties/treasure/properties/sp</i>
			 - _Silver_
			 - Type: `number`
			 - Default: `0`
		 - <i id="/properties/treasure/properties/cp">treasure&thinsp;.&thinsp;cp</i>
			 - <i id="/properties/treasure/properties/cp">path: /properties/treasure/properties/cp</i>
			 - _Copper_
			 - Type: `number`
			 - Default: `0`

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
# Schema Design Concepts
## Custom Notation: "input"
For the purpose of generating forms extrapolated from the schema a custom notation has been added to suggest the type of form control to use. `"type": "string"` would default to `<input type="text" />` but you may override that with `"type": "textarea"` to suggest the use of a `<textarea></textarea>` form control.
## Avoid the use of multiple types
JSON Schema supports designating multiple types; however, it may complicate implementation. The preferred design would be to either describe a more comprehensive object or to chose the more flexible type. For example, instead of using `"type": ["integer", "string"]` use `"type": "string"` as an number may be stored in a string but not visa versa.

However, I've been using `"type": ["integer", "boolean"]` to describe situations in which I want to differentiate `false` from `0` (zero). However, unless you require that accuracy `false` will be treated as `0` and 1+ will be treated as `true`.

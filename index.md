# Class

## `PSR`

Main class

### `constructor(tree: object, roo: Array<ROO>, vars: object, vars.hscode: object)`

### `tree: object`

PSR DSL parse tree

### `roo: Array<ROO>`

rules of origin questionnaire

### `official: string`

A string representation of PSR that is akin to input data. Does not show implicit (silent) codes. This might be suitable for display to general trade negotiators but is not suitable for display to general users.

### `friendlyExpanded: Map{string, string}`

Friendly text expansion of codes used in DSL. Derived from RoO template itemIfText

### `friendlyGroupingException: Map{string, string}`

Mapping of question id to category id

### `categories: Array<ROOCategory>`

List of all categories. You will want to iterate through this object to display categories and questions.

### `questions: Array<ROOQuestion>`

List of all questions that might potentially be asked.

### `outcomes: Map<string, ROOOutcome>`

List of all all outcomes.

### `dump(): string`

Dump DSL string from this representation. Used for testing various aspects of serialisation.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `iterate(answers: Map<string, boolean>): ROOOutcome`

Once you have some answers to questions, iterate with those answers to progress questionnaire.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| answers | Map<string, boolean> |  | mapping of question code to answers. It should be true for answered yes, no for answered no and not present or undefined for unanswered. |

### `parse(dslText: string, rooTemplate: Array<ROO>, templateVariables: object): PSR`

Constructs a PSR object. Use this instead of using PSR object directly. It will maintain backward compatible interface with optional parameters.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| dslText | string |  | ROO DSL text |
| rooTemplate | Array<ROO> | optional: true, default: [] | ROO questionnaire |
| templateVariables | object | optional: true, default: {} | Template variables. |

# Function

## `formatOfficialHelper(tree: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| tree | * | nullable: undefined |

## `findAllCodesHelper(tree: *, output: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| tree | * | nullable: undefined |
| output | * | nullable: undefined |

## `findAllLabelsHelper(codes: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| codes | * | nullable: undefined |

## `findAllDetailsHelper(codes: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| codes | * | nullable: undefined |

## `findAllConditionsHelper(codes: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| codes | * | nullable: undefined |

## `hslistToConditions(except: *): undefined[]`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| except | * | nullable: undefined |

## `hslistToText(except: *, index: *, list: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| except | * | nullable: undefined |
| index | * | nullable: undefined |
| list | * | nullable: undefined |

## `hslistToEncoded(except: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| except | * | nullable: undefined |

## `dumpHelper(tree: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| tree | * | nullable: undefined |

## `friendlyHelper(tree: *, expanded: *, groups: *, category: *, settings: *, vars: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| tree | * | nullable: undefined |
| expanded | * | nullable: undefined |
| groups | * | nullable: undefined |
| category | * | nullable: undefined |
| settings | * | nullable: undefined |
| vars | * | nullable: undefined |

## `evaluateHelper(tree: *, values: *, blacklist: *, whitelist: *): string`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| tree | * | nullable: undefined |
| values | * | nullable: undefined |
| blacklist | * | nullable: undefined |
| whitelist | * | nullable: undefined |

## `template(str: string, vars: string): string`

Lightweight template system. Added for the purpose of being able to automatically produce RoO questions with some dynamic content. Variables supported are: 'subheading', 'heading', 'chapter', 'hscode' and custom. Custom being anything specified in vars.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| str | string |  | target string. e.g. '{{hscode}}' |
| vars | string |  | template variables |
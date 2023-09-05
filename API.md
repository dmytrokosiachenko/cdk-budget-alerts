### AWS Construct Library for Budget Alerts

This construct library allows you to create budget alerts for your AWS account.

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BudgetAlertConstruct <a name="BudgetAlertConstruct" id="cdk-budget-alerts.BudgetAlertConstruct"></a>

#### Initializers <a name="Initializers" id="cdk-budget-alerts.BudgetAlertConstruct.Initializer"></a>

```typescript
import { BudgetAlertConstruct } from 'cdk-budget-alerts'

new BudgetAlertConstruct(scope: Construct, id: string, properties: BudgetAlertProperties)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-budget-alerts.BudgetAlertConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-budget-alerts.BudgetAlertConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-budget-alerts.BudgetAlertConstruct.Initializer.parameter.properties">properties</a></code> | <code><a href="#cdk-budget-alerts.BudgetAlertProperties">BudgetAlertProperties</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-budget-alerts.BudgetAlertConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-budget-alerts.BudgetAlertConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="cdk-budget-alerts.BudgetAlertConstruct.Initializer.parameter.properties"></a>

- *Type:* <a href="#cdk-budget-alerts.BudgetAlertProperties">BudgetAlertProperties</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-budget-alerts.BudgetAlertConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-budget-alerts.BudgetAlertConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-budget-alerts.BudgetAlertConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-budget-alerts.BudgetAlertConstruct.isConstruct"></a>

```typescript
import { BudgetAlertConstruct } from 'cdk-budget-alerts'

BudgetAlertConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-budget-alerts.BudgetAlertConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-budget-alerts.BudgetAlertConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-budget-alerts.BudgetAlertConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### BudgetAlertProperties <a name="BudgetAlertProperties" id="cdk-budget-alerts.BudgetAlertProperties"></a>

Properties for BudgetAlerts Time unit is monthly.

#### Initializer <a name="Initializer" id="cdk-budget-alerts.BudgetAlertProperties.Initializer"></a>

```typescript
import { BudgetAlertProperties } from 'cdk-budget-alerts'

const budgetAlertProperties: BudgetAlertProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-budget-alerts.BudgetAlertProperties.property.alarmThreshold">alarmThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-budget-alerts.BudgetAlertProperties.property.budgetLimit">budgetLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-budget-alerts.BudgetAlertProperties.property.emailAddressesForAlerting">emailAddressesForAlerting</a></code> | <code>string[]</code> | *No description.* |

---

##### `alarmThreshold`<sup>Required</sup> <a name="alarmThreshold" id="cdk-budget-alerts.BudgetAlertProperties.property.alarmThreshold"></a>

```typescript
public readonly alarmThreshold: number;
```

- *Type:* number

---

##### `budgetLimit`<sup>Required</sup> <a name="budgetLimit" id="cdk-budget-alerts.BudgetAlertProperties.property.budgetLimit"></a>

```typescript
public readonly budgetLimit: number;
```

- *Type:* number

---

##### `emailAddressesForAlerting`<sup>Required</sup> <a name="emailAddressesForAlerting" id="cdk-budget-alerts.BudgetAlertProperties.property.emailAddressesForAlerting"></a>

```typescript
public readonly emailAddressesForAlerting: string[];
```

- *Type:* string[]

---




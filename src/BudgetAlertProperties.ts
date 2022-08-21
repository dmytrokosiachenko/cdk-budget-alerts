export interface BudgetAlertProperties {

  readonly emailAddressesForAlerting: string[];
  /** in euro */
  readonly budgetLimit: number;
  /** percent from budget limit */
  readonly alarmThreshold: number;

}
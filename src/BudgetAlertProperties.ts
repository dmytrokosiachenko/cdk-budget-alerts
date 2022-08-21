interface BudgetAlertProperties {

  emailAddressesForAlerting: string[];
  /** in euro */
  budgetLimit: number;
  /** percent from budget limit */
  alarmThreshold: number;

}
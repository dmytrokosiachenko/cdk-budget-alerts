/**
 * Properties for BudgetAlerts
 * Time unit is monthly
 * @property {string[]} emailAddressesForAlerting - Email addresses to send alerts to
 * @property {number} budgetLimit - Budget limit
 * @property {number} alarmThreshold - Alarm threshold
 */
export interface BudgetAlertProperties {

  /**
     * @max 11
     */
  readonly emailAddressesForAlerting: string[];

  /**
     * @min 0
     * @unit USD
     */
  readonly budgetLimit: number;


  /**
     * @min 0
     * @max 100
     * @unit percent
     */
  readonly alarmThreshold: number;

}
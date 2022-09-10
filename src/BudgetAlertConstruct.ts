import { CfnBudget } from 'aws-cdk-lib/aws-budgets';
import { Construct } from 'constructs';
import { BudgetAlertProperties } from './BudgetAlertProperties';

export class BudgetAlertConstruct extends Construct {


  constructor(scope: Construct, id: string, properties: BudgetAlertProperties) {
    super(scope, id);
    new CfnBudget(scope, 'BudgetForAlerting', {
      budget: {
        budgetType: 'COST',
        timeUnit: 'MONTHLY',
        budgetLimit: {
          amount: properties.budgetLimit,
          unit: 'USD',
        },
      },

      notificationsWithSubscribers: [
        {
          notification: {
            comparisonOperator: 'GREATER_THAN',
            threshold: properties.alarmThreshold,
            thresholdType: 'PERCENTAGE',
            notificationType: 'ACTUAL',
          },
          subscribers: this.createSubscribers(properties.emailAddressesForAlerting),
        },
      ],
    });
  }


  private createSubscribers(subscribersStringArray: string[]) {
    if (subscribersStringArray.length > 11) {
      throw new Error('The maximum number of 11 e-mail recipients is exceeded.');
    }
    const subscribers = new Array<CfnBudget.SubscriberProperty>();
    for (const recipient of subscribersStringArray) {
      subscribers.push({ address: recipient, subscriptionType: 'EMAIL' });
    }
    return subscribers;
  }
}


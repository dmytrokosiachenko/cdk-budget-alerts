import { CfnBudget } from 'aws-cdk-lib/aws-budgets';
import { Construct } from 'constructs';
import { BudgetAlertProperties } from './BudgetAlertProperties';

export class BudgetAlertConstruct extends Construct {


  constructor(scope: Construct, id: string, properties: BudgetAlertProperties) {
    super(scope, id);
    this.checkInput(properties);
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

  private checkInput(properties: BudgetAlertProperties) {
    if (properties.budgetLimit < 0) {
      throw new Error('Budget limit must be greater than 0.');
    }
    if (properties.alarmThreshold < 0 || properties.alarmThreshold > 100) {
      throw new Error('Alarm threshold must be between 0 and 100.');
    }
  }

  private createSubscribers(subscribersStringArray: string[]) {
    if (subscribersStringArray.length > 11) {
      throw new Error('The maximum number of 11 e-mail recipients is exceeded.');
    }
    const subscribers = new Array<CfnBudget.SubscriberProperty>();
    for (const recipient of subscribersStringArray) {
      this.validateEmail(recipient);
      subscribers.push({ address: recipient, subscriptionType: 'EMAIL' });
    }
    return subscribers;
  }

  private validateEmail(email: string) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const match = email.match(validRegex);
    if (match === null) {
      throw new Error(`Invalid email address: ${email}`);
    }
  }
}


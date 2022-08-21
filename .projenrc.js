const { awscdk } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'dmytro.kosiachenko',
  authorAddress: 'dmytro.kosiachenko@xl2.de',
  cdkVersion: '2.37.0',
  defaultReleaseBranch: 'main',
  name: 'budget-alerts',
  repositoryUrl: 'https://github.com/dmytro.kosiachenko/budget-alerts.git',
  deps: ['aws-cdk-lib/aws-budgets', 'aws-cdk-lib/aws-sns'],

});
project.synth();
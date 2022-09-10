const { awscdk } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'dmytro.kosiachenko',
  authorAddress: 'dmytro.kosiachenko@xl2.de',
  cdkVersion: '2.37.0',
  defaultReleaseBranch: 'main',
  dependabot: true,
  name: 'cdk-budget-alerts',
  repositoryUrl: 'https://github.com/dmytrokosiachenko/cdk-budget-alerts.git',
  autoMerge: false,

});
project.synth();
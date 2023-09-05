import { awscdk } from 'projen';


const project = new awscdk.AwsCdkConstructLibrary({
  author: 'dmytro.kosiachenko',
  authorAddress: 'dmytro.kosiachenko@gmail.com',
  cdkVersion: '2.94.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-budget-alerts',
  repositoryUrl: 'https://github.com/dmytrokosiachenko/cdk-budget-alerts.git',
  autoMerge: false,
  github: true,
  projenrcTs: true,
  keywords: ['awscdk', 'aws', 'cdk', 'budget', 'alert'],
  gitignore: ['.idea'],
});
project.synth();

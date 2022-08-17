const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'dmytro.kosiachenko',
  authorAddress: 'dmytro.kosiachenko@xl2.de',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'budget-alerts',
  repositoryUrl: 'https://github.com/dmytro.kosiachenko/budget-alerts.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
import { Resolver } from '@embroider/core';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

let stage2Output = readFileSync('dist/.stage2-output', 'utf8');
let resolver = new Resolver(
  JSON.parse(
    readFileSync(resolve(stage2Output, '.embroider/resolver.json'), 'utf8')
  )
);

logResolution('#embroider_compat/components/i-exist');
logResolution('#embroider_compat/components/welcome-page');
logResolution('#embroider_compat/helpers/me-too');
logResolution('#embroider_compat/components/not-a-real-component');
logResolution('#embroider_compat/ambiguous/me-too');
logResolution('@ember/test-helpers');
logResolution('@ember/component');

function logResolution(specifier: string) {
  console.log(`Resolving ${specifier}`);
  let resolution = resolver.nodeResolve(
    specifier,
    resolve(stage2Output, 'app.js')
  );
  switch (resolution.type) {
    case 'real':
      console.log(`Found it at ${resolution.filename}`);
      break;
    case 'virtual':
      console.log(
        `Embroider provides a virtual file for this, with the logical location of ${resolution.filename} and the following content:\n${resolution.content}`
      );
      break;
    case 'not_found':
      console.log(`Not found`);
      break;
    default:
      assertNever(resolution);
  }
}

function assertNever(arg: never): never {
  throw new Error('assertNever');
}

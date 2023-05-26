# embroider-resolver-example

This app demonstrates how you can use the `Resolver` from `@embroider/core` to ask build-time resolution questions about an Ember app.

The app here is just the stock blueprint plus Embroider installed by the basic instructions in the Embroider readme.

## Installation

* `git clone <repository-url>` this repository
* `cd embroider-resolver-example`
* `pnpm install`

## Running

 * First you need to get the embroider stage 2 build output:

     ```
     STAGE2_ONLY=true ember build
     ```

 * Then you can run the resolver demo:

    ```
    npx ts-node resolver-demo.ts
    ```


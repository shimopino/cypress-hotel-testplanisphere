import { Given } from "cypress-cucumber-preprocessor/steps";

const localFunctionWithTypes = (a: number, b: number): number => a + b;

Given("サンプル初期状態", () => {
    console.log(localFunctionWithTypes(1, 2) === 2);
})
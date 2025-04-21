import { DataTable, Then, When } from '@cucumber/cucumber';
import { RobotDreamsWorld } from '../worlds/robot-dreams.world.ts';
import { expect } from '@playwright/test';
import { ContextKey } from '../models/context-key.ts';

When('the user navigates to the Jira homepage', async function (this: RobotDreamsWorld) {
    await this.jiraPage.goTo();
    this.scenarioContext.set(ContextKey.exampleKey, 'This may be example of the test artifact in a scenario context');
});

Then('the user is able to see its base content', async function (this: RobotDreamsWorld) {
    await expect(this.jiraPage.userLogo).toBeVisible();

    // Example of how to get the value from the scenario context, similarly we can exchange data between scenarios using globalContext
    const exampleValue = this.scenarioContext.get(ContextKey.exampleKey);
    await expect(exampleValue).toBe('This may be example of the test artifact in a scenario context');
});

Then('the user No {int} is able to see its base content with {string} table', async function (this: RobotDreamsWorld, userNo: number, imageName: string,  data: DataTable) {
    const tableData = data.hashes();
    console.log(tableData);
    await expect(this.jiraPage.userLogo).toBeVisible();

    // Example of how to get the value from the scenario context, similarly we can exchange data between scenarios using globalContext
    const exampleValue = this.scenarioContext.get(ContextKey.exampleKey);
    await expect(exampleValue).toBe('This may be example of the test artifact in a scenario context');
});

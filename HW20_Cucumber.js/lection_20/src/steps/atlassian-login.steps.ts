import { Given } from '@cucumber/cucumber';
import { RobotDreamsWorld } from '../worlds/robot-dreams.world.ts';
import { AtlassianLoginPage } from '../pages/atlassian-login.page.ts';

Given('the user is authenticated', async function (this: RobotDreamsWorld) {
    const atlassianLoginPage = new AtlassianLoginPage(this.page, this.context);
    await atlassianLoginPage.login(process.env.JIRA_LOGIN as string, process.env.JIRA_PASSWORD as string);
});

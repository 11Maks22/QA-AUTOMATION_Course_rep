import { expect as expectChai } from 'chai';
import { expect as expectPlaywright, mergeExpects } from '@playwright/test';

export const expect = mergeExpects(expectChai, expectPlaywright);

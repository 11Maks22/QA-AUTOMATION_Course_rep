import { Results } from './interfaces';

interface ExtendedResults extends Results {
    timeline: {
        start: string;
        end: string;
    };
}

const res: Partial<ExtendedResults> = {};

res.timeline = {
    end: 'smth',
    start: ''
};

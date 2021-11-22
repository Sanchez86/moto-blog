import { IData } from 'interfaces';

const deepCopy = (data: Array<IData>): Array<IData> => JSON.parse(JSON.stringify(data));

export { deepCopy };

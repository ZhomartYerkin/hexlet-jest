import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import reverse from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('reverse long test', () => {
const input=fs.readFileSync(getFixturePath('input.txt'), 'utf-8');
const expected=fs.readFileSync(getFixturePath('output.txt'), 'utf-8');

const result = reverse(input);

expect(result).toEqual(expected)
});


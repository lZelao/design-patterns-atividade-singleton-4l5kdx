import { expect, test, describe } from 'vitest';
import { ParametricPrinterSpooler } from '../singleton/parametricPrinterSpooler.js';
describe('ParametricPrinterSpooler', () => {
    test('é um Singleton quando passando o mesmo nome', () => {
        const p1 = ParametricPrinterSpooler.getInstance('printer1');
        const p2 = ParametricPrinterSpooler.getInstance('printer1');
        expect(p1.name).toEqual(p2.name);
        expect(p1).toBe(p2);
    });
    test('é um Singleton quando passando nomes diferentes', () => {
        const p1 = ParametricPrinterSpooler.getInstance('printer1');
        const p2 = ParametricPrinterSpooler.getInstance('printer2');
        expect(p1.name).not.toEqual(p2.name);
        expect(p1).not.toBe(p2);
    });
});

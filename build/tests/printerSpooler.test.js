import { expect, test, describe, beforeEach } from 'vitest';
import { PrinterSpooler } from '../singleton/printerSpooler.js';
describe('PrinterSpooler', () => {
    beforeEach(() => {
        PrinterSpooler.getInstance().clearJobs();
    });
    test('é um Singleton', () => {
        const p1 = PrinterSpooler.getInstance();
        const p2 = PrinterSpooler.getInstance();
        expect(p1).toBe(p2);
    });
    test('addJob e getNextJob gerenciam os trabalhos corretamente', () => {
        const p1 = PrinterSpooler.getInstance();
        const p2 = PrinterSpooler.getInstance();
        const p3 = PrinterSpooler.getInstance();
        p1.addJob({
            jobTitle: 'job1',
            userName: 'user1',
            dateTime: new Date(),
            data: 'Content 1',
        });
        p2.addJob({
            jobTitle: 'job2',
            userName: 'user2',
            dateTime: new Date(),
            data: 'Content 2',
        });
        expect(p3.getNextJob().jobTitle).toEqual('job1');
        expect(p3.getNextJob().jobTitle).toEqual('job2');
        expect(p3.getNextJob()).toBeUndefined();
    });
    test('listAllJobs lista os trabalhos corretamente', () => {
        const p1 = PrinterSpooler.getInstance();
        p1.addJob({
            jobTitle: 'job1',
            userName: 'user1',
            dateTime: new Date(2024, 2, 24),
            data: 'Content 1',
        });
        p1.addJob({
            jobTitle: 'job2',
            userName: 'user1',
            dateTime: new Date(2024, 2, 24),
            data: 'Content 2',
        });
        expect(p1.listAllJobs()).toEqual([
            {
                jobTitle: 'job2',
                userName: 'user1',
                dateTime: new Date(2024, 2, 24),
                data: 'Content 2',
            },
            {
                jobTitle: 'job1',
                userName: 'user1',
                dateTime: new Date(2024, 2, 24),
                data: 'Content 1',
            },
        ]);
    });
    test('listAllJobs não viola o encapsulamento dos trabalhos', () => {
        const p1 = PrinterSpooler.getInstance();
        p1.addJob({
            jobTitle: 'job1',
            userName: 'user1',
            dateTime: new Date(),
            data: 'Content 1',
        });
        // tentando violar o encapsulamento...
        let jobs = PrinterSpooler.getInstance().listAllJobs();
        jobs.push({
            jobTitle: 'job2',
            userName: 'user1',
            dateTime: new Date(),
            data: 'Content 2',
        });
        expect(p1.listAllJobs().length).toEqual(1);
    });
});

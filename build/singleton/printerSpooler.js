export class PrinterSpooler {
    constructor() {
        this.jobs = [];
    }
    static getInstance() {
        if (!PrinterSpooler.instance$) {
            PrinterSpooler.instance$ = new PrinterSpooler();
        }
        return PrinterSpooler.instance$;
    }
    addJob(job) {
        this.jobs.push(job);
    }
    getNextJob() {
        if (this.jobs.length > 0) {
            return this.jobs.shift();
        }
        else {
            return undefined;
        }
    }
    listAllJobs() {
        return this.jobs;
    }
    clearJobs() {
        this.jobs = [];
    }
}
PrinterSpooler.instance$ = null;

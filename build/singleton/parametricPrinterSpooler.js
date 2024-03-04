export class ParametricPrinterSpooler {
    constructor(name) {
        this.jobs = [];
        this.name = name;
    }
    static getInstance(name) {
        if (!ParametricPrinterSpooler.instances[name]) {
            ParametricPrinterSpooler.instances[name] = new ParametricPrinterSpooler(name);
        }
        return ParametricPrinterSpooler.instances[name];
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
ParametricPrinterSpooler.instances = {};

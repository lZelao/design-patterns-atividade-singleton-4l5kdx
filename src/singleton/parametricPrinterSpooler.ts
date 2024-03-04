import type { PrinterJob } from '../types.js';

export class ParametricPrinterSpooler {
  private static instances: { [name: string]: ParametricPrinterSpooler } = {};
  private jobs: Array<PrinterJob> = [];
  public name: string;

  private constructor(name: string) {
    this.name = name;
  }

  public static getInstance(name: string): ParametricPrinterSpooler {
    if (!ParametricPrinterSpooler.instances[name]) {
      ParametricPrinterSpooler.instances[name] = new ParametricPrinterSpooler(
        name
      );
    }
    return ParametricPrinterSpooler.instances[name];
  }

  public addJob(job: PrinterJob) {
    this.jobs.push(job);
  }

  public getNextJob(): PrinterJob | undefined {
    if (this.jobs.length > 0) {
      return this.jobs.shift();
    } else {
      return undefined;
    }
  }

  public listAllJobs(): PrinterJob[] {
    return [...this.jobs];
  }

  public clearJobs() {
    this.jobs = [];
  }
}

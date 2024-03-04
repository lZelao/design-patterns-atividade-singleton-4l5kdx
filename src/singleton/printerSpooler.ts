import type { PrinterJob } from '../types.js';

export class PrinterSpooler {
  private static instance$: PrinterSpooler | null = null;
  private jobs: PrinterJob[] = [];

  private constructor() {}

  public static getInstance(): PrinterSpooler {
    if (!PrinterSpooler.instance$) {
      PrinterSpooler.instance$ = new PrinterSpooler();
    }
    return PrinterSpooler.instance$;
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

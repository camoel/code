//用js写一个并发控制器，失败后要重试，重试有次数限制
class controller {
  constructor(limit, max) {
    this.limit = limit;
    this.max = max;
    this.task = 0;
    this.queue = [];
  }

  addTask(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, resolve, reject, retries: 0 });
      this.runNext();
    });
  }

  async runNext() {
    if (this.task >= this.limit || this.queue.length === 0) {
      return;
    }
    const { task, resolve, reject, retries } = this.queue.shift();
    this.task++;

    try {
      const result = await task();
      resolve(result);
    } catch (error) {
      if (entries < this.max) {
        this.queue.push({ task, resolve, reject, retries: retries + 1 });
      } else {
        reject(error);
      }
    } finally {
      this.task--;
      this.runNext();
    }
  }
}

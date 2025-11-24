abstract class TaskManager {
  protected tasks: { type: string; task: string }[] = [];

  abstract addTask(task: string): void;
  abstract listTasks(): string[];
}

class Project extends TaskManager {
  addTask(task: string): void {
    const exists = this.tasks.some(
      (t) => t.task === task && t.type === "project"
    );

    if (!exists) {
      this.tasks.push({ type: "project", task });
    }
  }

  listTasks(): string[] {
    return this.tasks
      .filter((t) => t.type === "project")
      .map((t) => `Projeto: ${t.task}`);
  }
}

class DailyTasks extends TaskManager {
  addTask(task: string): void {
    const exists = this.tasks.some(
      (t) => t.task === task && t.type === "daily"
    );

    if (!exists) {
      this.tasks.push({ type: "daily", task });
    }
  }

  listTasks(): string[] {
    return this.tasks
      .filter((t) => t.type === "daily")
      .map((t) => `Diária: ${t.task}`);
  }
}

const p = new Project();
p.addTask("Criar tela de login");
p.addTask("Criar tela de login");

const d = new DailyTasks();
d.addTask("Limpar mesa");

console.log(p.listTasks());
console.log(d.listTasks());

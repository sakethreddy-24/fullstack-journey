enum Priority {
  Low    = "LOW",
  Medium = "MEDIUM",
  High   = "HIGH",
}

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: Priority;
  createdAt: Date;
}

type CreateTodoInput = Omit<Todo, "id" | "completed" | "createdAt">;

class TodoManager {
    private todos: Todo[] = [];
    private nextId: number = 1;

    add(input: CreateTodoInput): Todo {
        const todo: Todo = {
            id: this.nextId++,
            text:input.text,
            priority: input.priority,
            completed: false,
            createdAt: new Date(),
        };
        this.todos.push(todo);
        return todo;
    }

    complete(id: number): void {
        const todo = this.todos.find((t) => t.id === id);
        if(!todo){
            console.log(`Todo ${id} not found`);
            return ;
        }
        todo.completed = true;
        console.log(`✅ Completed: ${todo.text}`);
    }
    delete(id: number): void {
        this.todos = this.todos.filter((t) => t.id !== id);
        console.log(`🗑 Deleted todo ${id}`);
    }
    getByPriority(priority: Priority): Todo[] {
    return this.todos.filter((t) => t.priority === priority);
    }

     getPending(): Todo[] {
    return this.todos.filter((t) => !t.completed);
  }

   getSummary(): void {
    const total     = this.todos.length;
    const completed = this.todos.filter((t) => t.completed).length;
    const pending   = total - completed;

    console.log(`\n📋 Todo Summary:`);
    console.log(`Total: ${total} | Completed: ${completed} | Pending: ${pending}`);
    console.log(`High priority pending: ${this.getByPriority(Priority.High).filter(t => !t.completed).length}`);
  }

   list(): void {
    if (this.todos.length === 0) {
      console.log("No todos!");
      return;
    }

      console.log("\n📝 All Todos:");
    this.todos.forEach((t) => {
      const status = t.completed ? "✅" : "⏳";
      console.log(`${status} [${t.priority}] ${t.id}. ${t.text}`);
    });
  }
}

const manager = new TodoManager();

manager.add({ text: "Learn TypeScript",  priority: Priority.High   });
manager.add({ text: "Build React app",   priority: Priority.High   });
manager.add({ text: "Go for a walk",     priority: Priority.Low    });
manager.add({ text: "Read a book",       priority: Priority.Medium });
manager.add({ text: "Push to GitHub",    priority: Priority.Medium });

manager.list();
manager.complete(1);
manager.complete(3);
manager.delete(4);
manager.list();
manager.getSummary();


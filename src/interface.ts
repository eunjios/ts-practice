interface Todo {
  id: number,
  text: string,
  done: boolean,
}

class TodoList {
  private todos: Todo[] = [];

  addTodo(todo: Todo) {
    console.log(`✅ ADD (${todo.id}) ${todo.text}\n`);
    this.todos.push(todo);
  }

  changeTodo(id: number, text: string) {
    const selected = this.todos.find(todo => todo.id === id);
    if (selected) {
      console.log(`✅ CHANGE ${selected.text} -> ${text}\n`);
      selected.text = text;
    } else {
      console.log('[수정 실패] 해당 id가 없습니다.')
    }
  }

  deleteTodo(id: number) {
    const selected = this.todos.find(todo => todo.id === id);
    if (selected) {
      console.log(`✅ DELETE ${selected.text}\n`);
      this.todos = this.todos.filter(todo => todo.id !== id);
    } else {
      console.log('[삭제 실패] 해당 id가 없습니다.')
    }
  }

  toggle(id: number) {
    const selected = this.todos.find(todo => todo.id === id);
    if (selected) {
      console.log(`✅ TOGGLE ${selected.text}\n`);
      selected.done = !selected.done;
    } else {
      console.log('[토글 실패] 해당 id가 없습니다.')
    }
  }

  getRemains(): Todo[] {
    return this.todos.filter(todo => !todo.done);
  }

  printAll() {
    const infos = this.todos.map(todo => `${todo.done ? '⭕️' : '❌'} (${todo.id}) ${todo.text}`);
    console.log(`[모든 할 일]\n${infos.join('\n')}\n`);
  }

  printRemains() {
    console.log(`[남은 할 일 (${this.getRemains().length}개)]`);
    if (this.getRemains().length > 0) {
        const infos = this.getRemains().map(todo => `(${todo.id}) ${todo.text}`);
        console.log(`${infos.join('\n')}\n`);
    } else {
        console.log(`없음!`);
    }
  }
}

const todoList = new TodoList();
todoList.addTodo({id: 1, text: 'TypeScript 공부하기', done: false});
todoList.addTodo({id: 2, text: '네트워크 공부하기', done: false});
todoList.addTodo({id: 3, text: '운동하기', done: false});
todoList.printAll();
todoList.printRemains();

todoList.toggle(1);
todoList.printAll();
todoList.printRemains();

todoList.changeTodo(1, 'TypeScript 열심히 공부하기');
todoList.printAll();
todoList.printRemains();

todoList.deleteTodo(2);
todoList.printAll();
todoList.printRemains();

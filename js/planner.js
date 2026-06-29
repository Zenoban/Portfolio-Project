(function () {
  'use strict';

  const tasks = [];

  const taskInput = document.getElementById('taskInput');
  const dateInput = document.getElementById('dateInput');
  const addBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');
  const emptyState = document.getElementById('emptyState');
  const totalCount = document.getElementById('totalCount');
  const completedCount = document.getElementById('completedCount');
  const pendingCount = document.getElementById('pendingCount');

  function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(function (t) { return t.done; }).length;
    const pending = total - completed;
    totalCount.textContent = total;
    completedCount.textContent = completed;
    pendingCount.textContent = pending;
  }

  function renderTasks() {
    taskList.innerHTML = '';
    if (tasks.length === 0) {
      emptyState.style.display = 'block';
      return;
    }
    emptyState.style.display = 'none';

    tasks.forEach(function (task, index) {
      var li = document.createElement('li');
      li.className = 'task-item' + (task.done ? ' completed' : '');

      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'task-checkbox';
      checkbox.checked = task.done;
      checkbox.setAttribute('aria-label', 'Mark "' + task.text + '" as ' + (task.done ? 'incomplete' : 'complete'));

      var textWrapper = document.createElement('div');
      textWrapper.style.cssText = 'flex: 1; display: flex; flex-direction: column; gap: 2px;';

      var span = document.createElement('span');
      span.className = 'task-text';
      span.textContent = task.text;

      var dateSpan = document.createElement('span');
      dateSpan.style.cssText = 'font-size: 12px; letter-spacing: -0.3px; color: var(--color-soft-sage, #c4c7c4);';
      dateSpan.textContent = task.date || 'No date set';

      textWrapper.appendChild(span);
      textWrapper.appendChild(dateSpan);

      var delBtn = document.createElement('button');
      delBtn.className = 'task-delete';
      delBtn.textContent = '✕';
      delBtn.setAttribute('aria-label', 'Delete "' + task.text + '"');

      checkbox.addEventListener('change', function () {
        task.done = checkbox.checked;
        if (task.done) {
          li.classList.add('completed');
        } else {
          li.classList.remove('completed');
        }
        updateStats();
      });

      delBtn.addEventListener('click', function () {
        tasks.splice(index, 1);
        renderTasks();
        updateStats();
      });

      li.appendChild(checkbox);
      li.appendChild(textWrapper);
      li.appendChild(delBtn);
      taskList.appendChild(li);
    });
  }

  function addTask() {
    var text = taskInput.value.trim();
    if (text === '') {
      taskInput.focus();
      return;
    }
    var date = dateInput.value || new Date().toISOString().split('T')[0];
    tasks.push({ text: text, date: date, done: false });
    taskInput.value = '';
    dateInput.value = '';
    taskInput.focus();
    renderTasks();
    updateStats();
  }

  addBtn.addEventListener('click', addTask);

  taskInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTask();
    }
  });

  renderTasks();
  updateStats();
})();

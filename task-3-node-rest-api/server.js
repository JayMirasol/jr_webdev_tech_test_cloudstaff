const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const VALID_STATUSES = ['pending', 'in-progress', 'done'];

let nextId = 3;
const tasks = [
	{
		id: 1,
		title: 'Set up Express server',
		status: 'done',
		createdAt: new Date('2026-03-17T08:00:00.000Z').toISOString(),
	},
	{
		id: 2,
		title: 'Create task endpoints',
		status: 'in-progress',
		createdAt: new Date('2026-03-17T08:30:00.000Z').toISOString(),
	},
];

app.use(express.json());

// Bonus: log each request with timestamp, method, and path.
app.use((req, res, next) => {
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
	next();
});

function findTaskById(taskId) {
	return tasks.find((task) => task.id === taskId);
}

// GET /api/tasks: return all tasks.
app.get('/api/tasks', (req, res) => {
	res.status(200).json(tasks);
});

// GET /api/tasks/:id: return one task or 404 if not found.
app.get('/api/tasks/:id', (req, res) => {
	const taskId = Number.parseInt(req.params.id, 10);
	const task = findTaskById(taskId);

	if (!task) {
		return res.status(404).json({ error: 'Task not found' });
	}

	return res.status(200).json(task);
});

// POST /api/tasks: create a task with a required title and default status.
app.post('/api/tasks', (req, res) => {
	const title = typeof req.body.title === 'string' ? req.body.title.trim() : '';

	if (!title) {
		return res.status(400).json({ error: 'Title is required' });
	}

	const newTask = {
		id: nextId,
		title,
		status: 'pending',
		createdAt: new Date().toISOString(),
	};

	nextId += 1;
	tasks.push(newTask);

	return res.status(201).json(newTask);
});

// PATCH /api/tasks/:id: update task status if task exists and status is valid.
app.patch('/api/tasks/:id', (req, res) => {
	const taskId = Number.parseInt(req.params.id, 10);
	const task = findTaskById(taskId);
	const { status } = req.body;

	if (!task) {
		return res.status(404).json({ error: 'Task not found' });
	}

	if (!VALID_STATUSES.includes(status)) {
		return res.status(400).json({
			error: 'Status must be one of: pending, in-progress, done',
		});
	}

	task.status = status;
	return res.status(200).json(task);
});

// DELETE /api/tasks/:id: remove a task if it exists.
app.delete('/api/tasks/:id', (req, res) => {
	const taskId = Number.parseInt(req.params.id, 10);
	const taskIndex = tasks.findIndex((task) => task.id === taskId);

	if (taskIndex === -1) {
		return res.status(404).json({ error: 'Task not found' });
	}

	const [deletedTask] = tasks.splice(taskIndex, 1);
	return res.status(200).json({ message: 'Task deleted successfully', task: deletedTask });
});

if (require.main === module) {
	app.listen(PORT, () => {
		console.log(`Server is running on http://localhost:${PORT}`);
	});
}

module.exports = { app, tasks, VALID_STATUSES };
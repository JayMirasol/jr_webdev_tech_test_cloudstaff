# Task 3: Node REST API

This project is a small REST API built with Node.js and Express using in-memory storage.

## Features

- `GET /api/tasks` returns all tasks
- `GET /api/tasks/:id` returns one task by ID
- `POST /api/tasks` creates a new task
- `PATCH /api/tasks/:id` updates a task status
- `DELETE /api/tasks/:id` deletes a task
- Request logging middleware prints timestamp, method, and path

## Task Shape

Each task has the following fields:

- `id`
- `title`
- `status`
- `createdAt`

Allowed status values:

- `pending`
- `in-progress`
- `done`

## Run Locally

1. Open a terminal in this folder.
2. Install dependencies if needed:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

4. The API will be available at:

```text
http://localhost:3000
```

## Example Requests

Get all tasks:

```bash
curl http://localhost:3000/api/tasks
```

Get task by ID:

```bash
curl http://localhost:3000/api/tasks/1
```

Create task:

```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Write API documentation"}'
```

Update task status:

```bash
curl -X PATCH http://localhost:3000/api/tasks/2 \
  -H "Content-Type: application/json" \
  -d '{"status":"done"}'
```

Delete task:

```bash
curl -X DELETE http://localhost:3000/api/tasks/2
```

## Suggested Tools For Testing

- Postman
- Thunder Client in VS Code
- `curl` from Git Bash or another shell
- PowerShell `Invoke-RestMethod`

## Postman Step By Step

### 1. Start the server first

Open a terminal in this folder and run:

```bash
npm start
```

Keep that terminal open while testing in Postman.

### 2. Open Postman and create a new collection

1. Open Postman.
2. Click `New`.
3. Choose `Collection`.
4. Name it something like `Task API`.

This keeps all your requests in one place.

### 3. Test GET all tasks

1. Click `Add a request` inside your collection.
2. Name it `Get All Tasks`.
3. Set method to `GET`.
4. Enter URL:

```text
http://localhost:3000/api/tasks
```

5. Click `Send`.

Expected result:

- Status: `200 OK`
- Response body: JSON array of tasks

### 4. Test GET task by ID

1. Add another request named `Get Task By ID`.
2. Set method to `GET`.
3. Enter URL:

```text
http://localhost:3000/api/tasks/1
```

4. Click `Send`.

Expected result:

- Status: `200 OK`
- Response body: one task object

### 5. Test GET task by ID for not found

1. Duplicate the previous request or create a new one.
2. Change URL to:

```text
http://localhost:3000/api/tasks/999
```

3. Click `Send`.

Expected result:

- Status: `404 Not Found`
- Response body:

```json
{
  "error": "Task not found"
}
```

### 6. Test POST create task

1. Add a request named `Create Task`.
2. Set method to `POST`.
3. Enter URL:

```text
http://localhost:3000/api/tasks
```

4. Open the `Body` tab.
5. Select `raw`.
6. Change the format dropdown to `JSON`.
7. Paste this body:

```json
{
  "title": "Learn Postman"
}
```

8. Click `Send`.

Expected result:

- Status: `201 Created`
- Response body includes:
  - `id`
  - `title`
  - `status` as `pending`
  - `createdAt`

### 7. Test POST validation error

1. Duplicate the `Create Task` request.
2. Keep method as `POST`.
3. Keep the same URL.
4. Replace the JSON body with:

```json
{}
```

5. Click `Send`.

Expected result:

- Status: `400 Bad Request`
- Response body:

```json
{
  "error": "Title is required"
}
```

### 8. Test PATCH update task status

1. Add a request named `Update Task Status`.
2. Set method to `PATCH`.
3. Enter URL:

```text
http://localhost:3000/api/tasks/2
```

4. Open `Body`.
5. Select `raw` and `JSON`.
6. Paste this body:

```json
{
  "status": "done"
}
```

7. Click `Send`.

Expected result:

- Status: `200 OK`
- Response body shows the task with updated `status`

### 9. Test PATCH validation error

1. Duplicate the `Update Task Status` request.
2. Keep the same URL.
3. Replace the JSON body with:

```json
{
  "status": "blocked"
}
```

4. Click `Send`.

Expected result:

- Status: `400 Bad Request`
- Response body:

```json
{
  "error": "Status must be one of: pending, in-progress, done"
}
```

### 10. Test DELETE task

1. Add a request named `Delete Task`.
2. Set method to `DELETE`.
3. Enter URL:

```text
http://localhost:3000/api/tasks/2
```

4. Click `Send`.

Expected result:

- Status: `200 OK`
- Response body confirms deletion

### 11. Confirm delete worked

1. Send this request again:

```text
GET http://localhost:3000/api/tasks/2
```

2. Click `Send`.

Expected result:

- Status: `404 Not Found`

### 12. Important note about in-memory data

This API uses a plain array in memory.

- If you restart the server, tasks go back to the initial sample data.
- Any created, updated, or deleted tasks are not permanently saved.

## PowerShell Examples

Get all tasks:

```powershell
Invoke-RestMethod -Method Get -Uri http://localhost:3000/api/tasks
```

Create task:

```powershell
Invoke-RestMethod -Method Post -Uri http://localhost:3000/api/tasks -ContentType 'application/json' -Body '{"title":"Learn Express"}'
```

Update status:

```powershell
Invoke-RestMethod -Method Patch -Uri http://localhost:3000/api/tasks/1 -ContentType 'application/json' -Body '{"status":"done"}'
```

Delete task:

```powershell
Invoke-RestMethod -Method Delete -Uri http://localhost:3000/api/tasks/1
```
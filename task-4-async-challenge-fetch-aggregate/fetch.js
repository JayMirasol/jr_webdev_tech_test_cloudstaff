const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

async function getFetch() {
  if (typeof globalThis.fetch === 'function') {
    return globalThis.fetch;
  }

  const nodeFetch = await import('node-fetch');
  return nodeFetch.default;
}

function parseLimitArg(argv) {
  const limitIndex = argv.indexOf('--limit');

  if (limitIndex === -1) {
    return null;
  }

  const rawLimit = argv[limitIndex + 1];
  const parsedLimit = Number.parseInt(rawLimit, 10);

  if (!Number.isInteger(parsedLimit) || parsedLimit <= 0) {
    throw new Error('Invalid --limit value. Use a positive integer, e.g. --limit 3');
  }

  return parsedLimit;
}

async function fetchJsonOrThrow(fetchFn, url) {
  const response = await fetchFn(url);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function main(limit) {
  try {
    const fetchFn = await getFetch();
    let users = await fetchJsonOrThrow(fetchFn, `${API_BASE_URL}/users`);

    if (limit) {
      users = users.slice(0, limit);
    }

    if (users.length === 0) {
      console.log('No users to process.');
      return;
    }

    const postSummaries = await Promise.all(
      users.map(async (user) => {
        try {
          const posts = await fetchJsonOrThrow(fetchFn, `${API_BASE_URL}/posts?userId=${user.id}`);
          return { user, postCount: posts.length };
        } catch (error) {
          console.error(`Failed to fetch posts for ${user.name} (id: ${user.id}): ${error.message}`);
          return { user, postCount: 0 };
        }
      })
    );

    console.log('User post summary:');

    for (const { user, postCount } of postSummaries) {
      console.log(`  ${user.name} - ${postCount} posts`);
    }

    const mostProlific = postSummaries.reduce((currentMax, entry) => {
      if (!currentMax || entry.postCount > currentMax.postCount) {
        return entry;
      }

      return currentMax;
    }, null);

    console.log('');
    console.log(`Most prolific poster: ${mostProlific.user.name} (${mostProlific.postCount} posts)`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

let limit = null;

try {
  limit = parseLimitArg(process.argv);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

main(limit);

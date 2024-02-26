// Define GitHub API base URL
const BASE_URL = 'https://api.github.com';

// Define your personal access token
const TOKEN = 'your_personal_access_token';

// Function to fetch repositories for a user
async function fetchUserRepositories(username) {
  const response = await fetch(`${BASE_URL}/users/${username}/repos`, {
    headers: {
      'Authorization': `token ${TOKEN}`
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

// Main function to fetch and display repository information
async function main(username) {
  try {
    const repositories = await fetchUserRepositories(username);

    // Get the GitHub data container
    const githubDataContainer = document.getElementById('github-data');

    // Clear the container
    githubDataContainer.innerHTML = '';

    // Add each repository to the container
    repositories.forEach(repo => {
      const repoElement = document.createElement('div');
      repoElement.className = 'col-span-1 bg-white p-4 rounded shadow';

      const repoName = document.createElement('h2');
      repoName.className = 'text-xl font-bold mb-2';
      repoName.textContent = repo.name;
      repoElement.appendChild(repoName);

      const repoDescription = document.createElement('p');
      repoDescription.className = 'text-gray-700 mb-2';
      repoDescription.textContent = repo.description;
      repoElement.appendChild(repoDescription);

      // Add more details as needed...

      githubDataContainer.appendChild(repoElement);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the main function with a username
main('octocat');
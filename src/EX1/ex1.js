// Import the Octokit library
import { Octokit } from 'https://cdn.skypack.dev/@octokit/core';

// Define your personal access token
const TOKEN = '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';

// Create an instance of Octokit with your access token
const octokit = new Octokit({ auth: TOKEN });

// Function to fetch user information
async function fetchUser(username) {
  try {
    const response = await octokit.request(`GET /users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching user information: ${error.message}`);
  }
}

// Function to fetch repositories for a user
async function fetchUserRepositories(username) {
  try {
    const response = await octokit.request(`GET /users/${username}/repos`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching user repositories: ${error.message}`);
  }
}

// Main function to fetch and show basic user information
async function userInfo(username) {
  try {
    const user = await fetchUser(username);
    console.log('User:', user);
    const logo = document.querySelector('.logo');
    logo.src = user.avatar_url;
    const userInfo = document.querySelector('.userInfo');
    userInfo.textContent =
      user.name +
      ' (' +
      user.login +
      ')' +
      ' - ' +
      user.bio +
      ' - ' +
      user.location;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Main function to fetch and display repository information
async function repos(username) {
  try {
    // Fetch user information
    const user = await fetchUser(username);

    // Display user information
    const userInfo = document.querySelector('.userInfo');
    userInfo.textContent = user.name;

    const repositories = await fetchUserRepositories(username);

    console.log(repositories);

    // Get the GitHub data container
    const githubDataContainer = document.getElementById('github-data');

    // Clear the container
    githubDataContainer.innerHTML = '';

    // Add each repository to the container
    repositories.forEach((repo) => {
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
function main() {
  userInfo('prosfp');
  respos('prosfp');
}

main();

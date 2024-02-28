// Import the Octokit library
import { Octokit } from 'https://cdn.skypack.dev/@octokit/core';

// Define your personal access token
const TOKEN = 'el_teu_token_personal';

// Create an instance of Octokit with your access token
const octokit = new Octokit({ auth: TOKEN });

// Function to fetch user information

// Function to fetch repositories for a user

// Main show basic user information
async function userInfo(username) {}

// Main function to display repository information
async function repos(username) {
  try {
    // ...

    // Get the GitHub data container
    const githubDataContainer = document.querySelector('.repo-list');
    console.log(githubDataContainer);

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

      // ... altres detalls del repositori

      githubDataContainer.appendChild(repoElement);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Create new repository

async function newRepo() {}

async function deleteRepo() {}

// Call the main function with a username
function main() {
  userInfo('username');
  repos('username');
}

// make functions available to the browser
window.newRepo = newRepo;
window.deleteRepo = deleteRepo;

main();

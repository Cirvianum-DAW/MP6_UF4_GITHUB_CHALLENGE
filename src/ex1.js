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
    const response = await octokit.request(
      `GET /users/${username}/repos?sort=created`
    );
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
    const repositories = await fetchUserRepositories(username);
    console.log(repositories);

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

      const repoDescription = document.createElement('p');
      repoDescription.className = 'text-gray-700 mb-2';
      repoDescription.textContent = repo.description;
      repoElement.appendChild(repoDescription);

      const repoLink = document.createElement('a');
      repoLink.className = 'text-blue-600';
      repoLink.href = repo.html_url;
      repoLink.textContent = 'View on GitHub';
      repoElement.appendChild(repoLink);

      const repoLanguage = document.createElement('p');
      repoLanguage.className = 'text-gray-700';
      repoLanguage.textContent = 'Language: ' + repo.language;
      repoElement.appendChild(repoLanguage);

      const repoStars = document.createElement('p');
      repoStars.className = 'text-gray-700';
      repoStars.textContent = 'Stars: ' + repo.stargazers_count;
      repoElement.appendChild(repoStars);

      const repoForks = document.createElement('p');
      repoForks.className = 'text-gray-700';
      repoForks.textContent = 'Forks: ' + repo.forks;
      repoElement.appendChild(repoForks);

      githubDataContainer.appendChild(repoElement);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

async function newRepo() {
  try {
    const response = await octokit.request('POST /user/repos', {
      name: 'new-repo-prova',
      description: 'This is your first repository created by an API call',
      private: false,
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function deleteRepo() {
  try {
    const response = await octokit.request(
      'DELETE /repos/prosfp/new-repo-prova'
    );
    console.log(response.status);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the main function with a username
function main() {
  userInfo('prosfp');
  repos('prosfp');
}

// make functions available to the browser
window.newRepo = newRepo;
window.deleteRepo = deleteRepo;

main();

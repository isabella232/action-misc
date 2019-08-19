import * as core from '@actions/core';
import * as github from '@actions/github';

async function run() {
  try {
    const myInput = core.getInput('myInput');
    core.debug(`Hello ${myInput}`);
    gh();
  } catch (error) {
    core.setFailed(error.message);
  }
}

async function gh() {
  const client = new github.GitHub(process.env.GITHUB_TOKEN as string);
  const commit = await client.repos.getCommitRefSha({
    owner: '8398a7',
    repo: 'action-misc',
    ref: 'a3b856494aeb9bb490c0599f976ac9c6f96f8b6a',
  });
  core.debug(JSON.stringify(commit.data));
}

run();

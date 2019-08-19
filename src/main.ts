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
  const client = new github.GitHub(process.env.GITHUB_TOKEN as any);
  const commit = await client.repos.getCommit();
  core.debug(commit.data.commit.message);
}

run();

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
  const client = new github.GitHub((window as any).process.env.GITHUB_TOKEN);
  const commit = await client.repos.getCommit();
  core.debug(commit.data.commit.message);
}

run();

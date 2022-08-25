module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
        preset: 'angular',
        releaseRules: [
          { release: 'patch', type: 'chore' },
          { release: 'patch', type: 'ci' },
          { release: 'patch', type: 'refactor' },
          { release: 'patch', type: 'style' },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { hidden: false, section: 'Build System', type: 'build' },
            { hidden: false, section: 'Build System', type: 'chore' },
            { hidden: false, section: 'Continuous Integration', type: 'ci' },
            { hidden: false, section: 'Documentation', type: 'docs' },
            { hidden: false, section: 'Features', type: 'feat' },
            { hidden: false, section: 'Bug Fixes', type: 'fix' },
            {
              hidden: false,
              section: 'Performance Improvements',
              type: 'perf',
            },
            { hidden: false, section: 'Code Refactoring', type: 'refactor' },
            { hidden: false, section: 'Styles', type: 'style' },
            { hidden: false, section: 'Tests', type: 'test' },
          ],
        },
        writerOpts: {
          commitsSort: ['subject', 'scope'],
        },
      },
    ],
    [
      '@semantic-release/exec',
      {
        // HINT: Make sure that the changed files are part of the 'assets' property in @semantic-release/git
        verifyReleaseCmd: "sed -i 's/version-.*-blue/version-${nextRelease.version.replace(/-/g, '--')}-blue/g' README.md",
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'README.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
};

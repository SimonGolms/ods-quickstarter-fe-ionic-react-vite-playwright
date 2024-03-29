/* eslint-disable import/no-unused-modules, no-multi-str, no-template-curly-in-string */
module.exports = {
  branches: [
    "master",
    "next",
    {
      channel: '${name.replace(/[^a-zA-Z0-9]/g, "-")}',
      name: "feature/*",
      prerelease: '${name.replace(/[^a-zA-Z0-9]/g, "-")}',
    },
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
        preset: "angular",
        releaseRules: [
          { breaking: true, release: "major" },
          { release: "patch", type: "chore" },
          { release: "patch", type: "ci" },
          { release: "patch", type: "refactor" },
          { release: "patch", type: "style" },
        ],
      },
    ],
    [
      // More Information about the plugin https://github.com/semantic-release/exec
      // and the api https://semantic-release.gitbook.io/semantic-release/developer-guide/js-api
      "@semantic-release/exec",
      {
        analyzeCommitsCmd: "echo ${lastRelease.version} > .VERSION",
        // HINT: Make sure that the changed files are part of the 'assets' property in @semantic-release/git in the release script
        // WORKAROUND: Use of `case` command, because not all shell versions can interpret the `if` statement syntax correctly.
        // Maximum system compatibility between Windows, Linux and MacOS, since `sed -i` behaves differently on each type.
        verifyReleaseCmd:
          "echo ${nextRelease.version} > .VERSION && \
           npm version ${nextRelease.version} --no-git-tag-version --allow-same-version && \
           case $OSTYPE in darwin*) SEDOPTION=\" \";; esac && \
           sed -i$SEDOPTION'' -e 's/version:.*/version: ${nextRelease.version}/g' chart/Chart.yaml && \
           sed -i$SEDOPTION'' -e 's/appVersion:.*/appVersion: \"${nextRelease.version}\"/g' chart/Chart.yaml && \
           sed -i$SEDOPTION'' -e 's/imageTag:.*/imageTag: ${nextRelease.version}/g' chart/values.yaml && \
           sed -i$SEDOPTION'' -e 's/version:.*/version: ${nextRelease.version}/g' metadata.yml && \
           sed -i$SEDOPTION'' -e 's/version-.*-blue/version-${nextRelease.version.replace(/-/g, '--')}-blue/g' README.md",
      },
    ],
  ],
};

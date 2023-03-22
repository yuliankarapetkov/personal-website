module.exports = {
	branches: "master",
	repositoryUrl: "https://github.com/yuliankarapetkov/personal-website",
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		"@semantic-release/changelog",
		"@semantic-release/npm",
		[
			"@semantic-release/git",
			{
				assets: ["CHANGELOG.md", "package.json"],
				message: "chore(release): ${nextRelease.version} [skip ci]",
			},
		],
		"@semantic-release/github",
		"semantic-release-export-data",
	],
}

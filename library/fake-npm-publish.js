const fs = require('fs');

const packageJSONFile = fs.readFileSync('package.json','utf8');
const packageJson = JSON.parse(packageJSONFile);
delete packageJson.scripts;
delete packageJson.devDependencies;
const packageJsonString = JSON.stringify(packageJson, null, 2) + '\n';

fs.writeFileSync(
	'dist/package.json',
	packageJsonString,
	{
		flag: 'w',
	},
);

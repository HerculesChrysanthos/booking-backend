module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': 'eslint:recommended',
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix' //windows
		],
		'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
		'no-multi-spaces': ['error', { ignoreEOLComments: false }],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'indent': [4, 'tab'],

		// 'prettier': ['error',
		// 	{
		// 		bracketSpacing: true,
		// 		tabWidth: 2,
		// 		trailingComma: 'es5',
				
		// 	}
		// ]
		
	}
};

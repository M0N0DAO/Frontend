# [Imperio Codebase](https://app.imperio.money/)
This is the front-end repo for Wonderland. 

##  🔧 Setting up Local Development

Required: 
- [Node v14](https://nodejs.org/download/release/latest-v14.x/)  
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) 
- [Git](https://git-scm.com/downloads)
- [Truffle](https://www.npmjs.com/package/truffle)


```bash
cd Imperio
npm install -g yarn
npm install -g truffle
```

Update truffle config to reflect latest sol: ^0.8.11
```bash
code truffle-config.js
```

Run the codebase
```bash
npm run start
```

The site is now running at `http://localhost:3000`!
Open the source code and start editing!

**Pull Requests**:
Each PR into master will get its own custom URL that is visible on the PR page. QA & validate changes on that URL before merging into the deploy branch. 


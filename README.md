What is Husky?
Husky improves your commits and more 🐶 woof!

Husky helps us do more things along with git commands. For example, we can run npm test in pre-commit phase and do something else in post-commit phase

#For npm
npx husky-init && npm install

#For Yarn 1
npx husky-init && yarn

npx husky add .husky/pre-commit "npm test"

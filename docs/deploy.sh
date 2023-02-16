# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://monazite1s.github.io
git push -f git@github.com:monazite1s/monazite1s.github.io.git master

# 如果发布到 https://monazite1s.github.io/<REPO>
# git push -f git@github.com:monazite1s/<REPO>.git master:gh-pages

cd -
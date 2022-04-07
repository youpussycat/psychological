git rm -r --cached .
git add .
git commit -m "%date% %time%"
git pull
git push
pause
echo 如果.gitignore改变了要用这个
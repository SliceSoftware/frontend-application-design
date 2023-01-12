
for b in $( git branch --list "chapter*" ); do
    echo "Merging main into $b"
    git checkout $b
    git pull --rebase
    git merge --squash main 
    git commit -am "Merged main"
done

git checkout main

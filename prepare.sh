#!/usr/bin/env bash

composer create-project october/october install 1.0.*

rsync -a install/ .
rm -rf install/

rm .gitignore
ln -s pixiu/.gitignore .gitignore

php artisan october:install
php artisan october:update

composer update

php artisan october:fresh

npm install

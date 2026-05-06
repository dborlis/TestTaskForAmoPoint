## How to use

### Task 1

Напишите Laravel проект, в состав которого обязательно входит

1. Консольная команда, которая каждые 5 минут получает информацию от любого API на ваш выбор и сохраняет её в таблицу БД
2. Route, отдающий массив записей таблицы в формате json
   Например: https://official-joke-api.appspot.com/random_joke

#### Steps to run

- download project
- use composer to install dependencies
- set correct DB settings in .env file (we suppose that DB is installed in your environment)
- use terminal and go to `laravel` folder
- run `php artisan serve` to quickly run PHP Development Server at http://127.0.0.1:8000/ (we suppose that PHP is installed in your environment)
- check DB connection by url http://127.0.0.1:8000/api/db-test if DB settings are correct you will see 'DB connected' message
- run `php artisan migrate` to create necessary DB tables
- run `php artisan schedule:work` to emulate cron job for Laravel Task Scheduling and see that CLI command executes every 5 min, or just run `php artisan command:get-api-info` several times to fill DB with data from API
- go to http://127.0.0.1:8000/api/weather/history to see the data from DB

Tested on PHP v7.4.23


### Task 2

Необходимо написать js код, который в зависимости от выбранного значения поля Тип отражает разный набор полей на странице  testlist.html
Должны отображаться только те поля в атрибуте name которых есть значение выбранного элемента списка.
Решение должно представлять из себя файл для подключения к странице, либо сниппет для запуска в браузере в консоли.
Допускается использование сторонних библиотек при условии обоснования их использования. При разборе выполненных заданий при прочих равных будет важнее алгоритм решения. Будет плюсом перечисление алгоритмов решений-аналогов и почему не были выбраны эти варианты.

#### Steps to use

- Copy code of task2snippet.js file and run it in browser console, or attach this file using \<script\> tag before the closing \<body\> tag in the HTML page

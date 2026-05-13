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


### Task 3

Дополнительное задание
Написать счетчик посещений страницы. Решение должно состоять из двух компонентов: 
   -кода на js, который подключается к любому сайту. Скрипт должен собрать необходимые данные(ip, город, устройство) и отправлять на сервер.
   -бэк часть, который хранит данные в БД(sqllite или другой на выбор) и показывает график посещений по часам(по оси х - количество уникальных посещений за час, по оси y- время), круговую диаграмму с разбиением по городам.
Оформить в виде страницы просмотра статистики с авторизацией. Решение выложить на любой хостинг для возможности проверки

#### Steps to use

> **Примечание!
> В данный момент у меня нет возможности выложить код на какой-либо хостинг. Но решение протестировано локально и оно работает.**


- This code can be just runned locally use `node app.js` command and then by opening http://localhost:3000/ you can login by using **admin:admin** credentials and see the stats after login. Every page refresh will add new line with your visit in to DB.

##### Other way to use - host it globally somewhere

- copy project folder `task3tracker`
- `npm install` to install dependencie
- install server if not yet (nginx/apache)
- create autorun for the app.js
- check that everything works here https://your-domain.ru/track and here https://your-domain.ru/stats/hours
- replace `localhost:3000` with real domain name (your-domain.ru) in file `task3tracker\tracker.js` at the line starts with 'const endpoint....', uncomment that line and remove next line with connemt "USED FOR LOCAL OR "SAME DOMAIN" TESTING"
- embed the tracker script `task3tracker\tracker.js` in to your website/page
```html
<script src="http://your-domain.ru/tracker.js"></script>
```


<<<<<<< HEAD
console.error('Hello World')

const userAge = 35
if (userAge >= 18) {
    console.log('Вы совершеннолетний')
} else {
    console.log('Вы НЕ совершеннолетний')
=======
console.log('Hello')

const age = 20
if (age >= 18) {
    console.log('Вы совершеннолетний')
} else {
    console.log('Вы не совершеннолетний')
>>>>>>> feature/user-access
}

// git remote origin url  --- этой командой мы привязываем репозиторий к нашей папке

// git remote -v     --- чтобы проверить , привязан ли наш проект к какому-нибудь github репозиторию вводим эту комманду

// git -config 

// нам нужны 2 параметра , чтобы настроить правильно настроить наш репозиторий 
// вводим команду  git config user.name - показывает имя github
// проверка user email - git config user.email
// чтобы изменить название для нашего email пишем :
// git config user.email "указать новое название для нашего email"


// чтобы отследить наши проделанные изменения есть команда git status

// команда , которая позволяет подготовить наш файл к записи git add
describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
       cy.visit('https://login.qa.studio/');                                                //Зашли на сайт
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');       //Проверил цвет кнопки. вост.пароль.

       cy.get('#mail').type('german@dolnikov.ru');                                          //Ввели логин
       cy.get('#pass').type('iLoveqastudio1');                                              //Ввели пароль
       cy.get('#loginButton').click();                                                      //Нажали войти

       cy.get('#messageHeader').contains('Авторизация прошла успешно');                     //Авторизация успешна
       cy.get('#messageHeader').should('be.visible');                                       //Элемент виден пользователю
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');                       //Видим,что крестик виден пользователю
       })
       

       it('Логика востановления пароля', function () {
        cy.visit('https://login.qa.studio/');                                                //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');       //Проверил цвет кнопки. вост.пароль.
        cy.get('#forgotEmailButton').click();                                                //Нажимал кнопку "Забыл пароль"

        cy.get('#forgotForm > .header').contains('Восстановите пароль');                     //Элемен содержит тест "Восстановить пароль"
        cy.get('#forgotForm > .header').should('be.visible');                                //Элемент виден пользователю

        cy.get('#mailForgot').type('german@dolnikov.ru')                                     //Ввожу почту
        cy.get('#restoreEmailButton').click();                                               //Нажал "отправить код"

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');             //Элемент содержит тескт "Успешно отправили пароль"
        cy.get('#messageHeader').should('be.visible');                                       //Текст "Успешно отправили пароль" видень пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');                       //Крестик виден пользователю
        })


       it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');                                                //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');       //Проверил цвет кнопки. вост.пароль.
 
        cy.get('#mail').type('german@dolnikov.ru');                                          //Ввели логин
        cy.get('#pass').type('iLoveqastudio97');                                             //Ввели неверный пароль
        cy.get('#loginButton').click();                                                      //Нажали войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет');                   //Получаем ответ "Такого логина или пароля нет"
        cy.get('#messageHeader').should('be.visible');                                       //Элемент виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');                       //Видим,что крестик виден пользователю
        })

        it('Верный пароль и неверный логин', function () {
            cy.visit('https://login.qa.studio/');                                                //Зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');       //Проверил цвет кнопки. вост.пароль.
     
            cy.get('#mail').type('germans@dolnikovs.ru');                                          //Ввели неверный логин
            cy.get('#pass').type('iLoveqastudio1');                                             //Ввели верный пароль
            cy.get('#loginButton').click();                                                      //Нажали войти
            
            cy.get('#messageHeader').contains('Такого логина или пароля нет');                   //Получаем ответ "Такого логина или пароля нет"
            cy.get('#messageHeader').should('be.visible');                                       //Элемент виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');                       //Видим,что крестик виден пользователю
            })

            it('Верный пароль и логин без @ ', function () {
                cy.visit('https://login.qa.studio/');                                                //Зашли на сайт
                cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');       //Проверил цвет кнопки. вост.пароль.
         
                cy.get('#mail').type('germandolnikov.ru');                                          //Ввели логин без @
                cy.get('#pass').type('iLoveqastudio1');                                             //Ввели верный пароль
                cy.get('#loginButton').click();                                                      //Нажали войти
                
                cy.get('#messageHeader').contains('Нужно исправить проблему валидации');             //Получаем ответ "Нужно исправить проблему валидации"
                cy.get('#messageHeader').should('be.visible');                                       //Элемент виден пользователю
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');                       //Видим,что крестик виден пользователю
                })

                it('Приведение к строчным буквам ', function () {
                    cy.visit('https://login.qa.studio/');                                                //Зашли на сайт
                    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');       //Проверил цвет кнопки. вост.пароль.
             
                    cy.get('#mail').type('GerMan@Dolnikov.ru');                                          //Ввели логин с заглавными буквами
                    cy.get('#pass').type('iLoveqastudio1');                                             //Ввели верный пароль
                    cy.get('#loginButton').click();                                                      //Нажали войти
                    
                    cy.get('#messageHeader').contains('Авторизация прошла успешно');                     //Авторизация прощла успешно
                    cy.get('#messageHeader').should('be.visible');                                       //Элемент виден пользователю
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                    })
})





//+++1.Напиши проверку на позитивный кейс авторизации:
//а) Ввести правильный логин
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить нужный текст и наличие кнопки крестик

//+++++2. Напиши автотест на проверку логики восстановления пароля:
//а) Нажать «Забыли пароль»
//б) Ввести любой имейл
//в) Проверка, что получили нужный текст и есть кнопка крестика

//++++++3. Напиши проверку на негативный кейс авторизации:
//а) Ввести правильный логин
//б) Ввести НЕправильный пароль
//в) Нажать войти
//г) Проверить нужный текст и наличие кнопки крестик

//++++++4. Напиши проверку на негативный кейс авторизации:
//а) Ввести НЕправильный логин
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить нужный текст и наличие кнопки крестик

//+++++++5. Напиши проверку на негативный кейс валидации:
//а) Ввести логин без @
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить, что получаем текст с ошибкой

//+++++++ 6. Напиши проверку на приведение к строчным буквам в логине:
//а) Ввести логин GerMan@Dolnikov.ru
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить, что авторизация успешна (текст именно «Авторизация прошла успешно» и наличие кнопки крестик)
//Важно: Разработчик допустил баг в этом месте и не реализовал пункт #2 из требований.
//Тест должен упасть — и это ок (то есть мы этим тестом поймали баг, который допустил разработчик)
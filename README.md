# online-shop
**Модальное окно логинизации:**
#### Вставляем код html в конце страницы:
```html
<div class="overlay"></div>
    <section class="login-modal">
        <div class="modal-container">
            <button type="button" class="close_window">
                <span>×</span>
            </button>
            <h4>Login</h4>
            <form action="#" class="modal-form">
                <div class="form-shell">
                    <input class="input-group" type="text" placeholder="Name" id="firstName" autocomplete="off">
                    <label for="firstName" class="icon-user"></label>
                </div>
                <div class="form-shell">
                    <input class="input-group" type="password" placeholder="Pasword" id="password" autocomplete="off">
                    <label for="password" class="icon-lock"></label>
                </div>
                <div class="form-submit">
                    <button>Submit</button>
                    <a href="#">
                        <i class="icon-pencil-square-o"></i>
                        Create An Account?</a>
                </div>
            </form>
            <a href="#">
                Lost Password?
            </a>
        </div>
```
#### Стили:
```scss
.overlay {
    position: fixed;
    z-index: 99999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    visibility: hidden;

    cursor: default;
    transition: opacity .5s;

    opacity: 0;
    background-color: rgba(0, 0, 0, .7);
}

.close_window {
    font: {
        size: 24px;
        weight: 700;
    }

    position: absolute;
    top: 13px;
    right: 21px;

    cursor: pointer;

    color: $white;
    border: none;
    outline: none;
    background: transparent;
}

.login-modal {
    position: fixed;
    z-index: 999999;
    top: 50%;
    left: 50%;

    display: block;
    visibility: hidden;

    width: 100%;
    max-width: 730px;
    height: 484px;
    margin: 0 auto;
    padding: 85px 0;

    transition: opacity .5s, top .5s;
    transform: translate(-50%, -50%);

    background: #8bc34a;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, .5);
}

.modal-container {
    max-width: 400px;
    margin: 0 auto;

    h4 {
        font: {
            size: 48px;
            weight: 700;
        }

        text: {
            transform: uppercase;
            align: center;
        }
        color: $white;
        margin: 0;
        padding: 0 0 30px;
    }

    a {
        font-size: 18px;

        color: $white;
    }
}

.modal-form {
    .form-shell {
        position: relative;

        &:first-child {
            margin-bottom: 8px;
        }
    }

    .input-group {
        font-weight: 400;
        height: 43px;
        padding: 0 0 0 41px;

        color: $white;
        border: none;
        border-radius: 0;
        background: #76ae36;

        &::placeholder {
            color: $white;
        }
    }

    label::before {
        font-size: 14px;

        position: absolute;
        top: 14px;
        left: 18px;

        color: $white;
    }
}

.form-submit {
    display: flex;

    margin: 19px 0 24px;

    justify-content: space-between;

    button {
        font: {
            size: 14px;
            weight: 700;
        };

        width: 100%;
        max-width: 139px;
        height: 48px;

        text-transform: uppercase;

        color: $black;
        border: none;
        outline: none;
        box-shadow: 0 2px 2px 0 rgba(118, 174, 54, .75);
    }

    a {
        width: 100%;
        max-width: 250px;
        padding: 14px 0;

        text-align: center;

        border-radius: 0;
        background: #76ae36;

        &:hover {
            background-color: #95c85a;
        }

        i {
            margin-right: 5px;

            vertical-align: middle;
        }
    }
}
```

#### js-скрипт:

```js
$('.login-modal .close_window, .overlay').click(function() {
        $('.login-modal, .overlay').css({ 'opacity': 0, 'visibility': 'hidden' });
    });
    $('a.open_window').click(function(e) {
        $('.login-modal, .overlay').css({ 'opacity': 1, 'visibility': 'visible' });
        e.preventDefault();
    });
```

P.S: ссылке **Login** в теге нужно добавить класс **open_window**, иначе скрипт не будет отрабатывать.

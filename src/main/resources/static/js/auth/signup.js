
import { ValidationRules } from "./validation.js";

// 회원 가입정보를 서버로 전송하기
async function fetchToSignUp(userData){

    const response = await fetch('api/auth/signup',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });

    const data = await response.json();


    window.location.href ='/login';




}

function initSignUp() {

    // form submit 이벤트
    const $form = document.querySelector('.auth-form');

    // 입력 태그들을 읽어서 객체로 관리
    const $inputs = {
        email: $form.querySelector('input[name="email"]'),
        name: $form.querySelector('input[name="name"]'),
        username: $form.querySelector('input[name="username"]'),
        password: $form.querySelector('input[name="password"]'),
    };

    const handleInput = ($input) => {
        removeErrorMessage($input.closest('.form-group'));
        validateField($input); // 입력값 검증 함수 호출
    };

    // 4개의 입력창에 입력 이벤트 바인딩
    Object.values($inputs).forEach($input => {
        $input.addEventListener('input', () => handleInput($input));
        $input.addEventListener('blur', () => handleInput($input));
    });

    $form.addEventListener('submit', e => {
        e.preventDefault();

        // 사용자가 입력한 모든 입력값 가져오기
        const email = document.querySelector('input[name="email"]').value;
        const name = document.querySelector('input[name="name"]').value;
        const username = document.querySelector('input[name ="username"]').value;
        const password = document.querySelector('input[name="password"]').value;

        const payload = {
            email: email,
            name: name,
            username: username,
            password: password
        }

        if (!document.querySelector('input[name="email"]').checkValidity()) {
            return alert("이메일 오류");
        }
        // if (!name.checkValidity()) {
        //     return alert("이름 오류");
        // }
        // if (!username.checkValidity()) {
        //     return alert("별칭 오류");
        // }
        // if (!password.checkValidity()) {
        //     return alert("패스워드 오류");
        // }
        // 서버로 데이터 전송
        fetchToSignUp(payload);


    });
}


// === 함수 정의 ===//
// 입력값을 검증하고 에러메세지를 렌더링하는 함수
async function validateField($input) {

    let isValid = true;

    // 1. 빈 값 체크
    // 이게 어떤태그인지 알아오기
    const fieldName = $input.name;
    // 입력값 읽어오기
    const inputValue = $input.value.trim();
    // input의 부모 가져오기
    const $formField = $input.closest('.form-group');
    if (!inputValue) {
        isValid =false;
        showError($formField, ValidationRules[fieldName]?.requiredMessage); // 에러메시지 렌더링
    } else {
        if (fieldName === 'email') {
            isValid =  await duplicateCheckEmail($formField, inputValue);
        }
        else if(fieldName === 'username'){
             isValid = await duplicateCheckUsername($formField,inputValue);
        }


    }
    // $input.dataset.isValid = isValid.toString();


}

function showError($formField, message) {

    $formField.classList.add('error');
        const $errorSpan = document.createElement('span');
        $errorSpan.classList.add('error-message');
        $errorSpan.textContent = message;
        $formField.append($errorSpan);
    }

    /**
     * 에러 및 비밀번호 피드백을 제거한다.
     */
    function removeErrorMessage($formField) {
        $formField.classList.remove('error');
        const error = $formField.querySelector('.error-message');
        if (error) error.remove();
    }

    function duplicateCheckEmail($formField, inputValue) {
        fetch(`api/auth/check-duplicate?type=email&value=${inputValue}`)
            .then(response => response.json())
            .then(data => {
                showError($formField, data.message);
            })
    }

    async function duplicateCheckUsername($formField, inputValue) {
        fetch(`api/auth/check-duplicate?type=username&value=${inputValue}`)
            .then(response => response.json())
            .then(data => {
                showError($formField, data.message);
            })
    }



//==== 메인 실행 코드 ==== //
    document.addEventListener('DOMContentLoaded', initSignUp);


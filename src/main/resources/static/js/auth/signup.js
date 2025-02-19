
import { ValidationRules } from "./validation.js";

// 회원 가입정보를 서버로 전송하기
async function fetchToSignUp(userData){

    try {
        const response = await fetch('api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });

        const data = await response.json();
    if (response.ok) {
        // 회원가입 성공 시
        alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
        window.location.href = '/'; // 로그인 페이지로 리디렉션
    } else {
        // 회원가입 실패 시
        alert(data.message);
        alert('회원가입에 실패하셨습니다. 다시 시도해주세요');
    }
} catch (error) {
    console.error('회원가입 요청 실패:', error.message);
    alert('서버와 통신 중 문제가 발생했습니다. 다시 시도해주세요.');
}
}

function initSignUp() {

    // form submit 이벤트
    const $form = document.querySelector('.auth-form');
    const $formField = document.querySelector('.form-group')

    // 입력 태그들을 읽어서 객체로 관리
    const $inputs = {
        email: $form.querySelector('input[name="email"]'),
        name: $form.querySelector('input[name="name"]'),
        username: $form.querySelector('input[name="username"]'),
        password: $form.querySelector('input[name="password"]'),
    };

    let throttleTimeout;

    const handleInput = ($input) => {
        if (throttleTimeout) clearTimeout(throttleTimeout);
        throttleTimeout = setTimeout(() => {
            removeErrorMessage($input.closest('.form-group'));
            validateField($input);
        }, 300); // 300ms 동안 새로운 호출 무시
    };

    let blurValidationInProgress = false; // 상태 플래그 추가

    const handleBlur = async ($input) => {
        if (blurValidationInProgress) return; // 중복 처리 방지
        blurValidationInProgress = true;

        const $formField = $input.closest('.form-group');
        removeErrorMessage($formField); // 기존 에러 메시지 제거
        await validateField($input); // 유효성 검사 수행

        blurValidationInProgress = false; // 플래그 초기화
    };


    // 4개의 입력창에 입력 이벤트 바인딩
    Object.values($inputs).forEach($input => {
        $input.addEventListener('input', () => handleInput($input));
        $input.addEventListener('blur', () => handleBlur($input));
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
    const existingError = $formField.querySelector('.error-message');
    if (existingError) {
        // 이미 존재하는 에러 메시지가 같은 내용인지 확인
        if (existingError.textContent === message) return; // 중복 메시지 방지
        existingError.remove(); // 기존 메시지 삭제
    }

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
        await fetch(`api/auth/check-duplicate?type=username&value=${inputValue}`)
            .then(response => response.json())
            .then(data => {
                showError($formField, data.message);
            })
    }



//==== 메인 실행 코드 ==== //
    document.addEventListener('DOMContentLoaded', initSignUp);


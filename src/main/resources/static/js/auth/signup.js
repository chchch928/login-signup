
// 회원 가입정보를 서버로 전송하기
async function fetchToSignUp(userData){

    const response = await fetch('api/auth/signup',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });

    const data = await response.json();

   alert(data.message);

}

function initSignUp(){

    // form submit 이벤트
    const $form = document.querySelector('.auth-form');

    $form.addEventListener('submit',e =>{
        e.preventDefault();

        // 사용자가 입력한 모든 입력값 가져오기
        const email = document.querySelector('input[name="email"]').value;
        const name = document.querySelector('input[name="name"]').value;
        const username = document.querySelector('input[name ="username"]').value;
        const password = document.querySelector('input[name="password"]').value;

        const payload = {
            email:email,
            name:name,
            username:username,
            password:password
        }

        // 서버로 데이터 전송
        fetchToSignUp(payload);

    })




}

//==== 메인 실행 코드 ==== //
document.addEventListener('DOMContentLoaded',initSignUp)
//
// import initBoard from './components/board.js'
//
// // DOMContentLoaded 이벤트에 초기화 로직 연결
// document.addEventListener('DOMContentLoaded', () => {
//     initBoard();
// });
//
//
// document.addEventListener('DOMContentLoaded', () => {
//     const boardItems = document.querySelectorAll('.board-item');
//     const modal = document.getElementById('modal');
//     const overlay = document.getElementById('modal-overlay');
//
//     boardItems.forEach(item => {
//         item.addEventListener('click', () => {
//             modal.style.display = 'block';
//             overlay.style.display = 'block';
//         });
//     });
//
//     overlay.addEventListener('click', () => {
//         modal.style.display = 'none';
//         overlay.style.display = 'none';
//     });
// });
//
// // Modal 닫기 기능
// function closeModal() {
//     const modal = document.getElementById('modal');
//     const overlay = document.getElementById('modal-overlay');
//     modal.style.display = 'none';
//     overlay.style.display = 'none';
// }
//
// // 이벤트 리스너 추가
// document.addEventListener('DOMContentLoaded', () => {
//     const closeButton = document.querySelector('.modal-footer button');
//     if (closeButton) {
//         closeButton.addEventListener('click', closeModal);
//     }
// });


import initBoard from './components/board.js';

// 초기화 함수
function initialize() {
    initBoard();
    setupModalInteractions();
}

// 모달 관련 동작 설정
function setupModalInteractions() {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('modal-overlay');
    const closeButton = document.querySelector('.modal-footer button');
    const boardItems = document.querySelectorAll('.board-item');

    if (!modal || !overlay) {
        console.error('Modal or overlay element is missing!');
        return;
    }

    // 모달 열기 이벤트
    boardItems.forEach(item => {
        item.addEventListener('click', () => openModal(modal, overlay));
    });

    // 모달 닫기 이벤트
    overlay.addEventListener('click', () => closeModal(modal, overlay));
    if (closeButton) {
        closeButton.addEventListener('click', () => closeModal(modal, overlay));
    }
}

// 모달 열기 함수
function openModal(modal, overlay) {
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

// 모달 닫기 함수
function closeModal(modal, overlay) {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

// DOMContentLoaded 이벤트 리스너
document.addEventListener('DOMContentLoaded', initialize);

document.addEventListener('DOMContentLoaded', () => {
    const boardItems = document.querySelectorAll('.board-item');
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('modal-overlay');

    boardItems.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    overlay.addEventListener('click', () => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });
});

// Modal 닫기 기능
function closeModal() {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('modal-overlay');
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

// 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.modal-footer button');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
});

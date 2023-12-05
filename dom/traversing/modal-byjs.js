const body = document.body;

// Tạo modal
const modal = document.createElement('div');
modal.classList.add('modal');

// Tạo modalContent
const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');

// Tạo modalClose
const modalClose = document.createElement('i');
modalClose.classList.add('fa', 'fa-times', 'modal-close');

// Tạo modalDesc
const modalDesc = document.createElement('div');
modalDesc.classList.add('modal-desc');
modalDesc.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem maxime eligendi corrupti!';

// Tạo modalAction
const modalAction = document.createElement('div');
modalAction.classList.add('modal-action');

// Tạo modalCancel
const modalCancel = document.createElement('button');
modalCancel.classList.add('modal-cancel');
modalCancel.textContent = 'Cancel';
modalCancel.addEventListener('click', () => {
    modal.classList.remove('is-show');
});

// Tạo modalSubmit
const modalSubmit = document.createElement('button');
modalSubmit.classList.add('modal-submit');
modalSubmit.textContent = 'Submit';

// Sắp xếp cấu trúc cây DOM
modal.appendChild(modalContent);
modalContent.appendChild(modalClose);
modalContent.appendChild(modalDesc);
modalContent.appendChild(modalAction);
modalAction.appendChild(modalCancel);
modalAction.appendChild(modalSubmit);

// Thêm modal vào body
body.appendChild(modal);

// Kích hoạt modal sau 3 giây
if (modal) {
    setTimeout(() => {
        modal.classList.add('is-show');
    }, 3000);
}

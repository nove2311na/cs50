// const modal = document.querySelector('.modal');
// console.log(modal);

// if(modal){
    //     setTimeout(() => {
        //         modal.classList.add('is-show');
        //     }, 3000);
        // }
        
        
        const body = document.body
        // const template = `
        // <div class="modal">
        //         <div class="modal-content">
        //             <i class="fa fa-times modal-close"></i>
        //             <div class="modal-desc">
        //                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem maxime eligendi corrupti!
        //             </div>
        //             <div class="modal-action">
        //                 <button class="modal-cancel">Cancel</button>
        //                 <button class="modal-submit">Submit</button>
//             </div>
//         </div>
//     </div>
//     `

// body.insertAdjacentHTML('afterbegin', template)
// if (template){
    //     setTimeout(() => {
        //         const modal = document.querySelector('.modal')
        //         modal.classList.add('is-show')
        //     }, 3000)
        // }
        
        // Tạo element div và thêm nội dung HTML vào
        const template2 = document.createElement('div');
template2.innerHTML = `
<div class="modal">
<div class="modal-content">
<i class="fa fa-times modal-close"></i>
<div class="modal-desc">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem maxime eligendi corrupti!
</div>
<div class="modal-action">
<button class="modal-cancel">Cancel</button>
<button class="modal-submit">Submit</button>
</div>
</div>
</div>
`;

// Thêm element vào body
body.appendChild(template2);

// Sử dụng setTimeout để thêm class is-show sau 3 giây
setTimeout(() => {
    const modal = document.querySelector('.modal');
    modal.classList.add('is-show');
}, 3000);

// đóng modal khi tương tác với cancel button
const modalCancel = document.querySelector('.modal-cancel');
modalCancel.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('is-show');
});
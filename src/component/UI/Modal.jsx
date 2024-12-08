import {createPortal} from 'react-dom'
export default function Modal({children, open}){
    return createPortal(
    <dialog>

    </dialog>, 
    document.getElementById('Modal'));
}
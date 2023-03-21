import "./styles.css"
import { useState } from "react";
import Modal from 'react-modal'
import { PrivacyPolicy } from "./Privacy";

const Footer = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);


    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true);
    }

    const setModalIsOpenToFalse = () =>{
        setModalIsOpen(false);
    }



    return(
        <>
        <footer className="container-fluid footer fixed-bottom">
            <div className="d-flex flex-row">
                <div className="col-6">
                    <ul>
                        <li><button type="button" className="btn btn-info footer-button" onClick={setModalIsOpenToTrue}>Privacy Policy</button></li>
                        <Modal isOpen={modalIsOpen} ariaHideApp={false} preventScroll={false}>
                            <button className="btn btn-info" onClick={setModalIsOpenToFalse}>X</button>
                            <PrivacyPolicy/>
                        </Modal>
                    </ul>
                </div>
               
            </div>
        </footer>
        </>
    )
}

export default Footer;
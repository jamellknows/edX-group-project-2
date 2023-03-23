import "./styles.css"
import { useState } from "react";
import Modal from 'react-modal'
import { PrivacyPolicy } from "./Privacy";
import { GithubLinks } from "./GithubLinks";

const Footer = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);

    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true);
    }

    const setModalIsOpenToFalse = () =>{
        setModalIsOpen(false);
    }


    return(
        <>
        <footer className="container-fluid footer fixed-bottom">
            <div className="d-flex">
                <div className="mx-auto">
                    <ul className="list-group list-group-horizontal" style={{listStyle: "none"}}>
                        <li className="list-item">Contact Us</li>
                        <li className="list-item">Github Links</li>
                        <li className="list-item"><button type="button" className="btn btn-info footer-button" onClick={setModalIsOpenToTrue}>Privacy Policy</button></li>

                        <Modal isOpen={modalIsOpen} ariaHideApp={false} preventScroll={false}>
                            <button className="btn btn-info" onClick={setModalIsOpenToFalse}>X</button>
                            <GithubLinks/>
                        </Modal>
                    <li><button type="button" className="btn btn-info footer-button" onClick={setModalIsOpenToTrue2}>Privacy Policy</button></li>
                        <Modal isOpen={modalIsOpen2} ariaHideApp={false} preventScroll={false}>
                            <button className="btn btn-info" onClick={setModalIsOpenToFalse2}>X</button>
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
import React from 'react';

//Internal Import
import Style from "../styles/faqs.module.css";

const FAQS = () => {
    return (
        <div className={Style.faq_container}>
            <h2>Frequently Asked Questions (FAQS)</h2>

            <div className={Style.faq}>
                <h3>What is a blockchain-based chat application?</h3>
                <p>A blockchain-based chat application utilizes blockchain technology to provide secure, decentralized, and transparent communication between users.</p>
            </div>

            <div className={Style.faq}>
                <h3>How does a blockchain-based chat application work?</h3>
                <p>In a blockchain-based chat application, messages are encrypted and stored on the blockchain, ensuring tamper-proof records.</p>
            </div>

            <div className={Style.faq}>
                <h3>What are the benefits of using a blockchain-based chat application?</h3>
                <p>1. Enhanced Security: Messages are encrypted and stored on the blockchain, making them secure from unauthorized access.</p>
                <p>2. Decentralization: The absence of a central authority ensures censorship-resistant communication.</p>
                <p>3. Data Integrity: Messages stored on the blockchain are immutable and tamper-proof, ensuring data integrity.</p>
                <p>4. Privacy: Users have control over their data and can communicate directly without intermediaries, enhancing privacy.</p>
                <p>5. Global Accessibility: Users can communicate globally without restrictions, fostering inclusivity and accessibility.</p>
            </div>

            <div className={Style.faq}>
                <h3>Is my data secure on a blockchain-based chat application?</h3>
                <p>Yes, your data is secure on a blockchain-based chat application due to the encryption and decentralized nature of the platform.</p>
            </div>


            <div className={Style.faq}>
                <h3>Are there any costs associated with using a blockchain-based chat application?</h3>
                <p>Typically, blockchain-based chat applications may have minimal transaction fees associated with certain actions, such as sending messages or interacting with smart contracts.</p>
            </div>

            <div className={Style.faq}>
                <h3>How do I ensure the authenticity of messages on a blockchain-based chat application?</h3>
                <p>Messages on a blockchain-based chat application are authenticated through cryptographic signatures and stored on the blockchain, ensuring their authenticity.</p>
            </div>

            <div className={Style.faq}>
                <h3>Can I recover deleted messages on a blockchain-based chat application?</h3>
                <p>No, once messages are deleted on a blockchain-based chat application, they cannot be recovered.</p>
            </div>

            <div className={Style.faq}>
                <h3>Is my personal information safe on a blockchain-based chat application?</h3>
                <p>Yes, your personal information is safe on a blockchain-based chat application due to the encryption and decentralized storage mechanisms.</p>
            </div>

        </div>
    );
}

export default FAQS;

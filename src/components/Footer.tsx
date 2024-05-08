import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="footer footer-transparent d-print-none">
                <div className="container-xl">
                    <div className="row text-center align-items-center flex-row-reverse">
                        <ul className="list-inline list-inline-dots mb-0">
                            <li className="list-inline-item">
                                &copy; {new Date().getFullYear()}{" "}
                                <a href="./." className="link-secondary">
                                    HRSphere
                                </a>
                                . All rights reserved.
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
import React, { PropsWithChildren } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout: React.FC<PropsWithChildren<{}>> = (props) => {
    return (
        <>
        <Navbar />
        <div className="page">
          <div className="page-wrapper">
            <div className="page-body">
                {props.children}
            </div>
            <Footer />
          </div>
        </div>
        </>
    );
};

export default AppLayout;

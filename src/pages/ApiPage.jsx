import React from "react";
import SidebarComponent from "../components/SidebarComponent";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import { useLocation } from "react-router-dom";

const ApiPage = ({ module }) => {
    return (
        <>
            <SidebarComponent />

            <main>
                <HeaderComponent />
                {module}
                <FooterComponent />
            </main>

        </>
    );
};

export default ApiPage;

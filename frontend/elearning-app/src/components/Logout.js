import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./styles";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button style={styles.buttonStyle} onClick={() => logout({ logoutParams: { returnTo: 'http://localhost:3000/' } })}>
            Log Out
        </button>
    );
};

export default LogoutButton;
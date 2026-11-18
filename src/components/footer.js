import React from "react";
import * as footerStyles from "./footer.module.css";

export default function Footer ({copyrightYear}) {
    return (
        <p className={footerStyles.footer}>
            © {copyrightYear} Viagens pelo Mundo. Todos os direitos reservados.
        </p>
    )
}
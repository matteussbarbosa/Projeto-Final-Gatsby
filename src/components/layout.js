import React from 'react';
import { graphql, Link, useStaticQuery } from "gatsby"
import "./layout.css"
import Footer from './footer';

export default function Layout({ children }) {
    return (
        <main className="layout">
            <div className="header">
                <h3>Viagens pelo Mundo!</h3>
                <nav className="topnav">
                    <Link to="/">Início</Link>
                    <Link to="blog">Blog</Link>
                </nav>
            </div>
            <div className="main">
                {children}
            </div>
            <Footer copyrightYear={2026} />
        </main>
    )
}
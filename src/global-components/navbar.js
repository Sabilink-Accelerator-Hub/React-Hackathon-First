import React from 'react';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <ul style={styles.ul}>
                <li style={styles.li}><a href="/" style={styles.a}>Home</a></li>
                <li style={styles.li}><a href="/about" style={styles.a}>About Us</a></li>
                <li style={styles.li}><a href="/media" style={styles.a}>Media/Gallery</a></li>
                <li style={styles.li}><a href="/events" style={styles.a}>Events</a></li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        background: '#222',
        padding: '10px 0',
    },
    ul: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
    },
    li: {
        margin: '0 20px',
    },
    a: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
    },
};

export default Navbar;
import React from 'react';

function About() {
    return (
        <div style={styles.page}>
            About
        </div>
    )
}

const styles = {
    page: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#111111',
        fontSize: '4em'
    }
}

export default About;

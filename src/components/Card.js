import React from 'react';

function Card(props) {
    return (
        <div style={styles.card} id={props.id}>
            {
                props.image ?
                    <img style={styles.card_img} src={props.file_name} alt="ok" /> :
                    <video style={styles.card_img} src={props.file_name} autoPlay={true} muted={true} loop={true} playsInline={true} />
            }
        </div>
    )
}

const styles = {
    card: {
        margin: 0,
        padding: 0,
        width: 'inherit',
        height: 'inherit',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    card_img: {
        maxWidth: '100%',
        minWidth: '100%',
        height: 'auto',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
}

export default React.memo(Card);
import React, { Component, Fragment } from 'react';

import Card from './Card.js';

class Deck extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [
                <Card video file_name="./react-webpage-03/images/gallery/val-video.mp4" id="one" key="one" />,
                <Card image file_name="./react-webpage-03/images/gallery/val-main-splash.jpg" id="two" key="two" />,
                <Card image file_name="./react-webpage-03/images/gallery/val-screen-1.jpg" id="three" key="three" />,
                <Card image file_name="./react-webpage-03/images/gallery/val-screen-0.jpg" id="four" key="four" />,
            ]
        }
    }

    handle_gallery_resize = () => {
        this.new_width = this.props.gallery.current.getBoundingClientRect().width < 1024 ?
            1024 : this.props.gallery.current.getBoundingClientRect().width;

        this.view_port.style.width = `${this.new_width}px`;

        this.selection_buttons_container.style.bottom = '10px';
        for (let i = 0; i < this.images.children.length; i++) {
            this.selection_buttons_container.children[i].transitionDuration = '0.0s';
            this.selection_buttons_container.children[i].style.width = `${this.new_width * 0.02}px`;
            this.selection_buttons_container.children[i].style.height = `${this.new_width * 0.02}px`;
        }

        this.order_cards();

        this.right_boundary = parseFloat(this.images.children[this.number_of_cards_by_index].style.left) + this.new_width;
        this.left_boundary = parseFloat(this.images.children[0].style.left) - this.new_width;

        for (let i = 0; i < this.images.children.length; i++) {
            this.last_positions[i] = parseFloat(this.images.children[i].style.left);
        }
    }
    componentDidMount() {
        this.number_of_cards_by_index = this.images.children.length - 1;
        this.middle_card_by_index = Math.floor(this.number_of_cards_by_index / 2);
        this.current_card = this.middle_card_by_index;

        /* ********** RESPONSIVE CODE ******** */
        this.new_width = this.props.gallery.current.getBoundingClientRect().width < 1024 ?
            1024 : this.props.gallery.current.getBoundingClientRect().width;

        this.view_port.style.width = `${this.new_width}px`;

        this.selection_buttons_container.style.bottom = '10px';
        for (let i = 0; i < this.images.children.length; i++) {
            this.selection_buttons_container.children[i].transitionDuration = '0.0s';
            this.selection_buttons_container.children[i].style.width = `${this.new_width * 0.02}px`;
            this.selection_buttons_container.children[i].style.height = `${this.new_width * 0.02}px`;
        }

        this.order_cards();
        this.update_selection();

        window.addEventListener('resize', this.handle_gallery_resize);
        /* *********************************** */

        this.last_positions = [];
        this.right_boundary = parseFloat(this.images.children[this.number_of_cards_by_index].style.left) + this.new_width;
        this.left_boundary = parseFloat(this.images.children[0].style.left) - this.new_width;

        for (let i = 0; i < this.images.children.length; i++) {
            this.last_positions.push(parseFloat(this.images.children[i].style.left));
        }

        /* ******** BUTTON NAVIGATION ******** */
        this.scroll_in_progress = false;
        /* *********************************** */

        /* *********** AUTOPLAY CODE ********* */
        this.autoplay_timeout_id = null;
        this.autoplay_interval_id = null;
        /* *********************************** */


        /* ************ INIT CODE ************ */
        this.selection_buttons_container.children[0].click();
        /* *********************************** */
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handle_gallery_resize);

        clearTimeout(this.autoplay_timeout_id);
        clearTimeout(this.fade_out_timer);
        clearTimeout(this.fade_in_timer);
        clearInterval(this.autoplay_interval_id);
    }

    update_selection = () => {
        for (let i = 0; i < this.images.children.length; i++) {
            if (i === this.current_card) {
                this.selection_buttons_container.children[i].style.backgroundColor = 'white';
                this.selection_buttons_container.children[i].style.boxShadow = '0 0 10px 5px white';
            } else {
                this.selection_buttons_container.children[i].style.backgroundColor = '#ff4655';
                this.selection_buttons_container.children[i].style.boxShadow = '0 0 10px 5px black';
            }
        }
    }

    order_cards = () => {
        let counter_for_right = 1,
            counter_for_left = this.middle_card_by_index;

        for (let i = 0; i < this.images.children.length; i++) {
            this.images.children[i].style.transitionDuration = '0.0s';

            if (i < this.middle_card_by_index) {
                this.images.children[i].style.left = `-${(counter_for_left * this.new_width) - (this.new_width / 2)}px`;
                counter_for_left--;
            } else if (i > this.middle_card_by_index) {
                this.images.children[i].style.left = `${(counter_for_right * this.new_width) + (this.new_width / 2)}px`;
                counter_for_right++;
            } else {
                this.images.children[i].style.left = `${this.new_width / 2}px`;
            }
        }
    }

    handle_boundaries = () => {
        if (Math.round(this.last_positions[0]) <= Math.round(this.left_boundary)) {
            const end_of_deck = this.last_positions[this.number_of_cards_by_index] + this.new_width;

            this.images.children[0].style.left = `${end_of_deck}px`;
            this.last_positions[0] = end_of_deck;

            this.images.appendChild(this.images.children[0], this.images.children[this.number_of_cards_by_index]);
            this.last_positions.splice(this.number_of_cards_by_index, 0, this.last_positions.shift());
        }
        if (Math.round(this.last_positions[this.number_of_cards_by_index]) >= Math.round(this.right_boundary)) {
            const beginning_of_deck = this.last_positions[0] - this.new_width;

            this.images.children[this.number_of_cards_by_index].style.left = `${beginning_of_deck}px`;
            this.last_positions[this.number_of_cards_by_index] = beginning_of_deck;

            this.images.insertBefore(this.images.children[this.number_of_cards_by_index], this.images.children[0]);
            this.last_positions.splice(0, 0, this.last_positions.pop());
        }
    }

    /* ******** SELECTION NAVIGATION ***** */
    handle_selection = event => {
        if (event.target === this.selection_buttons_container) return;

        clearTimeout(this.autoplay_timeout_id);
        clearInterval(this.autoplay_interval_id);

        let new_card = null;

        for (let i = 0; i < this.images.children.length; i++) {
            if (event.target === this.selection_buttons_container.children[i]) new_card = i;
        }

        const old_card = this.current_card;
        this.current_card = new_card;
        this.update_selection();

        // fade out gallery
        this.view_port.style.transitionDuration = '0.5s';
        this.view_port.style.opacity = 0;

        this.fade_out_timer = setTimeout(() => {
            // move gallery
            for (let i = 0; i < this.images.children.length; i++) {
                const updated_position = this.last_positions[i] + ((old_card - new_card) * this.new_width);

                this.images.children[i].style.transitionDuration = '0.0s';
                this.images.children[i].style.left = `${updated_position}px`;
                this.last_positions[i] = updated_position;
            }

            // fade in gallery
            this.view_port.style.opacity = 1;

            for (let i = 0; i < Math.abs(old_card - new_card); i++) {
                this.handle_boundaries();
            }

            this.start_autoplay();

            // reset transition duration of gallery
            this.fade_in_timer = setTimeout(() => {
                this.view_port.style.transitionDuration = '0.0s';
            }, 500);
        }, 500);
    }
    /* *********************************** */

    /* *********** AUTOPLAY CODE ********* */
    start_autoplay = () => {
        clearTimeout(this.autoplay_timeout_id);
        clearInterval(this.autoplay_interval_id);

        this.autoplay_timeout_id = setTimeout(() => {
            this.autoplay_interval_id = setInterval(() => {
                // fade out gallery
                this.view_port.style.transitionDuration = '0.5s';
                this.view_port.style.opacity = 0;

                this.fade_out_timer = setTimeout(() => {
                    // move gallery
                    for (let i = 0; i < this.images.children.length; i++) {
                        this.images.children[i].style.transitionDuration = '0.0s';

                        const updated_position = this.last_positions[i] - this.new_width;

                        this.images.children[i].style.left = `${updated_position}px`;
                        this.last_positions[i] = updated_position;
                    }

                    // fade in gallery
                    this.view_port.style.opacity = 1;

                    this.current_card = (this.current_card === this.number_of_cards_by_index) ? 0 : ++this.current_card;

                    this.handle_boundaries();
                    this.update_selection();

                    // reset transition duration of gallery
                    this.fade_in_timer = setTimeout(() => {
                        this.view_port.style.transitionDuration = '0.0s';
                    }, 500);
                }, 500);
            }, 2000);
        }, 1200);
    }
    /* *********************************** */

    render() {
        return (
            <Fragment>
                <div ref={ref_id => this.view_port = ref_id} style={styles.view_port}>
                    <div ref={ref_id => this.images = ref_id} style={styles.images_container}>
                        {this.state.cards}
                    </div>
                </div>
                <div onClick={this.handle_selection} ref={ref_id => this.selection_buttons_container = ref_id} style={styles.selection_buttons_container}>
                    {
                        this.state.cards.map((_, i) => {
                            return (<div style={styles.selection_button} key={i}></div>)
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

const styles = {
    view_port: {
        margin: 0,
        padding: 0,
        width: '500px',
        height: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden'
    },
    images_container: {
        margin: 0,
        padding: 0,
        width: 'inherit',
        height: 'inherit',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    selection_buttons_container: {
        margin: 0,
        padding: 0,
        width: 'fit-content',
        height: 'fit-content',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none',
        zIndex: 99999,
    },
    selection_button: {
        marginRight: '15px',
        padding: 0,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'grey',
        pointerEvents: 'all',
        cursor: 'pointer'
    },
}

export default Deck;
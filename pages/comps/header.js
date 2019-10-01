import Link from 'next/link'
import COLOR from './style/style'
import React from 'react';
import { Navbar } from 'reactstrap';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar light expand="md" className='shadow fixed-top' style={styles.header}>
                    <Link href="/"><h4 style={styles.linkStyle}>Hacktoberfest</h4></Link>
                </Navbar>
            </div>
        )
    }
}


const styles = {
    header: {
        backgroundColor: COLOR.blue
    },
    linkStyle: {
        fontWeight: 'bold',
        color: COLOR.grey
    }
}
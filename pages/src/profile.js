import COLOR from '../comps/style/style'
import { connect } from 'react-redux'
import React, { Component } from 'react'


import { getUser } from '../redux/_actions/user'


class Profile extends Component {

    getInitialProps() {
        this.props.dispatch(getUser())
    }

    render() {
        return (
            <div style={styles.layout} className='container'>
                <div style={styles.list} className='shadow'>
                    {
                        this.props.user.contributor.map((item) => {
                            return <h3>Name: {item.name}</h3>
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Profile)

const styles = {
    layout: {
        flex: 1,
        marginTop: 50,
        paddingTop: 20
    },
    textHead: {
        color: COLOR.black
    },
    upText: {
        display: 'flex',
        flexDirection: 'row',
        'justify-content': 'space-between',
    },
    list: {
        height: '10%',
        padding: '5%',
        'background-color': 'aliceblue',
        'border-radius': 3
    }
}
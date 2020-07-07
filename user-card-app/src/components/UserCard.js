import React from 'react'
import MM from '../static/MysteryMan.jpg'
import axios from 'axios'
import Styled from 'styled-components'
import StyleSheet from '../styles/StyleSheet'

class UserCard extends React.Component {
    // constructor() {
    //   super();
    state = {
        userText: '',
        user: {},
        followers: []
    }

    componentDidMount() {

        axios.get('https://api.github.com/users/jfadelli')
            .then(res => {
                console.log(res.data)
                this.setState({
                    user: res.data
                })
            })
        axios.get(`https://api.github.com/users/jfadelli/followers`)
            .then(res => {
                this.setState({
                    followers: res.data
                })
            })
    }

    handleChanges = e => {
        this.setState({
            userText: e.target.value
        })
    }

    fetchInfo = e => {
        e.preventDefault();
        axios
            .get(`https://api.github.com/users/${this.state.userText}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    user: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
        axios
            .get(`https://api.github.com/users/${this.state.userText}/followers`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    followers: res.data
                })
            })
    }

    onSubmit = e => {

    }

    render() {
        return (
            <StyleSheet.CardDiv >
                <h1> Search for a GitHub User</h1 >
                <StyleSheet.StyledInput
                    type="text"
                    value={this.state.userText}
                    onChange={this.handleChanges}
                />
                <StyleSheet.StyledButton onClick={this.fetchInfo}>Fetch User</StyleSheet.StyledButton>
                <StyleSheet.UserCard>
                    <h2>{this.state.user.name}</h2>
                    <h3>{this.state.user.location}</h3>
                    <a href={this.state.user.blog}>
                        <StyleSheet.StyledImg
                            width='200'
                            src={this.state.user.avatar_url}
                            alt={MM}
                        />
                    </a>

                    <p>{this.state.user.bio}</p>
                </StyleSheet.UserCard>
                <h2>Followers:</h2>
                <StyleSheet.FollowersDiv>

                    {this.state.followers.map(follower => (
                        <StyleSheet.StyledATag
                            href={follower.html_url}
                            key={follower.id}
                        >
                            <p>{follower.login}</p>
                            <StyleSheet.StyledImg
                                width="200"
                                src={follower.avatar_url}
                                key={follower.id}
                                alt={follower.name} />
                        </StyleSheet.StyledATag>

                    ))}
                </StyleSheet.FollowersDiv>
            </StyleSheet.CardDiv >
        )
    }
}

export default UserCard
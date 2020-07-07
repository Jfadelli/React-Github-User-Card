import styled from 'styled-components'

const primaryColor = '#ccc8d0'
const secondaryColor = '#b2edc5'
const tirtiaryColor = '#9dc0bc'
const quaternaryColor = '#156064'
const gray = '#7c7287'

const flexCol = `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
`
const flexRow = `
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
align-content: center;
flex-wrap: wrap
`

const AppWrapper = styled.div`
${flexCol}
margin: 0 auto;
`

const CardDiv = styled.div`
${flexCol}
background-color: ${primaryColor};
color: ${quaternaryColor};
border-color: ${tirtiaryColor};
width: 600px;
padding: 2em;
`

const UserCard = styled.div`
${flexCol}
color: ${secondaryColor};
background-color: ${gray};
border: none;
border: 2px solid ${quaternaryColor};
margin: 5px;
font-size: 1em;
text-align: center;
border-radius: 4px;
`

const FollowersDiv = styled.div`
${flexRow};
padding: 10px;
border: 2px solid ${quaternaryColor};
border-radius: 4px;
`

const StyledButton = styled.button`
color: ${quaternaryColor};
border: none;
font-size: 2em;
margin: 5px;
padding: 2px 25px;
text-align: center;
border-radius: 6px;
`

const StyledInput = styled.input`
color: ${quaternaryColor};
border: none;
border-bottom: 2px solid ${quaternaryColor};
font-size: 2em;
margin: 5px;
width: 75%;
text-align: center;
border-radius: 6px;
`
const StyledATag = styled.a`
${flexCol};
text-decoration: none;
background-color: ${gray};
color: ${secondaryColor};
border: 1px solid ${quaternaryColor};
margin: 10px;
line-height: 0px;
border-radius: 4px;
font-variant: small-caps

`

const StyledImg = styled.img`
border-radius: 20px;
margin: 5px;
`

export default {
    CardDiv,
    AppWrapper,
    UserCard,
    FollowersDiv,
    StyledButton,
    StyledInput,
    StyledATag,
    StyledImg
}
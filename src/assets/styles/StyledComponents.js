import styled from 'styled-components'

import img from '../img/girl.png'

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #090212;
min-height: 100vh;
color: #565656;
background-image:url(${img});
background-repeat: no-repeat;
background-size: 25%;
background-position: bottom right;
`

export const CustomForm = styled.form`
padding: 2rem;
border: 1px solid gray;
display: flex;
flex-direction: column;
align-items: flex-start;
width: 375px;
background-color: #f4f0f8;
border-radius: 25px;
color: #565656;
`

export const CustomInput = styled.input`
padding: 1.2rem;
border: 0.2px solid grey;
border-radius: 20px;
width: 100%;
`
export const Label = styled.label`
display: block;
margin: 8px 6px;
font-weight: 700;
`
export const Button = styled.button`
background-color: #451193;
color: #fff;
width: 100%;
padding: 16px 8px;
border-radius: 20px;
margin: 16px 0;
cursor: pointer;
border: none;
font-weight: 700;
transition: all ease 0.5s;
&:hover {
    background-color:#250a4f ;
}
`
export const Error = styled.span`
color: #93111e;
padding: 6px 3px;
font-weight: 500;
`
export const CustomImage = styled.img`
width: 33%;
height: auto;
`

export const ColorContainer = styled.div.attrs(
    props => ({
        // we can define dynamic props
        width: props.width || "auto",
        height: props.height || "auto",
        backgroundColor: props.backgroundColor || "transparent",
        margin: props.margin || "",
        padding:props.padding || "",
        borderRadius: props.borderRadius || "",
        display: props.display ||"block",
        textAlign: props.textAlign || "left",                
      })
)`
width: ${props => props.width};
height: ${props => props.height};
background-color: ${props => props.backgroundColor};
margin: ${props => props.margin};
padding: ${props => props.padding};
border-radius: ${props => props.borderRadius};
display: ${props => props.display};
justify-content: ${props => props.justifyContent};
text-align: ${props => props.textAlign};
`
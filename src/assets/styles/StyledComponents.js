import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

export const CustomForm = styled.form`
padding: 2rem;
border: 1px solid gray;
display: flex;
flex-direction: column;
align-items: flex-start;
width: 375px;
`

export const CustomInput = styled.input`
padding: 1.2rem;
border: 0.2px solid grey;
border-radius: 20px;
margin: 8px 0 16px 0;
width: 100%;
`
export const Label = styled.label`
display: block;
`
export const Button = styled.button`
background-color: #000;
color: #fff;
width: 100%;
padding: 16px 8px;
border-radius: 20px;
`
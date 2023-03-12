import { CustomInput, Label } from "../styles/StyledComponents"


const Input = ({label, name, type, placeholder}) => {
    return (
        <>             
        <Label>{label}</Label>
        <CustomInput
        type = {type}
        placeholder = {placeholder}
        name = {name}
        onChange = {e => console.log(e.target.value)}
        />     
        </>
        
    )
}
export default Input;
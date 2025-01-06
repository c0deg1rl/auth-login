import { Button } from "@mui/material";

/* eslint-disable react/prop-types */
const MyButton = ({ children, onClick, type = 'button', className = '', disabled = false, sx }) => { 
    return (
        <Button
        type={type}
        className={className}
        onClick={onClick}
        disabled={disabled}
        sx={sx}
        >
            {children}
        </Button>
    );
}

export default MyButton;
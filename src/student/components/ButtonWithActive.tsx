import { Button } from "@mui/material"



type ButtonProps = {
    title: string;
    active: boolean
    index: number;
    setSelectedButton: (value: number) => void;
}

export const ButtonWithActive = ({ title, index, setSelectedButton, active }: ButtonProps) => {

    const selectButton = () => {
        setSelectedButton(index)
    }

    return (
        <Button onClick={selectButton}
            sx={{
                backgroundColor: active ? 'rgba(116, 193, 116, 1.00)' : 'background.default',
                ':hover': {
                    backgroundColor: 'rgba(116, 193, 116, 1.00)'
                }

            }}
        >
            {title}
        </Button>
    )
}

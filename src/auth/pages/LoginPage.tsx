import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Box, Button, Grid, TextField } from "@mui/material";
import { redirect, useNavigate } from "react-router-dom";
import { userStore } from "../../store/userStore";

interface LoginFormSchema {
    email: string;
    contrasena: string;
}

export const LoginPage = () => {
    const navigate = useNavigate();
    const login = userStore((state) => state.login);
    const user = userStore((state) => state.user);

    const { control, handleSubmit, register } = useForm({
        defaultValues: {
            email: "",
            contrasena: "",
        },
    });
    console.log(user);

    const onSubmit: SubmitHandler<LoginFormSchema> = async ({
        email,
        contrasena,
    }) => {
        try {
            const res = await fetch("http://localhost:3000/auth/login", {
                body: JSON.stringify({
                    email,
                    contrasena,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });
            if (res.status !== 200) {
                const errorText = await res.text();
                console.log(errorText);
                return;
            }
            const { data } = await res.json();
            // console.log(data);
            if (data.role === "student") {
                console.log(data);
                console.log("Soy un estudiante");
                login(data);
                navigate("/student");
                // return <Navigate to={"/student"} />;
            } else {
                console.log("Soy un admin");
                navigate("/admin");
                // return <Navigate to={"/admin"} />;
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Box
            component={"form"}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                m: 10,
                "& .MuiTextField-root": { m: 1, width: "50ch" },
            }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Controller
                name={"email"}
                control={control}
                render={({ field }) => (
                    <TextField
                        variant={"outlined"}
                        size="medium"
                        autoComplete="off"
                        type="email"
                        required
                        label="Correo electronico"
                        {...field}
                    />
                )}
            />
            <Controller
                name={"contrasena"}
                control={control}
                render={({ field }) => (
                    <TextField
                        variant={"outlined"}
                        size="medium"
                        required
                        autoComplete="off"
                        type="password"
                        label="Contraseña"
                        {...field}
                    />
                )}
            />
            <Button variant="contained" type="submit">
                Iniciar Sesión
            </Button>
        </Box>
    );
};

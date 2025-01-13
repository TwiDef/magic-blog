import React from 'react';
import { useHistory } from 'react-router-dom';
import { useGetUserDataMutation } from '../../services/auth';
import { Box, Paper, TextField, Typography, Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, setAuthData } from '../../redux/slices/auth';

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)
  const [getUserData, { data, error, isLoading }] = useGetUserDataMutation()
  const getUserDataHandler = (data) => getUserData(data)

  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onSubmit"
  })

  const onSubmit = async (values) => {
    const userData = await getUserDataHandler(values)

    if (!userData.error) {
      dispatch(setAuthData(userData.data))

      if (userData.data.token) {
        window.localStorage.setItem("token", userData.data.token)
      }

    } else {
      alert("Не удалось авторизоваться!")
    }
  }

  React.useEffect(() => {
    isAuth && history.push("/")
  }, [isAuth])

  return (
    <Box sx={{ mt: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Paper sx={{ width: "40%", p: 4 }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <Typography variant='h5'>Вход в аккаунт</Typography>
          <TextField
            {...register("email", { required: "Укажите почту" })}
            helperText={errors.email?.message}
            error={Boolean(errors.email?.message)}
            type="email"
            sx={{ width: "80%", mt: 4 }}
            label="E-mail"
            multiline
          />
          <TextField
            {...register("password", { required: "Введите пароль" })}
            helperText={errors.password?.message}
            error={Boolean(errors.password?.message)}
            sx={{ width: "80%", mt: 4 }}
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            sx={{ p: "6px 40px", mt: 4, bgcolor: "#123c8f", color: "#fff" }}
            variant="text">
            Войти
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
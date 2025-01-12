import React from 'react';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, setAuthData } from '../../redux/slices/auth';
import { useFetchRegisterUserMutation } from '../../services/auth';

const Registration = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)
  const [fetchRegisterUser, { data, error, isLoading }] = useFetchRegisterUserMutation()
  const fetchRegisterUserHandler = (data) => fetchRegisterUser(data)

  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: ""
    },
    mode: "onSubmit"
  })

  const onSubmit = async (values) => {
    const userData = await fetchRegisterUserHandler(values)

    if (userData.error) {
      alert(userData.error.data[0].msg)
    }

    if (!userData.error) {
      dispatch(setAuthData(userData.data))

      if (userData.data.token) {
        window.localStorage.setItem("token", userData.data.token)
      }
    }
  }

  React.useEffect(() => {
    isAuth && history.push("/")
  }, [isAuth])

  return (
    <Box sx={{ mt: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Paper sx={{ width: "40%", p: 4 }}>
        <form
          onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Typography variant='h5'>Создание аккаунта</Typography>
            <img
              style={{ marginTop: "20px" }}
              width={150}
              height={150}
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile" />
            <TextField
              {...register("fullName", { required: "Укажите имя" })}
              helperText={errors.fullName?.message}
              error={Boolean(errors.fullName?.message)}
              type="fullName"
              label="Полное имя"
              sx={{ width: "80%", mt: 4 }}
              multiline
            />
            <TextField
              {...register("email", { required: "Укажите почту" })}
              helperText={errors.email?.message}
              error={Boolean(errors.email?.message)}
              type="email"
              label="E-mail"
              sx={{ width: "80%", mt: 4 }}
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
              Зарегистрироваться
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Registration;
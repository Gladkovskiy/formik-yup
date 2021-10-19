import React from 'react'
import classes from './FormStandart.module.sass'
import {Formik} from 'formik'
import * as yup from 'yup'

const getError = (touched, error) =>
  touched && error && <p className={classes.error}>{error}</p>

const formStandart = () => {
  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Обязательно'),
    secondName: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Обязательно'),
    password: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Обязательно'),
    confirmPassword: yup
      .string()
      .required('Обязательно')
      .oneOf([yup.ref('password')], 'Пароли не совпадают'),
    email: yup.string().email('Введите верный Email').required('Обязательно'),
    confirmEmail: yup
      .string()
      .email('Введите верный Email')
      .oneOf([yup.ref('email')], 'Email не совпадают')
      .required('Обязательно'),
  })
  return (
    <div className={classes.formStandart}>
      <Formik
        initialValues={{
          firstName: '',
          secondName: '',
          password: '',
          confirmPassword: '',
          email: '',
          confirmEmail: '',
        }}
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className={classes.form}>
            {/* Имя */}
            <>
              <label htmlFor="firstName">Имя</label>
              <input
                className={classes.input}
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              {getError(touched.firstName, errors.firstName)}
            </>

            {/* Фамилия */}
            <>
              <label htmlFor="secondName">Фамилия</label>
              <input
                className={classes.input}
                type="text"
                name="secondName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.secondName}
              />
              {getError(touched.secondName, errors.secondName)}
            </>

            {/* Пароль */}
            <>
              <label htmlFor="password">Пароль</label>
              <input
                className={classes.input}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {getError(touched.password, errors.password)}
            </>

            {/* Подтверждение пароля */}
            <>
              <label htmlFor="confirmPassword">Подтверждение пароля</label>{' '}
              <input
                className={classes.input}
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {getError(touched.confirmPassword, errors.confirmPassword)}
            </>

            {/* Почта */}
            <>
              <label htmlFor="email">Почта</label>{' '}
              <input
                className={classes.input}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {getError(touched.email, errors.email)}
            </>

            {/* Подтверждение почты */}
            <>
              <label htmlFor="confirmEmail">Подтверждение почты</label>{' '}
              <input
                className={classes.input}
                type="email"
                name="confirmEmail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmEmail}
              />
              {getError(touched.confirmEmail, errors.confirmEmail)}
            </>

            <button
              disabled={!isValid || !dirty}
              onClick={handleSubmit}
              type="submit"
            >
              Отправить
            </button>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default formStandart

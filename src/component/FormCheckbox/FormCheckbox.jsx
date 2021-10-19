import React from 'react'
import classes from './FormCheckbox.module.sass'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as yup from 'yup'

/* const getError = (touched, error) =>
  touched && error && <p className={classes.error}>{error}</p> */

const FormCheckbox = () => {
  const validationSchema = yup.object().shape({
    adressRegister: yup.string().required('Обязательно'),
    likeRegister: yup.bool(),
    adressActual: yup.string().when('likeRegister', {
      is: false,
      then: yup.string().required('Обязательно'),
    }),
    brends: yup.array().min(1, 'Выберите хотябы один брэнд'),
  })

  return (
    <div className={classes.FormCheckbox}>
      <Formik
        initialValues={{
          adressRegister: '',
          likeRegister: false,
          adressActual: '',
          brends: [],
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
          <Form className={classes.form}>
            {/* Имя */}
            <>
              <label htmlFor="adressRegister">Адрес регистрации</label>
              <Field
                className={classes.input}
                type="text"
                name="adressRegister"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={values.adressRegister}
              />
              {/* {getError(touched.adressRegister, errors.adressRegister)} */}
              <ErrorMessage
                component="p"
                className={classes.error}
                name="adressRegister"
              />
            </>

            {/* checkbox   Адреса совпадают*/}
            <p>
              <label htmlFor="likeRegister">
                Адреса совпадают
                <input
                  type="checkbox"
                  name="likeRegister"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.likeRegister}
                />
              </label>
            </p>

            {/* Актуальный адрес */}
            {!values.likeRegister && (
              <>
                <label htmlFor="adressActual">Актуальный адрес</label>
                <Field
                  className={classes.input}
                  type="text"
                  name="adressActual"
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // value={values.adressActual}
                />
                {/* {getError(touched.adressActual, errors.adressActual)} */}
                <ErrorMessage
                  component="p"
                  className={classes.error}
                  name="adressActual"
                />
              </>
            )}

            <div className={classes.brends}>
              <label>
                <Field
                  type="checkbox"
                  name="brends"
                  value="AMD"
                  // onChange={handleChange}
                />
                AMD
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="brends"
                  value="Intel"
                  // onChange={handleChange}
                />
                Intel
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="brends"
                  value="IBM"
                  // onChange={handleChange}
                />
                IBM
              </label>
            </div>
            <ErrorMessage
              component="p"
              className={classes.error}
              name="brends"
            />

            <button
              disabled={!isValid || !dirty}
              // onClick={handleSubmit}
              type="submit"
            >
              Отправить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormCheckbox

import React from 'react'
import {Form, Button, FloatingLabel} from 'react-bootstrap'
import {Formik, ErrorMessage} from 'formik'
import * as yup from 'yup'

const FormBootsrap = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().email('Неверный email').required('Обязательно'),
    password: yup
      .string()
      .min(6, 'Минимально 6 симвалов')
      .required('Обязательно'),
    textArea: yup.string(),
  })

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        textArea: '',
        brand: [],
        select: '',
        radio: 'Samsung',
        fileLoader: null,
      }}
      validateOnBlur
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values)
        //для передачифайла необходимо использовать formdata
        //просто передать в mutate react-query
        /* const data = new FormData()
        data.append('email', values.email)
        data.append('password', values.password)
        data.append('textArea', values.textArea)
        data.append('select', values.select)
        data.append('radio', values.radio)
        data.append('fileLoader', values.fileLoader)
        data.append('brand', JSON.stringify(values.brand))
        console.log(data) */
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
        setFieldValue,
      }) => (
        <Form className="w-50 border-secondary border p-4 m-auto">
          {/* input standart */}
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              isValid={!errors.email && touched.email}
              isInvalid={errors.email && touched.email}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger mt-1"
            />
          </Form.Group>
          {/* input with animated label */}
          <FloatingLabel label="Password" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              isValid={!errors.password && touched.password}
              isInvalid={errors.password && touched.password}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger mt-1"
            />
          </FloatingLabel>
          {/* textArea */}
          <Form.Group className="mb-3">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="textArea"
              value={values.textArea}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>
          {/* checkbox */}
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Samsung"
              value="Samsung"
              name="brand"
              onChange={handleChange}
            />
            <Form.Check
              type="checkbox"
              label="Dell"
              value="Dell"
              name="brand"
              onChange={handleChange}
            />
            <Form.Check
              type="checkbox"
              label="AMD"
              value="AMD"
              name="brand"
              onChange={handleChange}
            />
          </Form.Group>
          {/* select */}
          <Form.Select onChange={handleChange} name="select">
            <option value="0">Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          {/* radio */}
          <Form.Group className="mb-3">
            <Form.Check
              type="radio"
              label="Samsung"
              value="Samsung"
              name="radio"
              onChange={handleChange}
              defaultChecked
            />
            <Form.Check
              type="radio"
              label="Dell"
              value="Dell"
              name="radio"
              onChange={handleChange}
            />
            <Form.Check
              type="radio"
              label="AMD"
              value="AMD"
              name="radio"
              onChange={handleChange}
            />
          </Form.Group>
          {/* fileLoader формик не поддержует загрузку файла*/}
          <Form.Group className="mb-3">
            <Form.Label>Default file input example</Form.Label>
            <Form.Control
              type="file"
              name="fileLoader"
              onChange={({target}) =>
                setFieldValue('fileLoader', target.files[0])
              }
            />
          </Form.Group>
          {/* button submit */}
          <Button
            variant="primary"
            type="submit"
            className="ms-auto d-block"
            onClick={handleSubmit}
            disabled={!dirty || !isValid}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default FormBootsrap

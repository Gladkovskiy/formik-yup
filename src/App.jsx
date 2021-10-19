import React from 'react'
import classes from './App.module.sass'
import FormCheckbox from './component/FormCheckbox/FormCheckbox'
import FormStandart from './component/FormStandart/FormStandart'

function App() {
  return (
    <div className={classes.App}>
      <FormStandart />
      <FormCheckbox />
    </div>
  )
}

export default App

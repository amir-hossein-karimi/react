import React, { useEffect, useState } from "react"

const validation = (Component, form) => {
    const NewComponent = (props) => {
        const [formValue, setFormValue] = useState()
        const [formError, setFormError] = useState({})
        const [submit, setSubmit] = useState(false)

        useEffect(() => {
            if (!formValue)
                setFormValue({...form})
        }, [])

        const validate = () => {
            let _errors = {}
            let hasError = false
            Object.keys(formValue).map((item) => {
                if (!formValue[item]) {
                    _errors = { ..._errors, [item]: `${item} is required` }
                    hasError = true
                }
            })
            setFormError(_errors)
            if (!hasError) setSubmit(true)
            else setSubmit(false)
        }

        const onChange = (props) => {
            const { target: { name, value } } = props
            setFormValue({ ...formValue, [name]: value })
        }

        return <Component
            {...props}
            formValue={formValue}
            formError={formError}
            onChange={onChange}
            validate={validate}
            submit={submit}
        />
    }
    return React.memo(NewComponent)
}
export default validation
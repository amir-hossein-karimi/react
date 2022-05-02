import React from 'react';
import validation from '../../components/validation';

const form = {
    first: undefined,
    second: undefined,
    third: undefined
}
const Home = ({ onChange, formValue, validate, formError, submit }) => {

    if(submit){
        console.table(formValue)
    }
    
    return (
        <div>
            <h1>sample form</h1>
            <h3>second head</h3>
            {/* form ----------------- */}
            <input type="text" name={'first'} onChange={onChange} />
            {formError && formError.first}

            <input type="text" name={'second'} onChange={onChange} />
            {formError && formError.second}

            <input type="text" name={'third'} onChange={onChange} />
            {formError && formError.third}

            <button onClick={validate}>submit</button>
        </div>
    );
};

export default validation(Home, form);
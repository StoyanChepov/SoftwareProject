import React from 'react';
import { Field, reduxForm } from 'redux-form';

class ProjectForm extends React.Component {
    
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <small className="text-danger">{error}</small>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (
            <div className="form-group">
                <label>{label}</label>
                <input {...input} className="form-control" />
                {this.renderError(meta)}
            </div> 
        );
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    
    render() {
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="name" component={this.renderInput} label="Project name" />
                <Field name="isActive" component={this.renderInput} label="Active status" />
                <button className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.name) {
        errors.name = "You must enter a project name";
    }
    if (!formValues.isActive) {
        errors.isActive = "You must enter a status";
    }
    return errors;
}

export default reduxForm({
    form: 'projectsForm',
    validate: validate
})(ProjectForm);
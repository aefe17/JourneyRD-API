import React from 'react';
import { ErrorMessage, Form, Formik } from 'formik';
import MyTextInput from '../../app/common/form/MyTextInput';
import { Button, FormGroup, Header, Segment } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';
import * as Yup from 'yup'
import ValidationErrors from '../errors/ValidationErrors';

function RegisterForm()
{
    const {userStore} = useStore()
    return(
        <Formik initialValues={{userName: '', firstName: '', lastName: '', gender: '', country: '', city:'', address: '', birthDate: '', email:'', password:'', error: null}}
            onSubmit={(values, { setErrors }) => userStore.register(values).catch(error =>
                setErrors({ error }))}
            validationSchema={Yup.object({

            })}
        >
            {({handleSubmit, isSubmitting, errors, isValid, dirty}) => (
                <>
                    <Segment className='loginSegment' style={{ backgroundImage: "url(/assets/ImagenLogin.jpg)" }} />

                    <Form className='ui form error loginForm' onSubmit={handleSubmit} autoComplete='off'>
                        <Header as='h1' content='Registrate a Voluntareate' className='loginText' textAlign='center' />
                        <FormGroup className='ui form' widths={'equal'}>
                            <div className='eight wide field' >
                                <MyTextInput name='username' placeholder='Nombre de Usuario' />
                                <MyTextInput name='firstName' placeholder='Primer Nombre' />
                                <MyTextInput name='lastname' placeholder='Apellido' />
                            </div>

                            <div className='eight wide field'>
                                <MyTextInput name='phoneNumber' placeholder=' +1 809-111-2233' />
                                <MyTextInput name='email' placeholder='Correo Electronico' />
                                <MyTextInput name='password' placeholder='Contraseña' type='password' />
                            </div>
                        </FormGroup>

                        <ErrorMessage name='error' render={() =>
                            <ValidationErrors errors={errors.error} />} />
                        <Button disabled={!isValid || !dirty || isSubmitting}
                            loading={isSubmitting}
                            positive
                            content='Registrarse'
                            type='submit'
                            fluid />
                    </Form>
                </>
            )}
        </Formik>
    )
}

export default observer(RegisterForm);
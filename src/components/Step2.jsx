import React from 'react';
import MainContainer from "./MainContainer";
import Typography from "@material-ui/core/Typography";
import {Input} from "./Input";
import {PrimaryButton} from "./PrimaryButton";
import Form from "./Form";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHistory} from "react-router-dom";

export const Step2 = () =>{
    const history = useHistory();

    const {register, handleSubmit, watch, formState:{ errors }} = useForm({
        mode: "onBlur",
        //resolver: yupResolver(schema)
    })

    const submitHandler = (data) => {
        history.push("/step3");
    }


    return( <MainContainer><Typography component="h2" variant="h5">Шаг 2</Typography>


                <Form onSubmit={handleSubmit(submitHandler)}>
                    <Input
                        {...register('email')}
                        type="email"
                        id="email"
                        label="Email"
                        name="Email"
                        error={!!errors.firstName}
                        helperText={errors?.firstName?.message}
                        required
                    />





                    <PrimaryButton>Submit yo</PrimaryButton>
                </Form>

            </MainContainer>
    )
}
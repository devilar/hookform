import React from 'react';
import MainContainer from "./components/MainContainer";
import Typography from "@material-ui/core/Typography";
import Form from "./components/Form";
import {Input} from "./components/Input";
import {useForm} from "react-hook-form";
import {PrimaryButton} from "./components/PrimaryButton";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import {useHistory} from "react-router-dom";


const schema = yup.object().shape({
firstName:yup.string().matches(/^([^0-9]*)$/, "First name should not contain numbers").required("Обязательное поле"),
lastName:yup.string().matches(/^([^0-9]*)$/, "Last name should not contain numbers").required("Обязательное поле")
});

const Step1 = () => {

    const history = useHistory();

    const submitHandler = (data) => {
        history.push("/step2");
    }

    const {register, handleSubmit, formState:{ errors }} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    return (
        <MainContainer><Typography component="h2" variant="h5">Шаг 1</Typography>

    <Form onSubmit={handleSubmit(submitHandler)}>
    <Input
        {...register('firstName')}
        type="text"
        id="firstName"
        label="firstName"
        name="firstName"
        error={!!errors.firstName}
        helperText={errors?.firstName?.message}
    />

        <Input
            {...register('lastName')}
            id="lastName"
            type="text"
            label="lastName"
            name="lastName"
            error={!!errors.lastName}
            helperText={errors?.lastName?.message}
        />



        <PrimaryButton>Submit yo</PrimaryButton>
    </Form>

        </MainContainer>
    );
};

export default Step1;
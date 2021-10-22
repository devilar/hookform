import React from 'react';
import MainContainer from "./MainContainer";
import Typography from "@material-ui/core/Typography";
import {Input} from "./Input";
import {PrimaryButton} from "./PrimaryButton";
import Form from "./Form";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHistory} from "react-router-dom";
import * as yup from "yup";
import {Checkbox, FormControlLabel} from "@material-ui/core";
import parsePhoneNumberFromString from "libphonenumber-js";

const schema = yup.object().shape({
    email:yup.string().email("Email should correct format").required("THIS IS REQUIRED")
});

export const Step2 = () =>{
    const history = useHistory();

    const normalizePhoneNumber = (value) =>{
        const phoneNumber = parsePhoneNumberFromString(value);
        if(!phoneNumber){
            return value
        }
        return(
            phoneNumber.formatInternational()
        )
    }

    const {register, handleSubmit, watch, formState:{ errors }} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })
    const hasPhone = watch("hasPhone");

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
                        name="email"
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                        required
                    />

                    <FormControlLabel control={
                        <Checkbox name="hasPhone" {...register('hasPhone')}/>
                    } label={'Do you have a Phone'}/>

                    {hasPhone && (
                        <Input
                            {...register('phone')}
                            type="tel"
                            id="phoneNumber"
                            label="Phone number"
                            name="phoneNumber"
                            error={!!errors.email}
                            onChange={(event)=>{
                                event.target.value = normalizePhoneNumber(event.target.value)
                            }}
                            helperText={errors?.phoneNumber?.message}
                            required
                        />
                    )}


                    <PrimaryButton>Next</PrimaryButton>
                </Form>

            </MainContainer>
    )
}
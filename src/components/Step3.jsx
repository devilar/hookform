import React from 'react';
import MainContainer from "./MainContainer";
import Typography from "@material-ui/core/Typography";
import {Input} from "./Input";
import {Checkbox, FormControlLabel} from "@material-ui/core";
import {PrimaryButton} from "./PrimaryButton";
import Form from "./Form";
import {FileInput} from "./FileInput";
import {useForm} from "react-hook-form";

export const Step3 = () =>{

    const {control,handleSubmit} = useForm()

    return <MainContainer>
        <Typography component="h2" variant="h5">Шаг 3</Typography>
        <Form>

            <FileInput name="files" control={control}/>

        </Form>
    </MainContainer>
}
import {useEffect, useState} from 'react';

export const useForm = (initialForm: Item) => {

    const [formState, setFormState] = useState<Item>(initialForm);
    // const [formValidation, setFormValidation] = useState<FormValidations>({});

    // useEffect(() => {
    //     createValidators();
    // }, [formState])

    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm])



    // const isFormValid = useMemo(() => {
    //
    //     for (const formValue of Object.keys(formValidation)) {
    //         if (formValidation[formValue] !== null) return false;
    //     }
    //
    //     return true;
    // }, [formValidation])


    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    // const createValidators = () => {
    //
    //     const formCheckedValues: FormValidations = {};
    //
    //     for (const formField of Object.keys(formValidations)) {
    //         const [fn, errorMessage] = formValidations[formField];
    //
    //         console.log(formCheckedValues[`${formField}Valid`])
    //         // @ts-ignore
    //         formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
    //     }
    //
    //     setFormValidation(formCheckedValues);
    // }




    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        // ...formValidation,
        // isFormValid
    }
}
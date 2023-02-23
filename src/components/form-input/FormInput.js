import React from 'react'
import { Input, Group, FormInputLabel } from './styles';

const FormInput = ({ label, ...props }) => {
    return (
        <Group>
            <Input {...props} />
            {label &&
                <FormInputLabel
                    shrink={props.value.length}
                    htmlFor="">{label}
                </FormInputLabel>
            }

        </Group>
    )
}

export default FormInput
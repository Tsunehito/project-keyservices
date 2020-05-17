import React from 'react';
import {
    List,
    Edit,
    Create,
    SimpleForm,
    Datagrid,
    TextField,
    DateField,
    NumberField,
    EditButton,
    DeleteButton,
    TextInput,
} from 'react-admin'

export const TarifList = (props) => (
    <List
        {...props}
    >
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="commission" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <EditButton basePath="/tarifs" />
            <DeleteButton basePath="/tarifs" />
        </Datagrid>
    </List>
);

const TarifTitle = ({ record }) => {
    return <span>Tarif {record ? `${record.id}` : ''}</span>;
};

export const TarifEdit = (props) => (
    <Edit title={<TarifTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="commission" />
        </SimpleForm>
    </Edit>
);

export const TarifCreate = (props) => (
    <Create title="Creat new tarif !" {...props}>
        <SimpleForm>
            <TextInput source="commission" />
        </SimpleForm>
    </Create>
);
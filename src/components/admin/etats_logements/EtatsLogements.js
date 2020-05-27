import React from 'react';
import {
    List,
    Edit,
    Create,
    SimpleForm,
    Datagrid,
    TextField,
    NumberField,
    EditButton,
    DeleteButton,
    TextInput,
} from 'react-admin'

export const EtatsLogementList = (props) => (
    <List
        {...props}
    >
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="etat" />
            <EditButton basePath="/etats_logement" />
            <DeleteButton basePath="/etats_logement" />
        </Datagrid>
    </List>
);

const EtatsLogementTitle = ({ record }) => {
    return <span>Status {record ? `${record.id} : "${record.etat}"` : ''}</span>;
};

export const EtatsLogementEdit = (props) => (
    <Edit title={<EtatsLogementTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="etat" />
        </SimpleForm>
    </Edit>
);

export const EtatsLogementCreate = (props) => (
    <Create title="Creat new Building status !" {...props}>
        <SimpleForm>
            <TextInput source="etat" />
        </SimpleForm>
    </Create>
);
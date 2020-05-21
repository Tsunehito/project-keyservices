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
    ReferenceField,
    EditButton,
    DeleteButton,
    TextInput,
    DateInput,
    SelectInput,
    ReferenceInput,
    Filter,
} from 'react-admin'

const DisponibiliteFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);



export const DisponibiliteList = (props) => (
    <List
        {...props}
        filters={<DisponibiliteFilter />}
    >
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <ReferenceField label="ID Logement" source="fk_logement" reference="logements">
                <TextField source="id" />
            </ReferenceField>
            <DateField source="date_debut" />
            <DateField source="date_fin" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <EditButton basePath="/diponibilites" />
            <DeleteButton basePath="/diponibilites" />
        </Datagrid>
    </List>
);

const DisponibiliteTitle = ({ record }) => {
    return <span>Disponibilité {record ? `${record.id}` : ''}</span>;
};

export const DisponibiliteEdit = (props) => (
    <Edit title={<DisponibiliteTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <DateInput source="date_debut" />
            <DateInput source="date_fin" />
            <ReferenceInput
                label="ID Logement"
                source="fk_logement"
                reference="logements"
                filterToQuery={searchText => ({ title: searchText })}>
                <SelectInput  optionText="id" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const DisponibiliteCreate = (props) => (
    <Create title="Creat new Disponibilité !" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <DateInput source="date_debut" />
            <DateInput source="date_fin" />
            <ReferenceInput
                label="ID Logement"
                source="fk_logement"
                reference="logements"
                filterToQuery={searchText => ({ title: searchText })}>
                <SelectInput  optionText="id" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
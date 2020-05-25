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
    ReferenceInput,
    AutocompleteInput,
    Filter,
} from 'react-admin'

const ServiceFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const ServiceList = (props) => (
    <List
        {...props}
        filters={<ServiceFilter />}
    >
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="name" />
            <ReferenceField label="Tarif" source="fk_tarif" reference="tarifs">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <EditButton basePath="/services" />
            <DeleteButton basePath="/services" />
        </Datagrid>
    </List>
);

const ServiceTitle = ({ record }) => {
    return <span>Service {record ? `${record.id}` : ''}</span>;
};

export const ServiceEdit = (props) => (
    <Edit title={<ServiceTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <ReferenceInput
                source="fk_tarif"
                reference="tarifs"
                label="Tarif"
                filterToQuery={searchText => ({ title: searchText })}>
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const ServiceCreate = (props) => (
    <Create title="Creat new service !" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput
                source="fk_tarif"
                reference="tarifs"
                label="Tarif"
                filterToQuery={searchText => ({ title: searchText })}>
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
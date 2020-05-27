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
    SelectInput,
    DateInput,
    Filter,
} from 'react-admin'


const FactureFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const FactureList = (props) => (
    <List
        {...props}
        filters={<FactureFilter />}
    >
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <NumberField source="montant" />
            <TextField source="note" />
            <DateField source="date_facturation" />
            <ReferenceField label="User" source="fk_user" reference="users">
                <TextField source="lastname" />
            </ReferenceField>
            <ReferenceField label="Annonce" source="fk_annonce" reference="annonces">
                <TextField source="id" />
            </ReferenceField>
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <EditButton basePath="/factures" />
            <DeleteButton basePath="/factures" />
        </Datagrid>
    </List>
);

const FactureTitle = ({ record }) => {
    return <span>Facture {record ? `${record.id} ` : ''}</span>;
};

export const FactureEdit = (props) => (
    <Edit title={<FactureTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="montant" />
            <TextInput source="note" multiline />
            <DateInput source="date_facturation" />
            <ReferenceInput
                label="User"
                source="fk_user"
                reference="users"
                filterToQuery={searchText => ({ title: searchText })}>
                <SelectInput  optionText="lastname" />
            </ReferenceInput>
            <ReferenceInput
                label="Annonce"
                source="fk_annonce"
                reference="annonces"
                filterToQuery={searchText => ({ title: searchText })}>
                <SelectInput optionText="id" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const FactureCreate = (props) => (
    <Create title="Creat new Facture !" {...props}>
        <SimpleForm>
            <TextInput source="montant" />
            <TextInput source="note" multiline />
            <DateInput source="date_facturation" />
            <ReferenceInput
                label="User"
                source="fk_user"
                reference="users"
                filterToQuery={searchText => ({ title: searchText })}>
                <SelectInput  optionText="lastname" />
            </ReferenceInput>
            <ReferenceInput
                label="Annonce"
                source="fk_annonce"
                reference="annonces"
                filterToQuery={searchText => ({ title: searchText })}>
                <SelectInput optionText="id" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
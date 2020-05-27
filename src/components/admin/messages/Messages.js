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
    ReferenceInput,
    AutocompleteInput,
    Filter,
} from 'react-admin'

const MessageFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const MessageList = (props) => (
    <List
        {...props}
        filters={<MessageFilter />}
    >
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="message" />
            <DateField source="date_envoi" />
            <ReferenceField label="Auteur" source="fk_auteur" reference="users">
                <TextField source="lastname" />
            </ReferenceField>
            <ReferenceField label="Destinataire" source="fk_destinataire" reference="users">
                <TextField source="lastname" />
            </ReferenceField>
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <EditButton basePath="/messages" />
            <DeleteButton basePath="/messages" />
        </Datagrid>
    </List>
);

const MessageTitle = ({ record }) => {
    return <span>Message {record ? `${record.id}` : ''}</span>;
};

export const MessageEdit = (props) => (
    <Edit title={<MessageTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="message" multiline />
            <ReferenceInput
                source="fk_auteur"
                reference="users"
                label="Auteur"
                filterToQuery={searchText => ({ title: searchText })}>
                <AutocompleteInput optionText="lastname" />
            </ReferenceInput>
            <ReferenceInput
                source="fk_destinateur"
                reference="users"
                label="Destinateur"
                filterToQuery={searchText => ({ title: searchText })}>
                <AutocompleteInput optionText="lastname" />
            </ReferenceInput>
            <DateInput source="date_envoi" />
        </SimpleForm>
    </Edit>
);

export const MessageCreate = (props) => (
    <Create title="Creat new message !" {...props}>
        <SimpleForm>
            <TextInput source="message" multiline />
            <ReferenceInput
                source="fk_auteur"
                reference="users"
                label="Auteur"
                filterToQuery={searchText => ({ title: searchText })}>
                <AutocompleteInput optionText="lastname" />
            </ReferenceInput>
            <ReferenceInput
                source="fk_destinateur"
                reference="users"
                label="Destinateur"
                filterToQuery={searchText => ({ title: searchText })}>
                <AutocompleteInput optionText="lastname" />
            </ReferenceInput>
            <DateInput source="date_envoi" />
        </SimpleForm>
    </Create>
);
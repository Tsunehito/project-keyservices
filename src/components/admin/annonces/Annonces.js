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
    BooleanField,
    ReferenceField,
    EditButton,
    DeleteButton,
    TextInput,
    DateInput,
    SelectInput,
    BooleanInput,
    ReferenceInput,
    AutocompleteInput,
    Filter,
} from 'react-admin'

const AnnonceFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const AnnonceList = (props) => (
    <List
        {...props}
        filters={<AnnonceFilter />}
    >
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <DateField source="date_debut" />
            <DateField source="date_fin" />
            <ReferenceField label="Logement" source="fk_logement" reference="logements">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField label="Voyageur" source="fk_voyageur" reference="users">
                <TextField source="lastname" />
            </ReferenceField>
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <BooleanField source="is_active" />
            <EditButton basePath="/annonces" />
            <DeleteButton basePath="/annonces" />
        </Datagrid>
    </List>
);

const AnnonceTitle = ({ record }) => {
    return <span>Annonce {record ? `${record.id}` : ''}</span>;
};

export const AnnonceEdit = (props) => (
    <Edit title={<AnnonceTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <DateInput source="date_debut" />
            <DateInput source="date_fin" />
            <ReferenceInput
                source="fk_logement"
                reference="logements"
                label="Logement"
                filterToQuery={searchText => ({ title: searchText })}>
                <SelectInput  optionText="id" />
            </ReferenceInput>
            <ReferenceInput
                source="fk_voyageur"
                reference="users"
                label="Voyageur"
                filterToQuery={searchText => ({ title: searchText })}>
                <AutocompleteInput optionText="lastname" />
            </ReferenceInput>
            <BooleanInput source="is_active" />
        </SimpleForm>
    </Edit>
);

export const AnnonceCreate = (props) => (
    <Create title="Creat new Announce !" {...props}>
        <SimpleForm>
            <DateInput source="date_debut" />
            <DateInput source="date_fin" />
            <ReferenceInput
                source="fk_logement"
                reference="logements"
                label="Logement"
                filterToQuery={searchText => ({ title: searchText })}>
                <SelectInput  optionText="id" />
            </ReferenceInput>
            <ReferenceInput
                source="fk_voyageur"
                reference="users"
                label="Voyageur"
                filterToQuery={searchText => ({ title: searchText })}>
                <AutocompleteInput optionText="lastname" />
            </ReferenceInput>
            <BooleanInput source="is_active" />
        </SimpleForm>
    </Create>
);
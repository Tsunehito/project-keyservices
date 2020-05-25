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
    ChipField,
    BooleanField,
    ReferenceField,
    EditButton,
    DeleteButton,
    TextInput,
    DateInput,
    SelectInput,
    BooleanInput,
    ReferenceInput,
    Filter,
    AutocompleteInput,
} from 'react-admin'

const TacheFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const TacheList = (props) => (
    <List
        {...props}
        filters={<TacheFilter />}
    >
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="name" />
            <TextField source="commentaire" />
            <ChipField source="type" />
            <DateField source="date_effectuee" />
            <DateField source="date_tache" />
            <ReferenceField label="Employee" source="fk_personnel" reference="employes">
                <TextField source="lastname" />
            </ReferenceField>
            <ReferenceField label="Annonce" source="fk_annonce" reference="annonces">
                <TextField source="id" />
            </ReferenceField>
            <BooleanField source="statut" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <EditButton basePath="/taches" />
            <DeleteButton basePath="/taches" />
        </Datagrid>
    </List>
);

const TacheTitle = ({ record }) => {
    return <span>Tache {record ? `${record.id} : "${record.name}"` : ''}</span>;
};

export const TacheEdit = (props) => (
    <Edit title={<TacheTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="commentaire" multiline />
            <SelectInput  source="type" choices={[
                { id: 'maison', name: 'Maison' },
                { id: 'appartement', name: 'appartement' },
                { id: 'studio', name: 'studio' },
                { id: '???', name: '???' },
            ]}/>
            <BooleanInput source="statut" />
            <DateInput source="date_tache" />
            <DateInput source="date_effectuee" />
            <ReferenceInput
                source="fk_personnel"
                reference="employes"
                label="Employee"
                filterToQuery={searchText => ({ title: searchText })}>
                <AutocompleteInput optionText="lastname" />
            </ReferenceInput>
            <ReferenceInput
                source="fk_annonce"
                reference="annonces"
                label="Annonce"
                filterToQuery={searchText => ({ title: searchText })}>
                <SelectInput  optionText="id" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const TacheCreate = (props) => (
    <Create title="Creat new tache !" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="commentaire" multiline />
            <SelectInput  source="type" choices={[
                { id: 'maison', name: 'Maison' },
                { id: 'appartement', name: 'appartement' },
                { id: 'studio', name: 'studio' },
                { id: '???', name: '???' },
            ]}/>
            <BooleanInput source="statut" />
            <DateInput source="date_tache" />
            <DateInput source="date_effectuee" />
            <ReferenceInput
                source="fk_personnel"
                reference="employes"
                label="Employee"
                filterToQuery={searchText => ({ title: searchText })}>
                <AutocompleteInput optionText="lastname" />
            </ReferenceInput>
            <ReferenceInput
                source="fk_annonce"
                reference="annonces"
                label="Annonce"
                filterToQuery={searchText => ({ title: searchText })}>
                <SelectInput  optionText="id" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
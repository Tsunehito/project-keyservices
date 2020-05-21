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

const LogementFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const LogementList = (props) => (
    <List
        {...props}
        filters={<LogementFilter />}
    >
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="address" />
            <TextField source="codePostal" />
            <ReferenceField label="Ville" source="fk_ville" reference="villes">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="complement" />
            <TextField source="description" />
            <TextField source="quartier" />
            <ChipField source="type" />
            <NumberField source="superficie" />
            <BooleanField source="statut" />
            <DateField source="prochaine_reservation" />
            <NumberField source="nb_lits" />
            <NumberField source="nb_sdb" />
            <NumberField source="prix" />
            <TextField source="location" />
            <ReferenceField label="hôte" source="fk_hote" reference="users">
                <TextField source="lastname" />
            </ReferenceField>
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <EditButton basePath="/logements" />
            <DeleteButton basePath="/logements" />
        </Datagrid>
    </List>
);

const LogementTitle = ({ record }) => {
    return <span>Logement {record ? `${record.id}` : ''}</span>;
};

export const LogementEdit = (props) => (
    <Edit title={<LogementTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="address" />
            <TextInput source="codePostal" />
            <ReferenceInput
                source="fk_ville"
                reference="villes"
                label="Ville"
                filterToQuery={searchText => ({ title: searchText })}>
                <SelectInput  optionText="name" />
            </ReferenceInput>
            <TextInput source="complement" />
            <TextInput source="description" />
            <TextInput source="quartier" />
            <SelectInput  source="type" choices={[
                { id: 'maison', name: 'Maison' },
                { id: 'appartement', name: 'appartement' },
                { id: 'studio', name: 'studio' },
            ]}/>
            <TextInput source="superficie" />
            <BooleanInput source="statut" />
            <DateInput source="prochaine_reservation" />
            <TextInput source="nb_lits" />
            <TextInput source="nb_sdb" />
            <TextInput source="prix" />
            <TextInput source="location" />
            <ReferenceInput
                source="fk_hote"
                reference="users"
                label="Hôte"
                filterToQuery={searchText => ({ title: searchText })}>
                <AutocompleteInput optionText="lastname" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const LogementCreate = (props) => (
    <Create title="Creat new logement !" {...props}>
        <SimpleForm>
            <TextInput source="address" />
            <TextInput source="codePostal" />
            <ReferenceInput
                source="fk_ville"
                reference="villes"
                label="Ville"
                filterToQuery={searchText => ({ title: searchText })}>
                <SelectInput  optionText="name" />
            </ReferenceInput>
            <TextInput source="complement" />
            <TextInput source="description" />
            <TextInput source="quartier" />
            <SelectInput  source="type" choices={[
                { id: 'maison', name: 'Maison' },
                { id: 'appartement', name: 'appartement' },
                { id: 'studio', name: 'studio' },
            ]}/>
            <TextInput source="superficie" />
            <BooleanInput source="statut" />
            <DateInput source="prochaine_reservation" />
            <TextInput source="nb_lits" />
            <TextInput source="nb_sdb" />
            <TextInput source="prix" />
            <TextInput source="location" />
            <ReferenceInput
                source="fk_hote"
                reference="users"
                label="Hôte"
                filterToQuery={searchText => ({ title: searchText })}>
                <AutocompleteInput optionText="lastname" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
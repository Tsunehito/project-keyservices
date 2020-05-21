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
    AutocompleteInput,
    Filter,
} from 'react-admin'

const CommandesPanierFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const CommandesPanierList = (props) => (
    <List
        {...props}
        filters={<CommandesPanierFilter />}
    >
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <DateField source="date_commande" />
            <DateField source="date_livree" />
            <ReferenceField label="User" source="fk_user" reference="users">
                <TextField source="lastname" />
            </ReferenceField>
            <ReferenceField label="Panier
            " source="fk_panier" reference="paniers">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <EditButton basePath="/commandes_paniers" />
            <DeleteButton basePath="/commandes_paniers" />
        </Datagrid>
    </List>
);

const CommandesPanierTitle = ({ record }) => {
    return <span>Commande Panier {record ? `${record.id}` : ''}</span>;
};

export const CommandesPanierEdit = (props) => (
    <Edit title={<CommandesPanierTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <DateInput source="date_commande" />
            <DateInput source="date_livree" />
            <ReferenceInput
                label="User"
                source="fk_user"
                reference="users"
                filterToQuery={searchText => ({ title: searchText })}>
                <SelectInput  optionText="lastname" />
            </ReferenceInput>
            <ReferenceInput
                label="Panier"
                source="fk_panier"
                reference="paniers"
                filterToQuery={searchText => ({ title: searchText })}>
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const CommandesPanierCreate = (props) => (
    <Create title="Creat new Commande Panier !" {...props}>
        <SimpleForm>
            <DateInput source="date_commande" />
            <DateInput source="date_livree" />
            <ReferenceInput
                label="User"
                source="fk_user"
                reference="users"
                filterToQuery={searchText => ({ title: searchText })}>
                <SelectInput  optionText="lastname" />
            </ReferenceInput>
            <ReferenceInput
                label="Panier"
                source="fk_panier"
                reference="paniers"
                filterToQuery={searchText => ({ title: searchText })}>
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
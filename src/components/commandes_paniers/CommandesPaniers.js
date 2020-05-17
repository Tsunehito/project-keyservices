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
    SelectInput,
    BooleanInput,
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
            <ReferenceField label="hôte" source="fk_hote" reference="users">
                <TextField source="lastname" />
            </ReferenceField>
            <ReferenceField label="voyageur" source="fk_voyageur" reference="users">
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
    return <span>User {record ? `${record.id} : "${record.lastname} ${record.firstname}"` : ''}</span>;
};

export const AnnonceEdit = (props) => (
    <Edit title={<AnnonceTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="lastname" />
            <TextInput source="firstname" />
            <TextInput source="email" type="email" />
            <TextInput source="password" type="password" />
            <TextInput source="telephone" />
            <TextInput source="address" />
            <TextInput source="codePostal" />
            <TextInput source="city" />
            <TextInput source="country" />
            <SelectInput  source="type" choices={[
                { id: 'hote', name: 'hote' },
                { id: 'voyageur', name: 'voyageur' },
            ]}/>
            <BooleanInput source="is_active" />
        </SimpleForm>
    </Edit>
);

export const AnnonceCreate = (props) => (
    <Create title="Creat new user !" {...props}>
        <SimpleForm>
            <TextInput source="lastname" label="Last name"/>
            <TextInput source="firstname" label="First name"/>
            <TextInput source="email" label="Email Address" type="email"/>
            <TextInput source="password" label="Password" type="password" initiallyVisible />
            <TextInput source="telephone" label="Telephone"/>
            <TextInput source="address" label="Address"/>
            <TextInput source="codePostal" />
            <TextInput source="city" />
            <TextInput source="country" />
            <SelectInput  source="type" choices={[
                { id: 'hote', name: 'hote' },
                { id: 'voyageur', name: 'voyageur' },
            ]}/>
            <BooleanInput source="is_active" />
        </SimpleForm>
    </Create>
);
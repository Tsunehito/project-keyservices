import { apiUrl } from '../../config';

const authProvider = {
    // called when the user attempts to log in
    login: ({ email, password }) => {
        const request = new Request( apiUrl + '/e/auth/signin', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: new Headers({'Content-Type': 'application/json'}),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ accessToken }) => {
                localStorage.setItem('accessToken', accessToken);
            });
    },
    // called when the user clicks on the logut button
    logout: () => {
        localStorage.removeItem('accessToken');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('accessToken');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('accessToken')
        ? Promise.resolve()
        : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};

export default authProvider;


// export default {
//     // called when the user attempts to log in
//     login: ({ username }) => {
//         localStorage.setItem('username', username);
//         // accept all username(email)/password combinations
//         return Promise.resolve();
//     },
//     // called when the user clicks on the logut button
//     logout: () => {
//         localStorage.removeItem('username');
//         return Promise.resolve();
//     },
//     // called when the API returns an error
//     checkError: ({ status }) => {
//         if (status === 401 || status === 403) {
//             localStorage.removeItem('username');
//             return Promise.reject();
//         }
//         return Promise.resolve();
//     },
//     // called when the user navigates to a new location, to check for authentication
//     checkAuth: () => {
//         return localStorage.getItem('username')
//         ? Promise.resolve()
//         : Promise.reject();
//     },
//     // called when the user navigates to a new location, to check for permissions / roles
//     getPermissions: () => Promise.resolve(),
// };
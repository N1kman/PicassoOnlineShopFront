export function checkAuth() {
    return localStorage.getItem('token') ? true : false;
}
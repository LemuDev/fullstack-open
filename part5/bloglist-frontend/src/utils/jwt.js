export function getJWT() {
    return localStorage.getItem('token')  
}

export function setJWT(token) {
    localStorage.setItem('token', token)
}
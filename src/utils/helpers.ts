export const getAppURL = () => {
    const subdomain = getSubdomain(window.location.hostname);

    if(subdomain === 'admin') return "admin";
    return subdomain;
}

const getSubdomain = (location: string) => {
    const host = location.split('.');
    let sliceTo = -2;
    const isLocalhost = host.slice(-1)[0] === 'localhost';
    if (isLocalhost) sliceTo = -1;
    return host.slice(0, sliceTo).join("");
}
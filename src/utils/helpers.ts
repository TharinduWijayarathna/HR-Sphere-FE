export const getAppURL = () => {
    const subdomain = getSubdomain(window.location.hostname);
    // const access = ACCESS.find((access) => access.main);
    // if(!access) throw new Error('Main access not found');
    // if(subdomain === "") return access.main;
    // const app = ACCESS.find((access) => subdomain === access.subdomain);
    // if(!app) return access.main;
    // return app.main;

    //check if subdomain is equal to admin then return true
    if(subdomain === 'admin') return "admin";
    return subdomain;
}

const getSubdomain = (location: string) => {
    const host = location.split('.');

    let sliceTo = -2;

    //for localhost
    const isLocalhost = host.slice(-1)[0] === 'localhost';

    if (isLocalhost) sliceTo = -1;

    return host.slice(0, sliceTo).join("");
}
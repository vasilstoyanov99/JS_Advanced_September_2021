function requestValidator(request) {
    const methodTypes = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const errorMessage =  'Invalid request header: Invalid ';

    if (!methodTypes.includes(request['method'])) {
        throw new Error(errorMessage + 'Method');
    }

    const methodRegex = new RegExp(/\*|[a-zA-Z.]+/);
    const uri = request['uri'];

    if (!methodRegex.test(uri) || uri === undefined) {
        throw new Error(errorMessage + 'URI');
    }

    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!versions.includes(request['version'])) {
        throw new Error(errorMessage + 'Version');
    }

    const messageRegex = new RegExp(/\D|<|>|\\|&|\$|'|"/);

    if (messageRegex.test(request['message'])) {
        throw new Error(errorMessage + 'Message');
    }

    return request;
}

console.log(requestValidator({
        method: 'POST',
        message: 'rm -rf /*'
    }
));
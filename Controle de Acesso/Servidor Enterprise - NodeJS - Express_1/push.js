const pathUtils = require('./path-utils');

const paths = [
    'push',
    'result'
];

module.exports = (request, response) => {

    const lastPathname = pathUtils.extractLastPathname(request.path);

    if (pathUtils.notHasPath(lastPathname, paths)) {
        return;
    }

    if (lastPathname === 'push') {

        //code
console.log("aqui psuh ");
        return;
    }

    if (lastPathname === 'result') {
        var requestBody = {
            response: JSON.parse(request.body.response)
        };

        console.log('Body content push;\n'+ JSON.stringify(requestBody, null, 2));


        return;
    }

}

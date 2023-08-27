const pathUtils = require('./path-utils');

const paths = [
    'new_biometric_image.fcgi',
    'new_biometric_template.fcgi',
    'new_card.fcgi',
    'new_user_id_and_password.fcgi',
  
    'user_get_image.fcgi',
    'device_is_alive.fcgi',
    'template_create.fcgi',
    'fingerprint_create.fcgi',
    'card_create.fcgi',
    'new_rex_log.fcgi',
    'master_password.fcgi'
];

module.exports = (request, response) => {
   console.log('Path event-> ' + request.path);
    const lastPathname = pathUtils.extractLastPathname(request.path);
console.log(lastPathname + " lastPathname");
   // if (pathUtils.notHasPath(lastPathname, paths)) {

    //    return;
  //  }

    var contentType = request.get('content-type');
console.log(contentType + " contentType");
    if (['application/json', 'application/x-www-form-urlencoded'].includes(contentType)) {
        console.log('Body content event:\n' + JSON.stringify(request.body, null, 2));
 console.log(JSON.stringify(request.body));

    }

    if ('application/octet-stream' === contentType) {
        let bytes = [];
        let uploadProgress = 0;

        request.on('data', (byte) => {
            uploadProgress += byte.length;

            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            process.stdout.write("Loading -> " + uploadProgress);

            bytes.push(byte);
        });

        request.on('end', () => console.log('\nLoaded!'));
    }

    if (lastPathname === 'new_user_identified.fcgi') {
        //code
console.log("aqui llega nuevo");
var access_answer = {
    result: {
        event: 7, 
        user_name: 'eae',
        user_id: 1000,
        user_image: true, 
        portal_id: 1,
        actions: [
            {
                action: 'sec_box', 
                parameters: 'id=65793=1, reason=1' 
            }
        ],
        message:"Online access"
    }
};
     response.json(access_answer);
console.log("aqui llega nuevo");
        return;
    }

    if (lastPathname === 'device_is_alive.fcgi') {
        //code
console.log("aqui llega nuevo device alive");
        response.sendStatus(200);
        return;
    }

}

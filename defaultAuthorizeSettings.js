/**
 * EXAMPLE_BASE_URL and ISSUER are set by webpack using environment variables. See README and webpack.config.js for details
 */

const BASE_URL = EXAMPLE_BASE_URL
/** @type Assistant.Settings **/
export const defaultAuthorizeSettings = {
    base_url                : BASE_URL,
    client_id               : "oauth-assistant-client",
    issuer                  : ISSUER,
    redirect_uri            : window.origin + "/assisted.html",
    for_origin              : window.origin,
    flow_type               : "code",
    iframe                  : {
        targetElement: 'body',
        width        : null, // take default value
        height       : null, // take default value
        backdrop     : {
            visible      : true, // default is true
            style        : null, // take default value
            backdropClass: "backdrop-class"
        }
    },
    popup:{
        width        : null, // take default value
        height       : null, // take default value
    },
    allowed_origins: [BASE_URL, "http://localhost:8080"], // default is [window.origin]
    check_session_iframe    : null,
    session_polling_interval: 5, // polling interval in seconds, default is 5
    allowed_jwt_algorithms  : ['RS256'],
    jwt_sig_public_key      : { // allowed formats are jwk | jwks_uri | pem | issuer | metadata_url | raw
        format: 'issuer', // in case of issuer, the issuer value will be taken from jwt payload
        value : null
    },
    debug                   : false,
    // openid_configuration_url: "" // Set if the OpenID Configuration URL uses different host or base path than the issuer
    //check_session_iframe_events: checkSessionIframeEvents
};

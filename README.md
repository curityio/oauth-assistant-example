# Curity OAuth Assistant Example App

This is a trivial example application that shows how to use the [@curity/oauth-assistant](https://www.npmjs.com/package/@curity/oauth-assistant) to perform OAuth flows and OpenID Connect session management. The example is written using vanilla Javascript.

Run the application with the following commands:

```shell
npm i
npm start
```

You can adjust the settings with which the application will start by adjusting them in [defaultAuthorizeSettings.js](defaultAuthorizeSettings.js).

You can also use the following environment variables to start the application with adjusted settings:

- `OAUTH_ASSISTANT_EXAMPLE_ISSUER`: if set, then this value will be used as the issuer for assistant initialization. Otherwise, the default behavior depends on `CURITY_IDENTITY_SERVER_DEFAULT_CONFIG`.
- `CURITY_IDENTITY_SERVER_DEFAULT_CONFIG`: set to `true` if you are using an instance of the Curity Identity Server with the default configuration (for example, generated with the setup wizard). The application will then use the base URL and the default value for the issuer. Set to `false`, or leave undefined, if you're using the development version of configuration.
- `OAUTH_ASSISTANT_EXAMPLE_BASE_URL`: The base URL of your instance of the Curity Identity Server.

Note that once you start a flow, the settings are saved into the browser's local storage. You might need to clear the storage if you want the application to load new settings automatically from the default ones.

See the following resources to learn more about running the example and the OAuth Assistant library:

- [OAuth Assistant Example Tutorial](https://curity.io/resources/learn/oauth-assistant/)
- [Running OAuth flows with the Curity Identity Server and OAuth Assistant](https://curity.io/resources/learn/test-using-oauth-assistant/)
- [OAuth Assistant npm page](https://www.npmjs.com/package/@curity/oauth-assistant)

# Curity OAuth Assistant Example App

[![Quality](https://img.shields.io/badge/quality-test-yellow)](https://curity.io/resources/code-examples/status/)
[![Availability](https://img.shields.io/badge/availability-source-blue)](https://curity.io/resources/code-examples/status/)

This is a trivial example application that shows how to use the [@curity/oauth-assistant](https://www.npmjs.com/package/@curity/oauth-assistant) to perform OAuth flows and OpenID Connect session management. The example is written using vanilla Javascript.

## Run the Application

Point the example to your instance of the Curity Identity Server:

```shell
export OAUTH_ASSISTANT_EXAMPLE_BASE_URL='http://localhost:8443'
export OAUTH_ASSISTANT_EXAMPLE_ISSUER='http://localhost:8443/oauth/v2/oauth-anonymous'
```

Then run the application at `http://localhost:8080` with the following commands:

```shell
npm i
npm start
```

## Run the Curity Identity Server

If you do not have an instance, run one using Docker:

```shell
docker run -it -e PASSWORD=Password1 -p 6749:6749 -p 8443:8443 curity.azurecr.io/curity/idsvr
```

Then log in to the Admin UI at `https://localhost:6749/admin` with credentials `admin / Password1`.\
Then [run the first configuration](https://curity.io/resources/learn/first-config/) and accept all defaults.

To prepare the Curity Identity Server you can save the following XML to a file.\
Then use the Admin UI to upload and merge it using the `Changes / Upload` option.
    
```xml
<config xmlns="http://tail-f.com/ns/config/1.0">
  <profiles xmlns="https://curity.se/ns/conf/base">
    <profile>
      <id>authentication-service</id>
      <type xmlns:auth="https://curity.se/ns/conf/profile/authentication">auth:authentication-service</type>
      <settings>
        <authentication-service xmlns="https://curity.se/ns/conf/profile/authentication">
          <authenticators>
            <authenticator>
              <id>html1</id>
              <html-form xmlns="https://curity.se/ns/conf/authenticators/html-form">
                <account-manager>default-account-manager</account-manager>
                <credential-manager>default-credential-manager</credential-manager>
              </html-form>
            </authenticator>
          </authenticators>
        </authentication-service>
      </settings>
    </profile>
    <profile>
      <id>token-service</id>
      <type xmlns:as="https://curity.se/ns/conf/profile/oauth">as:oauth-service</type>
      <settings>
        <authorization-server xmlns="https://curity.se/ns/conf/profile/oauth">
          <client-store>
            <config-backed>
              <client>
                <id>oauth-assistant-client</id>
                <no-authentication>true</no-authentication>
                <redirect-uris>http://localhost:8080/assisted.html</redirect-uris>
                <redirect-uris>http://localhost:8080/</redirect-uris>
                <scope>openid</scope>
                <user-authentication>
                  <allowed-authenticators>html1</allowed-authenticators>
                  <allowed-post-logout-redirect-uris>http://localhost:8080/assisted.html</allowed-post-logout-redirect-uris>
                </user-authentication>
                <allowed-origins>https://localhost:8443</allowed-origins>
                <allowed-origins>http://localhost:8080</allowed-origins>
                <capabilities>
                  <code/>
                  <implicit/>
                  <assisted-token/>
                </capabilities>
              </client>
            </config-backed>
          </client-store>
        </authorization-server>
      </settings>
    </profile>
  </profiles>
</config>
```

## Further Information

See the following resources to learn more about running the example and the OAuth Assistant library:

- [OAuth Assistant Example Tutorial](https://curity.io/resources/learn/oauth-assistant/)
- [Running OAuth flows with the Curity Identity Server and OAuth Assistant](https://curity.io/resources/learn/test-using-oauth-assistant/)
- [OAuth Assistant npm page](https://www.npmjs.com/package/@curity/oauth-assistant)

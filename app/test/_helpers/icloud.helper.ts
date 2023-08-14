import {addHoursToCurrentDate, getDateInThePast} from "./_general";

export function getICloudCookieHeader(expired: boolean = false) {
    // We need to dynamically set the expiration date, otherwise we might run into issues
    const HSATrustExpiration = expired ? getDateInThePast() : addHoursToCurrentDate(2158);
    const AppleWebKbExpiration = expired ? getDateInThePast() : addHoursToCurrentDate(1438);
    const WebSessionExpiration = expired ? getDateInThePast() : addHoursToCurrentDate(718);
    return {
        "set-cookie": [
            `X-APPLE-WEBAUTH-HSA-TRUST="8a7c91e6fcxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA0sVMViklkL/qm6SBVEKD2uttGESLUH2lWSvni/sQJecA+iJFa6DyvSRVX";Expires=${HSATrustExpiration.toUTCString()};Path=/;Domain=.icloud.com;Secure;HttpOnly`,
            `X-APPLE-WEBAUTH-PCS-Documents="TGlzdExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxV7v5//gztRqsIYpsU9TtMp2h1UA==";Path=/;Domain=.icloud.com;Secure;HttpOnly`,
            `X-APPLE-WEBAUTH-PCS-Photos="TGlzdExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxNTBISBjsuc745DjtDsiH/yHYfgA==";Path=/;Domain=.icloud.com;Secure;HttpOnly`,
            `X-APPLE-WEBAUTH-PCS-Cloudkit="TGlzdExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxVeHef/0ULtyvHtSgHUGlL7j5KFQ==";Path=/;Domain=.icloud.com;Secure;HttpOnly`,
            `X-APPLE-WEBAUTH-PCS-Safari="TGlzdExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxpqL5IcKJdwcXgGMcXjro+bgifiA==";Path=/;Domain=.icloud.com;Secure;HttpOnly`,
            `X-APPLE-WEBAUTH-PCS-Mail="TGlzdExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxABHBgot7Ib3orbZLQXGQzgPTZ9w==";Path=/;Domain=.icloud.com;Secure;HttpOnly`,
            `X-APPLE-WEBAUTH-PCS-Notes="TGlzdExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxLvjACvIoqe3JLeawWJUcGlVWfhg==";Path=/;Domain=.icloud.com;Secure;HttpOnly`,
            `X-APPLE-WEBAUTH-PCS-News="TGlzdExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx0DyPlzB1OWMIk5s6hWhwCUteozw==";Path=/;Domain=.icloud.com;Secure;HttpOnly`,
            `X-APPLE-WEBAUTH-PCS-Sharing="TGlzdExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxZD1Ll22Xk75XWbb+T8rnWZCviyw==";Path=/;Domain=.icloud.com;Secure;HttpOnly`,
            `X-APPLE-WEBAUTH-HSA-LOGIN=;Expires=Thu, 01-Jan-1970 00:00:01 GMT;Path=/;Domain=.icloud.com;Secure;HttpOnly`,
            `X-APPLE-UNIQUE-CLIENT-ID="Ab==";Path=/;Domain=.icloud.com;Secure`,
            `X-APPLE-WEBAUTH-LOGIN="v=1:t=Gw==BST_IAAAAAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxEy3np0Qr1Lpv5hsKnIv5yNw~~";Path=/;Domain=.icloud.com;Secure;HttpOnly`,
            `X-APPLE-WEBAUTH-VALIDATE="v=1:t=Gw==BST_IAAAAAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx09sUI4aWpMbX4Ta-EsVkJiQ~~";Path=/;Domain=.icloud.com;Secure`,
            `X-APPLE-WEBAUTH-TOKEN="v=2:t=Gw==BST_IAAAAAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxs7RYxfK23oSY3m2BBap2IMw~~";Path=/;Domain=.icloud.com;Secure;HttpOnly`,
            `X-APPLE-WEBAUTH-USER="v=1:s=0:d=12345678901";Path=/;Domain=.icloud.com;Secure;HttpOnly`,
            `X_APPLE_WEB_KB-ZUCWSXYHSDNT7JZRYLZEQMQNCTW="v=1:t=Gw==BST_IAAAAAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdzGQIa0ev-ST4n1ejsIPvFw~~";Expires=${AppleWebKbExpiration.toUTCString()};Path=/;Domain=.icloud.com;Secure;HttpOnly`,
            `X-APPLE-DS-WEB-SESSION-TOKEN="AQEiPexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxsgH1lyGumhyY85tJUsIe5lYvBM5Xt66gkXKi9vwJnNVBrzhdXTolAJpj2f2MIipgTd6KEwN7Q=";Expires=${WebSessionExpiration.toUTCString()};Path=/;Domain=.icloud.com;Secure;HttpOnly`,
        ],
    };
}

/**
 * The expected Cookie Header Value
 */
export const iCloudCookieRequestHeader = `X-APPLE-WEBAUTH-HSA-TRUST="8a7c91e6fcxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA0sVMViklkL/qm6SBVEKD2uttGESLUH2lWSvni/sQJecA+iJFa6DyvSRVX"; X-APPLE-WEBAUTH-PCS-Documents="TGlzdExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxV7v5//gztRqsIYpsU9TtMp2h1UA=="; X-APPLE-WEBAUTH-PCS-Photos="TGlzdExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxNTBISBjsuc745DjtDsiH/yHYfgA=="; X-APPLE-WEBAUTH-PCS-Cloudkit="TGlzdExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxVeHef/0ULtyvHtSgHUGlL7j5KFQ=="; X-APPLE-WEBAUTH-PCS-Safari="TGlzdExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxpqL5IcKJdwcXgGMcXjro+bgifiA=="; X-APPLE-WEBAUTH-PCS-Mail="TGlzdExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxABHBgot7Ib3orbZLQXGQzgPTZ9w=="; X-APPLE-WEBAUTH-PCS-Notes="TGlzdExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxLvjACvIoqe3JLeawWJUcGlVWfhg=="; X-APPLE-WEBAUTH-PCS-News="TGlzdExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx0DyPlzB1OWMIk5s6hWhwCUteozw=="; X-APPLE-WEBAUTH-PCS-Sharing="TGlzdExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxZD1Ll22Xk75XWbb+T8rnWZCviyw=="; X-APPLE-WEBAUTH-HSA-LOGIN=; X-APPLE-UNIQUE-CLIENT-ID="Ab=="; X-APPLE-WEBAUTH-LOGIN="v=1:t=Gw==BST_IAAAAAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxEy3np0Qr1Lpv5hsKnIv5yNw~~"; X-APPLE-WEBAUTH-VALIDATE="v=1:t=Gw==BST_IAAAAAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx09sUI4aWpMbX4Ta-EsVkJiQ~~"; X-APPLE-WEBAUTH-TOKEN="v=2:t=Gw==BST_IAAAAAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxs7RYxfK23oSY3m2BBap2IMw~~"; X-APPLE-WEBAUTH-USER="v=1:s=0:d=12345678901"; X_APPLE_WEB_KB-ZUCWSXYHSDNT7JZRYLZEQMQNCTW="v=1:t=Gw==BST_IAAAAAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdzGQIa0ev-ST4n1ejsIPvFw~~"; X-APPLE-DS-WEB-SESSION-TOKEN="AQEiPexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxsgH1lyGumhyY85tJUsIe5lYvBM5Xt66gkXKi9vwJnNVBrzhdXTolAJpj2f2MIipgTd6KEwN7Q="`;
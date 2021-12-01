const contentfulManagement = require("contentful-management")

module.exports = function() {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
    })

    return contentfulClient
        .getSpace(process.env.REACT_APP_SPACE_ID)
        .then(space => space.getEnvironment('master'))
}

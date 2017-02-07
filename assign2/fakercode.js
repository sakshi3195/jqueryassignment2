var faker = require('faker');

function generateProfiles()
{
    var profile = [];
    for(var id = 0;id<30000 ; id++)
    {
        var firstname = faker.name.firstName();
        var age = faker.random.number({min:18,max:60})
        var companyname=faker.company.companyName();
        /*console.log(firstname);
        console.log(age);
        console.log(companyname);
*/
        profile.push({
            "id" : id,
            "Name" : firstname,
            "age": age,
            "companyname":companyname
        })
    }
    return{"profile" : profile}
}
generateProfiles();
module.exports = generateProfiles
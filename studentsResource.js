const urlJoin = require("url-join");
const request = require("request-promise-native").defaults({json: true});

class StudentsResource
{
    static studentsUrl(recourceUrl)
    {
        const studentsServer = (process.env.STUDENTS_URL || "http://localhost:8080/api/v1");
        return urlJoin(studentsServer, recourceUrl);
    }

    static requestHeaders()
    {
        const studentsKey = (process.env.STUDENTS_APIKEY || "87625lk76-52dc-6hd5-ao8f-425c6yda7747e");
        return {
            apikey: studentsKey
        };
    }

    static getAllProfesores()
    {
        const url = StudentsResource.studentsUrl("/students");
        const options = {
            headers: StudentsResource.requestHeaders()
        };

        return request.get(url, options);
    }
}

module.exports = StudentsResource;
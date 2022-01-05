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
       
        const studentsToken = (process.env.STUDENTS_TOKEN || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjFkNGI4NzRmNDQ5ZDVkMjEyZjM4NmY4IiwiZW1haWwiOiJ1bmRlendlbGZpQGdtYWlsLmNvbSIsImlhdCI6MTY0MTMzMDgyOCwiZXhwIjoxNjQxMzM0NDI4fQ.YZ23FGj1hx665XRTXfXeOhyKMGyFkr0fiA22xIkdU_k");
        return {
            token: studentsToken
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
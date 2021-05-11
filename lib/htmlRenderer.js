const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

const render = employees => {
    const html = [];

    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => managerRender(manager))
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => engineerRender(engineer))
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => internRender(intern))
    );

    return mainRender(html.join(""));

};



module.exports = render;
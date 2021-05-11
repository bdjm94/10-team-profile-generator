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

const managerRender = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    return template;
};

const engineerRender = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
};

const internRender = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
};

module.exports = render;
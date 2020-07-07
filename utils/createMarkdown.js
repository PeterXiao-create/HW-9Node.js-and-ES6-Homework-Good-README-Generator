//createMarkdown function
function createMarkdown(data) {
    return `# Title:${data.title}

    #Description:
    ${data.Description}
   
    #Table of Contents
    
    #Installation:

    #Usage
    ${data.Usage}

    #License
    #${data.License}

    #Contributing
    ${data.contributing} 

    #Tests
    ${data.tests}

    #Questions
    ${data.questions}
 
    #Github Username: ${data.github}
    #${data.License}`
}


//license functioin

//url function
function generateProjectUrl(github, title) {
    const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
    return `https://github.com/${github}/${kebabCaseTitle}`;
}


module.exports = createMarkdown;
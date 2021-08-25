

const generateHTML = (data) => {

    const generateManager = ( emp ) =>
        `
        <div>
            <div class="ui fluid card card-body">
                <div class="content card-header">
             
                    <h4 class="ui sub header">${ emp.getRole() }</h4>
                </div>
                <div class="content">
                    <div class="ui small feed card-content">
                        <div class="event gray top">
                            <div class="content">
                                <div class="summary">
                                    <span>Name:${ emp.name} </span>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="event gray top">
                        <div class="content">
                            <div class="summary">
                             
                                <span>ID: ${ emp.ID }</span>
                            </div>
                        </div>
                    </div>
                        <div class="event white">
                            <div class="content">
                                <div class="summary">
                                    <span>Email: </span>
                                    <a href="mailto: ${ emp.email }">${ emp.email }</a>
                                </div>
                            </div>
                        </div>
                        <div class="event gray bottom">
                            <div class="content">
                                <div class="summary">
                                    <span>Office: ${ emp.officeNumber }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        `;


    const generateEmployees = (emps) => {
        let html = '';
 
        const renderCorrespondingLine = ( emp ) => {
            if ( emp.getRole() === 'Engineer' ) {
                return `<span>Github: <a href="https://github.com/${ emp.github }">${ emp.github }</a></span>`;
            } else {
                return `<span>School: ${ emp.school }</span>`;
            }
        };

        
       

        for (let i = 0; i < emps.length; i++) {
            html += `
                    <div>
                        <div class="ui fluid card card-body">
                            <div class="content card-header">
                                <h4 class="ui sub header">${emps[ i ].getRole()}</h4>
                            </div>
                            <div class="content">
                                <div class="ui small feed card-content">
                                    <div class="event gray top">
                                        <div class="content">
                                            <div class="summary">
                                                <span> Name: ${emps[i].name}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="event gray top">
                                    <div class="content">
                                        <div class="summary">
                                            <span>ID: ${emps[i].ID}</span>
                                        </div>
                                    </div>
                                </div>
                                    <div class="event white">
                                        <div class="content">
                                            <div class="summary">
                                                <span>Email: </span>
                                                <a href="mailto: ${emps[ i ].email }">${emps[ i ].email}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="event gray bottom">
                                    <div class="content">
                                        <div class="summary">
                                            ${renderCorrespondingLine(emps[ i])}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>              
                    </div>
                </div>
           `
        
        }

        return html;
    }

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
            <link rel="stylesheet" href="style.css">
            <title>Team </title>
        </head>
        <body>
            <div class="pusher">
                <header data-text="Employees">
                    <div class= "header-wrapp">
                        <div class="ui text container page-header">
                            <h1 class="ui inverted header header-font">
                                MY TEAM
                            </h1>
                        </div>
                        <div class="page-sub-header">
                            <h2 class="sub-header-font">My Team Members </h2>
                        </div>
                    </div>
                </header>
                <br /><br />
                <br /><br />
                <div class=" ui three column grid" id="center">
                    ${generateManager(data[0])}
                    ${generateEmployees(data.slice(1))}
                </div>
            </div>
        </body>
        </html>`
};

module.exports = generateHTML;

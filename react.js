let project = [
    {
        id: 1,
        projectImage: "assets/projects/react/World-Map.png",
        projectName: "World Map",
        projectDetail: "A simplified front-end clone of the YouTube platform that replicates key UI elements and functionality. It allows users to browse and search for videos using the YouTube API. This project demonstrates advanced DOM manipulation, API usage, and responsive design skills.",
        tech: ['HTML', 'SCSS', 'REACT JS', ],
        link: "https://worldmapsapi.netlify.app/",
    },
    {
        id: 2,
        projectImage: "assets/projects/react/CRUD-App.png",
        projectName: "CRUD App",
        projectDetail: "A front-end clone of the streaming platform interface, designed to showcase movies and TV shows by fetching real-time data from the OMDb API. This project replicates the modern UI/UX of Hotstar and demonstrates dynamic rendering of multimedia content using JavaScript and API calls.",
        tech: ['HTML', 'CSS', 'REACT JS', ],
        link: "https://crudjsonapi.netlify.app/",
    },
    {
        id: 3,
        projectImage: "assets/projects/javascript/shopping.jpg",
        projectName: "Edusity",
        projectDetail: "A basic e-commerce shopping cart system built using vanilla JavaScript. This project allows users to browse a product list, add items to their cart, and manage quantities. It's a great hands-on exercise in DOM manipulation, event handling and local storage  for cart persistence.",
        tech: ['HTML', 'CSS', 'REACT JS', ],
        link: "",
    },
    {
        id: 4,
        projectImage: "assets/projects/javascript/emi.jpg",
        projectName: "Fitness Gym",
        projectDetail: "An EMI (Equated Monthly Installment) Calculator that allows users to calculate the monthly installment amount for a loan based on the loan amount, interest rate, and tenure. This is a practical mini-project to apply mathematical logic with DOM manipulation and real-time form inputs.",
        tech: ['HTML', 'CSS', 'REACT JS', ],
        link: "",
    },
    {
        id: 5,
        projectImage: "assets/projects/javascript/notes.jpg",
        projectName: "Notes App",
        projectDetail: "A simple, interactive Notes App that allows users to create, edit, delete, and save text notes in the browser. The app uses local storage to ensure notes persist even after refreshing or closing the page. This project is ideal for practicing DOM manipulation, event handling and data storage with vanilla JavaScript.",
        tech: ['HTML', 'CSS', 'REACT JS' ],
        link: "",
    }
    // {
    //     id: 6,
    //     projectImage: "assets/projects/javascript/todo.png",
    //     projectName: "Todo App",
    //     projectDetail: "A To-Do App is a productivity tool that allows users to add, edit, delete, and mark tasks as completed. This project focuses on mastering DOM manipulation, event handling, and local storage to create a fully functional, interactive, and persistent task manager in the browser.",
    //     tech: ['HTML', 'CSS', 'JAVASCRIPT', 'LOCAL STORAGE' ],
    //     link: "https://todoappmobile.netlify.app/",
    // }
    // {
    //     id: 7,
    //     projectImage: "assets/projects/javascript/quiz.png",
    //     projectName: "Quiz App",
    //     projectDetail: "A dynamic Quiz Application that allows users to answer multiple-choice questions, track their score, and get feedback at the end. This project is excellent for practicing DOM manipulation, event handling, and working with arrays and objects in JavaScript.",
    //     tech: ['HTML', 'CSS', 'JAVASCRIPT', 'LOCAL STORAGE' ],
    //     link: "",
    // }
];

let projectContainer = document.querySelector('.project-container');

function projectsBox(){
    const projectArr = project.map((el) => {    
        let projectBox = document.createElement('div');
        projectBox.classList.add('project-box', 'project-detail');
        projectBox.setAttribute('data-aos', 'fade-up');

        let imgBox = document.createElement('div');
        imgBox.classList.add('project-img');
        
        let pImage = document.createElement('img');
        pImage.src = el.projectImage;
        pImage.alt = el.projectName;
    
        imgBox.appendChild(pImage);
    
        let projectText = document.createElement('div');
        projectText.classList.add('project-text', 'projectsBtn');

        let h3 = document.createElement('h3');
        h3.innerText = el.projectName;

        let p = document.createElement('p');
        p.textContent = el.projectDetail;

        let ul = document.createElement('ul');
        el.tech.forEach((skill) => {
            let li = document.createElement('li');
            li.textContent = skill;
            ul.appendChild(li);
        });

        let liLink = document.createElement('li');
        let link = document.createElement('a');
        link.href = el.link;
        link.target = '_blank';
        link.innerText = 'Live Link';
        
        liLink.appendChild(link);
        ul.appendChild(liLink);
        projectText.append(h3, p, ul);
        projectBox.append(imgBox, projectText);
    
        return projectBox;
    });
    projectContainer.append(...projectArr);
};

projectsBox();














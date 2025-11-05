let project = [
    {
        id: 1,
        projectImage: "assets/projects/react/World-Map.png",
        projectName: "World Map",
        projectDetail: "A React.js application that uses the REST Countries API to display detailed information about every nation. Users can search, sort, and filter countries by region to explore data such as population, capital, and flags in an interactive and responsive interface.",
        tech: ['HTML', 'SCSS', 'REACT JS', 'Countries API'  ],
        link: "https://worldmapsapi.netlify.app/",
    },
    {
        id: 2,
        projectImage: "assets/projects/react/CRUD-App.png",
        projectName: "CRUD App",
        projectDetail: "A React.js CRUD application that interacts with a JSON API to Create, Read, Update, and Delete data dynamically. Users can add, edit, update and remove records through an interactive interface, while React hooks (useState, useEffect)manage state and API calls.",
        tech: ['HTML', 'CSS', 'REACT JS', 'JSON API' ],
        link: "https://crudjsonapi.netlify.app/",
    },
    {
        id: 3,
        projectImage: "assets/projects/react/weather_app.png",
        projectName: "Weather App",
        projectDetail: "A React.js weather app that provides real-time weather updates for any City using a reliable Weather API. With a responsive design and modern UI elements, users can easily search cities, view current conditions, temperature, and forecasts through an elegant, interactive interface.",
        tech: ['HTML', 'CSS', 'REACT JS', 'Weather API', 'Routing' ],
        link: "https://weatherappcities.netlify.app/",
    },
    {
        id: 4,
        projectImage: "assets/projects/react/cityluxe.png",
        projectName: "City Luxe Hotel",
        projectDetail: "A React.js website built for CityLuxe Hotel that dynamically displays room details, destinations, and amenities. Featuring smooth routing, responsive design, fontawesome Icon and modern UI components , the app allows users to explore available suites, view high-quality images, and learn about CityLuxe’s luxury services — all in an elegant, interactive interface.",
        tech: ['HTML', 'CSS', 'REACT JS', 'Routing' ],
        link: "https://cityluxehotel.netlify.app/",
    },
    {
        id: 5,
        projectImage: "assets/projects/react/fitclub.png",
        projectName: "Fitclub Gym",
        projectDetail: "React.js is a beginner-friendly project featuring a clean and modern layout. It uses React Icons for visuals and the Framer Motion library for smooth animations. The main goal is to learn React components, props, and animation effects while creating an engaging and responsive fitness-themed website.",
        tech: ['HTML', 'CSS', 'REACT JS', ],
        link: "https://thefitclubsinglepage.netlify.app/",
    },
    {
        id: 6,
        projectImage: "assets/projects/react/edusity.png",
        projectName: "Edusity",
        projectDetail: "React.js is a beginner-friendly project with a clean and responsive design. It allows users to explore courses and colleges through dynamic content and interactive UI while helping learners practice React components, props, routing, and state management.",
        tech: ['HTML', 'CSS', 'REACT JS' ],
        link: "https://edusitysinglepage.netlify.app/",
    },
    {
        id: 7,
        projectImage: "assets/projects/react/Real-Estate.png",
        projectName: "Real Estate",
        projectDetail: "A Real Estate Landing Page built with React.js is a beginner-friendly project, clean and responsive layout. The main goal is to learn React components, props, hooks, and basic styling  while creating a visually appealing single-page website.",
        tech: ['HTML', 'CSS', 'REACT JS', ],
        link: "https://mdrealstate.netlify.app/",
    }
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














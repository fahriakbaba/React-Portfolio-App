const projectsData = [
    {
        id: 1,
        src: "https://raw.githubusercontent.com/fahriakbaba/React-Task-Tracker-using-Fake-API/main/public/images/taskmain.png",
        alt: "task",
        title:"React Task Tracker With a Fake API Rest",
        lists: ["Rest API", "React Router", "Context API", "React module css"],
        href: "https://github.com/fahriakbaba/React-Task-Tracker-using-Fake-API"
    },
    {
        id: 2,
        src: "https://raw.githubusercontent.com/fahriakbaba/React-Quiz-App/main/public/images/setup.png",
        alt: "quiz",
        title:"React Quiz App",
        lists: ["module css", "Context API", "dangerouslySetInnerHTML", "React Module"],
        href: "https://github.com/fahriakbaba/React-Quiz-App"
    },
    {
        id: 3,
        src: "https://raw.githubusercontent.com/fahriakbaba/React-Cocktail-API/main/public/images/main.png",
        alt: "quiz",
        title:"React Cocktail API",
        lists: ["React Router", "Context API"],
        href: "https://github.com/fahriakbaba/React-Cocktail-API"
    },
    {
        id: 4,
        src: "https://raw.githubusercontent.com/fahriakbaba/React-Paginate-App/main/public/images/page.png",
        alt: "pagination",
        title:"React Paginate App",
        lists: ["React Hooks"],
        href: "https://github.com/fahriakbaba/React-Paginate-App"
    },
    {
        id: 5,
        src: "https://raw.githubusercontent.com/fahriakbaba/moive-react-app/main/public/images/movie-app.png",
        alt: "movie",
        title:"React Movie App",
        lists: ["React Modal", "React Hooks"],
        href: "https://github.com/fahriakbaba/moive-react-app"
    },
    {
        id: 6,
        src: "https://raw.githubusercontent.com/fahriakbaba/My-Budget-Planner-React-App/main/public/images/light.png",
        alt: "budget",
        title:"My Budget Planner React App",
        lists: ["Redux Toolkit", "React Theme Toggle", "React Filter Search", "Bootstrap"],
        href: "https://github.com/fahriakbaba/My-Budget-Planner-React-App"
    },
    {
        id: 7,
        src: "https://raw.githubusercontent.com/fahriakbaba/todolist-react-redux-toolkit/main/public/images/todolist.png",
        alt: "todolist",
        title:"Todolist React Redux Toolkit",
        lists: ["Redux Toolkit", "React Icon", "Bootstrap"],
        href: "https://github.com/fahriakbaba/todolist-react-redux-toolkit"
    },
    {
        id: 8,
        src: "https://raw.githubusercontent.com/fahriakbaba/react-book-shopping-cart/main/public/images/cart.png",
        alt: "shopping-cart",
        title:"React Book Shopping Cart",
        lists: ["Context API", "React Hooks"],
        href: "https://github.com/fahriakbaba/react-book-shopping-cart"
    },
    {
        id: 9,
        src: "https://raw.githubusercontent.com/fahriakbaba/meme-generator-react-app/main/public/images/meme.png",
        alt: "meme-generator",
        title:"Meme Generator React App",
        lists: ["React Form", "React Hooks"],
        href: "https://github.com/fahriakbaba/meme-generator-react-app"
    },
    {
        id: 10,
        src: "https://raw.githubusercontent.com/fahriakbaba/todolist-react-app/main/public/images/project-image.png",
        alt: "todolist",
        title:"Todolist React App",
        lists: ["React Hooks"],
        href: "https://github.com/fahriakbaba/todolist-react-app"
    },
    {
        id: 11,
        src: "https://raw.githubusercontent.com/fahriakbaba/tabs-react-app/main/public/images/tab.png",
        alt: "tabs",
        title:"Tabs React App",
        lists: ["React Hooks"],
        href: "https://github.com/fahriakbaba/tabs-react-app"
    },
    {
        id: 12,
        src: "https://raw.githubusercontent.com/fahriakbaba/reviews-react-app/main/public/image/reviews.png",
        alt: "reviews",
        title:"Reviews React App",
        lists: ["React Hooks"],
        href: "https://github.com/fahriakbaba/reviews-react-app"
    },
    {
        id: 13,
        src: "https://raw.githubusercontent.com/fahriakbaba/accordion/main/public/images/accordion.png",
        alt: "accordion",
        title:"Accordion React App",
        lists: ["React Hooks"],
        href: "https://github.com/fahriakbaba/accordion"
    },
    {
        id: 14,
        src: "https://raw.githubusercontent.com/fahriakbaba/tour-react-app/main/public/images/tour.png",
        alt: "tour-react",
        title:"Tour React App",
        lists: ["React Hooks"],
        href: "https://github.com/fahriakbaba/tour-react-app"
    },
    {
        id: 15,
        src: "https://raw.githubusercontent.com/fahriakbaba/menu-react/main/public/images/menu.png.png",
        alt: "menu-react",
        title:"Menu React App",
        lists: ["React Hooks"],
        href: "https://github.com/fahriakbaba/menu-react"
    },
    {
        id: 16,
        src: "https://www.dienodigital.com/wp-content/uploads/2021/04/1618251794_maxresdefault.jpg",
        alt: "color-flipper",
        title:"Color Flipper Vanilla JS",
        lists: ["JavaScript DOM"],
        href: "https://github.com/fahriakbaba/colorFlipper-vanilla"
    },
    {
        id: 17,
        src: "https://res.cloudinary.com/practicaldev/image/fetch/s--XpWej-jg--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bsqb2hy92bz84cq2kvk7.png",
        alt: "birthday",
        title:"Birthday React App",
        lists: ["React Hooks"],
        href: "https://github.com/fahriakbaba/birthday-react-app"
    },
    {
        id: 18,
        src: "https://i.stack.imgur.com/nfItp.jpg",
        alt: "todolist",
        title:"To do list using Vanilla JS",
        lists: ["forEach()", "JavaScript DOM", "localStorage"],
        href: "https://github.com/fahriakbaba/to-do-list-javascript"
    },
    {
        id: 19,
        src: "https://miro.medium.com/max/720/1*pNbxjDcOZWnzLEQL_xs-rg.jpeg",
        alt: "hamburger",
        title:"Hamburger Menu using Vanilla JS",
        lists: ["using classList and toggle in vanilla javascript"],
        href: "https://github.com/fahriakbaba/hamburger-menu-js"
    },
    {
        id: 20,
        src: "https://miro.medium.com/max/640/1*uLmotINSGHy443MHupn9uA.png",
        alt: "counter",
        title:"Counter Vanilla JS",
        lists: [".addEventListener()", "JavaScript DOM"],
        href: "https://github.com/fahriakbaba/counter"
    },
    {
        id: 21,
        src: "https://www.freecodecamp.org/news/content/images/size/w1000/2021/03/menu.png",
        alt: "menu",
        title:"Asian Menu using Vanilla JS",
        lists: [".addEventListener()", "JavaScript DOM"],
        href: "https://github.com/fahriakbaba/asiankitchen"
    },
    {
        id: 22,
        src: "https://1.bp.blogspot.com/-f1wbwzk-xh4/Wxzwm7j6xdI/AAAAAAAABjk/LIApwYBf3AQ-S6bTQfwHLHykiWHR2ePiQCLcBGAs/s1600/11.PNG",
        alt: "form-validation",
        title:"Form Validation using Vanilla JS",
        lists: [".addEventListener()", "JavaScript DOM"],
        href: "https://github.com/fahriakbaba/Form-Validation"
    },

];

export default projectsData;
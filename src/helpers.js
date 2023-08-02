import bueno from "./image/Bueno.png"
// import clock from "./image/Clock.png"
import portfolio from "./image/Portfolio.png"
import todo from "./image/Todo.png"
import budget from "./image/budget.png"
import { toast } from "react-toastify"

export const videoArr = [
    {
        name: "Bueno Food Market",
        url: "https://res.cloudinary.com/dkhx7sgt1/video/upload/v1682516047/for%20portfolio/bueno_rqwifx.mp4",
        disc: "A functional working website where food and groceries can be purchased.",
        link: "http://www.buenoo.netlify.app",
        visit: "https://github.com/akinlope/Bueno",
        thumbnail: bueno,
    },
    {
        name: "My Portfolio",
        url: "https://res.cloudinary.com/dkhx7sgt1/video/upload/v1682516038/for%20portfolio/portfolio_ebpvae.mp4",
        disc: "A simple working portfolio website where others van see all I have done so far and contact me.",
        link: "http://www.itolu.netlify.app",
        visit: "https://github.com/akinlope/iTolu",
        thumbnail: portfolio
    },
    {
        name: "Budgeting app",
        disc: "Personal budgeting app that helps you maintain and control your expenses.",
        link: "https://itolubudget.netlify.app",
        visit: "https://github.com/akinlope/BudgettingApp",
        thumbnail: budget

    },
    {
        name: "Todo ",
        url: "https://res.cloudinary.com/dkhx7sgt1/image/upload/v1682516994/Screenshot_54_r4ofqt.png",
        disc: "A web todo-app where users can login and write and delete their todo when they are through",
        link: "https://tolutodo.netlify.app",
        visit: "https://github.com/akinlope/react-todo",
        thumbnail: todo
    },
    // {
    //     name: "Clock Webapp",
    //     url: "https://res.cloudinary.com/dkhx7sgt1/video/upload/v1682516036/for%20portfolio/clock_qcsldq.mp4",
    //     disc: "A simple web page that tells the time and date",
    //     link: "https://unrivaled-taffy-4ff6d4.netlify.app",
    //     visit: "https://github.com/akinlope/firstReact",
    //     thumbnail: clock
    // },
    
];

// Toast 
export const toastErr = (str) => {
    return toast.error(str)
};
export const toastSuc = (str) => {
    return toast.success(str)
}


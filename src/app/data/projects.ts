import { Project } from './Project';
export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "The Task Manager",
        overview: "Developed the front-end using React.JS Made real-time syncing more reliable and faster by using Firebase Firestore for the database",
        imagePath: "assets/projects/1.png",
        technelogies: [ "React.js", "Typescript", "Firebase" ],
        link: "https://github.com/islammohamedd1/the-task-manager"
    },
    {
        id: 2,
        title: "Honest Notes",
        overview: "A clone of Sarahah website. Confessions web app built with MEAN stack",
        imagePath: "assets/projects/2.png",
        technelogies: [ "Angular", "Typescript", "MongoDB", "Express.JS" ],
        link: "https://github.com/islammohamedd1/honest-notes"
    },
    {
        id: 3,
        title: "Video Music Remover",
        overview: "Used an API for the machine learning model 'Spleeter' to isolate music from videos in a flask server using python.",
        imagePath: "assets/projects/3.png",
        technelogies: [ "Python", "Flask" ],
        link: "https://github.com/islammohamedd1/video_music_remover"
    }
]
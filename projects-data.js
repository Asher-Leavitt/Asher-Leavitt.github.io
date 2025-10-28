// projects-data.js - All project information in one place

const projectsData = {
    professional: [
        {
            id: "Eigenbody",
            title: "Modular Robot Center Chassis",
            shortDescription: "Redesigned center body for Carnegie Mellon Biorobotics lab, optimizing for new electrical components and more features.",
            fullDescription: "Working under the Biorobitics lab at Carnegie Mellon, this project included a complete redesign of the center body for their hexapod “Eigenbot” project. I was given this project with a starting sketch and minimal requirements. After talking with our electrical engineer and computer scientist more requirements were nailed down. The main requirements they gave was that the center body should be compact, lightweight, and allow for new electrical components. Keeping those in mind, I learned this robot was meant to be a testing ground for many more computer science students in the future. That necessitated an easily repairable design for the future. <br> <br> In order to fulfill all those requirements, this design fits together in 4 separate pieces all 3D printed out of Carbon Fiber Reinforced ASA. It also includes openings for 2 DJI TB50 hot-swappable intelligent batteries. Finally, the new octagonal design allows for possible research into the robot grasping and holding objects using the front or back two legs.",
            thumbnail: "images\\Eigenbot\\IMG_5936.jpg",
            images: [
                "images\\Eigenbot\\IMG_1573.jpg",
                "images\\Eigenbot\\Eigenbody_V3 v7.mp4",   
                "images\\Eigenbot\\IMG_5936.jpg",
                "images\\Eigenbot\\IMG_5919.jpg",
                "images\\Eigenbot\\FusionCAD.png",

            ],  
            skills: ["Fusion", "3D Printing and Slicing", "Fusion Simulation"],
            links: [
                { title: "Carnegie Mellon Biorobotics Lab", url: "https://biorobotics.org/" },
                { title: "Center Body Slideshow", url: "https://docs.google.com/presentation/d/1sMMwU4Ag18J4C3QMTecib-GyM6644tV0Is-Db9VJR8Q/edit?usp=sharing" },
                { title: "Eigenbot Project Paper", url: "https://biorobotics.ri.cmu.edu/papers/paperUploads/WasteManagementSymposium2017RobotInspection.pdf" }
            ],
            details: {
                "Duration": "2 months",
                "Team Size": "7 people",
                "Industry": "Biorobotics",
                "Impact": " 43% surface area reduction "
            }
        },
        
    ],
    personal: [
        {
            id: "CardSorter",
            title: "Trading Card Sorter",
            shortDescription: "(IN PROGRESS) Developing an automated machine that scans and sorts trading cards using computer vision.",
            fullDescription: "It is clear that trading cards are one of the biggest industries in games and toys today. Currently, there are only commercial solutions for the sorting and organization of these cards. This open source project aims to create a version, as capable as commercial solutions, without the hefty price tag. This is done through a majority of 3d printed pieces including belts, pulleys, and card rollers. To scan the card, this machine would use already made software, Manabox, for its speed and collection documentation (not affiliated). <br> <br> Additionally, it is designed in such a way that each sorter module can be independently detached from one another. This allows for better repairability and enhanced customizability. The number of piles this machine can sort is only determined by the strength of the motor and not the design itself. \n This design is actually not the first I’ve created. My initial designs include a much less modular solution with larger moving pieces. While I never started the assembly phase for versions 1 or 2, the CAD was developed. The links for it are below. ",
            thumbnail: "images\\CardSorter\\Screenshot 2025-09-06 164749.png",
            images: [
                "images\\CardSorter\\IMG_6477.mp4",
                "images\\CardSorter\\Screenshot 2025-09-06 164749.png",
                "images\\CardSorter\\IMG_6479.JPEG",
                "images\\CardSorter\\Screenshot 2025-09-06 164910.png",
                "images\\CardSorter\\IMG_4683(1).mp4",
                "images\\CardSorter\\Screenshot 2025-09-06 164956.png",
                "images\\CardSorter\\IMG_6481.JPEG",

            ],
            skills: ["Onshape", "Arduino", "3D Printing and Slicing", "Prototyping"],
            links: [
                { title: "Manabox", url: "https://manabox.app/" },
                { title: "Version 1.0 CAD", url: "https://cad.onshape.com/documents/f37b877b7f285955facea3e9/w/a4fce951df4f8d38cfd74916/e/92ad41869fd1c3aa5c7ebeb2?renderMode=0&uiState=68c487002c3213d6f0fd181c" },
                { title: "Version 2.0 CAD", url: "https://cad.onshape.com/documents/adee0c5224f61781d1eb0518/w/a6c492eb7b8cc8b3c7ec219d/e/65b13d924721417c69ff8455" },

            ],
            details: {
                // "Speed": "2 meters",
                // "Cost": "45+ minutes",
                // "Number of Piles": "5 km",
                "Plastic": "PLA",
                "Version": "3.0"
            }
        },
        {
            id: "swerve",
            title: "First Robotics 2024 Swerve Robot",
            shortDescription: "",
            fullDescription: "First Robotics was in my life throughout middle school and into high school. Every year in January a new game is released and high school students are tasked with building a robot about the size of a washing machine. For the 2024 season, My partner Divya and I were leading the team. As co-captains we were helping to organize and plan so that we hit our competition deadlines. Additionally, I focused on the design of our actual robot.  From a mechanical engineering standpoint, I was able to improve my CAD skills and ability to take a project from prototyping to manufacturing. I could talk endlessly about the strategic design and almost every subsystem which made up our 2024 robot. <br> <br> Aside from that, I was able to learn more about how to organize a big group of people and guide them to reach their full potential. At that time, I was and still am very passionate about FIRST robotics and there were many times where I would see a task that needed to be done, and especially as the  co-captain just try to do it myself. Throughout the season I had to push myself to, even if it’s not the most efficient now, teach others how to perform those tasks. Those tasks could range from robot assembly or programming, to even game strategy during the competition. Being able to let go of my expectations early on and push people further was especially fulfilling when during the competition my team is extremely self-sufficient throughout. I am starting to realize that I am watching the next generation of my team, and I am excited about the future. I would say the main takeaway being that ability to let go of the “I’m just going to do it myself” mentality and instead the willingness to ask others for help. I’d say in most cases but especially this one will result in a better overall outcome for everyone.",
            thumbnail: "images\\Swerve\\IMG_7193.JPEG",
            images: [
                "images\\Swerve\\Warrior Robotics (4169) 2024 Reveal_.mp4",
                "images\\Swerve\\IMG_7193.JPEG",
                "images\\Swerve\\IMG_8010.JPEG",
                "images\\Swerve\\IMG_8068.JPEG"
            ],
            skills: ["Leadership", "Organization", "Onshape", "Prototyping", "Manufacturing", "Python"],
            links: [
                { title: "Onshape Document", url: "https://cad.onshape.com/documents/fb554d7bdf28abc383396fb5/w/f8d5618a4324b5f3ac52d6c8/e/61e8b5b35906b1a74405cfd6?renderMode=0&uiState=68e29ef2777b26ab8076212e" },
                { title: "2025 Code", url: "https://github.com/Team4169/Swerve2024" },
                { title: "Warrior Robotics", url: "https://www.instagram.com/lsrobotics4169?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" }
            ],
            details: {
                "Min Dimensions": "30in x 30in x 32in",
                "Scoring": "Notes and chain climb",
                "Drivebase": "swerve",
            }
        },

        {
            id: "MeltyBrain",
            title: "Melty Brain Combat Robot",
            shortDescription: "Built and competed with a combat robot using an advanced control system allowing translation and rotation through high-RPM spinning and precise motor pulsing",
            fullDescription: "When I joined Northeastern University Combat Robotics, the introductory project included designing and building for a 1lb plastic competition. While I could have selected more mainstream robot types, (drum spinner, vertical/horizontal spinner, flipper) I tried for an unconventional robot type – Meltybrain. Building off a horizontal spinner, the whole robot spins at thousands of RPMs. It moves forwards through the intermittent pulsing of the motor every 180° cycle. For my bot I focused on repairability and damage. This means it splits into 5 different pieces – two lids, one weapon, and two motor mounts. The motor mounts and weapon are all clamped down between the two lid pieces. <br> <br> After competing at the spring competition, I learned a few different things. First, my current design is way too large. While they barely fit the weight requirements, structurally, they were terrible. The whole design needs to be shrunk down in order for it to be viable. Second, programming is hard. I tried to use already made open source code to make my meltybrain move. Unfortunately, this code was never fully functioning and It was hard to pinpoint why exactly it wasn’t moving in the right way. I’d love to revisit this project based on what I’ve learned and improve Wicked Cyclone for another 1lb competition. Not only does the design need improvement, but I need more help understanding the software side. Additionally, I’m curious as to what help simulation software such as Ansys could provide for weapon shape. ",
            thumbnail: "images\\Melty\\cpm35 2025-03-08 172244.662.jpg",
            images: [
                "images\\Melty\\cpm35 2025-03-08 172244.662.jpg",
                "images\\Melty\\IMG_4033.JPEG",
                "images\\Melty\\Screenshot 2025-09-12 181947.png",
                "images\\Melty\\7827612557748026968.mp4"
            ],
            skills: ["Onshape", "Arduino", "3D Printing and Slicing", "Electronics and Wiring", "Prototyping and Manufacturing"],
            links: [
                { title: "Wicked Cyclone 1.0 CAD", url: "https://cad.onshape.com/documents/772dbe5c71ab4f012d701d51/w/a12382010c09e4bf9f2648ca/e/479f2d4a8f67f9d5e8e4ec87?renderMode=0&uiState=68c49bc9063e05775ad0d10d" },
            ],
            details: {
                "Weight Class": "1lb",
                "Materials": "PLA, ABS"
            }
        },
        
                {
            id: "3d-printer",
            title: "CoreXY 3D Printer",
            shortDescription: ".",
            fullDescription: "After being a part of the 3d printing community, I learned about Voron printers very early. The idea of using 3D printers to make a new 3D encapsulates everything I love about 3D printing – Making the things you already want, customized to you, and cheaper (yeah right). Voron Design, a group of engineers, design highly capable 3D printers and release every possible piece of documentation in order for someone to build it. While not a beginner project, kits have been made so that building a Voron printer is much more accessible. <br> <br> Eventually I got over my fear of not having the skills to complete the project and ordered the Voron 0.2 kit. While my skills in design and electronics were not as intensive as I would’ve expected. This project challenged my ability to plan, assemble, and configure a klipper printer. All printable pieces were organized and printed on my club’s Bambulab X1C. Once the kit arrived, over the course of one week gap between semesters, the printer was assembled and configured. With surprisingly little hiccups, the project finished. The largest headache was finding instructions for the many mods that were incorporated with the kit. While the process of building the printer did help my ability to execute projects and test printers, I’ve realized the printer I built is slightly too small for most of my ideal prints. I think in the future I’ll mod or build a printer with more of the final product in mind rather than just the experience itself. ",
            thumbnail: "images\\Voron\\IMG_3987.JPEG",
            images: [
                "images\\Voron\\IMG_3987.JPEG",
                "images\\Voron\\IMG_3981.MP4",
                "images\\Voron\\IMG_3986.JPEG",
                "images\\Voron\\IMG_3671.MP4",
                "images\\Voron\\IMG_3988.JPEG",
            ],
            skills: ["Planning and Organization", "G-code", "Firmware Development", "Precision Assembly"],
            links: [
                { title: "Bill of Materials", url: "https://docs.google.com/spreadsheets/d/158vKqRpwOQfTZ-LxXs00oQGnqy0lt2JNJWxLw8TpCBM/edit?usp=sharing" }
            ],
            details: {
                "Max Speed": "250 mm/s",
                "Material": "ABS",
            }
        },
        {
            id: "marimba",
            title: "Self Playing Marimba",
            shortDescription: "",
            fullDescription: "Over the summer before Senior year, I applied and got into a pre-college program at UPenn. The program focused on robotics and dipped our toes into CAD and electronics. For this project, my partner Brendan and I were tasked with making the marimba play itself. We made a great team as I was able to focus on the CAD and programming while Brendan focused on the wiring and music formatting. Early on, we knew we wanted a solution that was extremely repeatable, given the number of notes in a marimba. What we landed on was a simple servo assembly which briefly tapped a note. <br> <br> To hold the servo in the correct orientation, 3 lasercut pieces were combined to make the housing for the servo. Additionally, a makeshift mallet was made with a wooden stick and a nut placed at the end. Altogether, this made a very small assembly which could be positioned throughout a platform so that the notes we needed could get hit. While only tasked with playing our part in the songs Demons and We Care A Lot, we had enough time to play some songs of our own such as the original apple ringtone and Starmachine2000 by Wintergatan. While this project doesn’t solve any concrete problem it was really fun to work on and I do hope to revisit it sometime in the future.",
            thumbnail: "images\\Marimba\\Screenshot 2025-09-13 154549.png",
            images: [
                "https://youtu.be/NWSdK96VE98",
                "images\\Marimba\\Screenshot 2025-09-13 153905.png",
                "images\\Marimba\\IMG_6902.MP4",
                "https://youtu.be/000wigRa1zc"
            ],
            skills: ["Onshape", "Arduino", "Laser Cutting", "Electronics and Wiring", "Prototyping and Manufacturing"],
            links: [
                { title: "Onshape Document", url: "https://cad.onshape.com/documents/149ab253a8f867afa3f88ffd/w/ebbae71b5c47bca79d5f85e7/e/db8562107a5664f2c0db777e?renderMode=0&uiState=68e29b2a9bf1e7f5a33edec0" },
                { title: "Code", url: "https://asher-leavitt.github.io/images/Marimba/NewESPWifi.ino" },
                { title: "Engineering Summer Academy at Penn", url: "https://esap.seas.upenn.edu/" },

            ],
            details: {
                "Number of Notes": "12",
                "Playable Songs": "5",
                "Pieces per Note": "",
            }
        },
        // {
        //     id: "",
        //     title: "",
        //     shortDescription: "",
        //     fullDescription: "",
        //     thumbnail: "https://placehold.co/400x250",
        //     images: [
        //         "https://placehold.co/800x600",
        //         "https://placehold.co/800x600",
        //         "https://placehold.co/800x600"
        //     ],
        //     skills: ["", "", "", "", ""],
        //     links: [
        //         { title: "", url: "#" },
        //         { title: "", url: "#" }
        //     ],
        //     details: {
        //         " ": "",
        //         "": "",
        //         "": "",
        //         "": ""
        //     }
        // },
        
    ]
};
// projects-data.js - All project information in one place

const projectsData = {
    professional: [
        {
            id: "Eigenbody",
            title: "Modular Robot Center Chassis",
            shortDescription: "Redesigned center body for Carnegie Mellon Biorobotics lab, optimizing for new electrical components and more features.",
            fullDescription: "Working under the Biorobitics lab at Carnegie Mellon, this project included a complete redesign of the center body for their hexapod “Eigenbot” project. The intent with this was to be compact, allow for new electrical components, and be easily taken apart. This design fits together in 4 separate pieces all 3D printed out of Carbon Fiber Reinforced ASA. It also includes openings for 2 DJI TB50 hot-swappable intelligent batteries. Finally, the new octagonal design allows for possible research into the robot grasping and holding objects using the front or back two legs.",
            thumbnail: "images\\Eigenbot\\IMG_5936.jpg",
            images: [
                "images\\Eigenbot\\IMG_1573.jpg",   
                "images\\Eigenbot\\IMG_5936.jpg",
                "images\\Eigenbot\\IMG_5919.jpg",
                "images\\Eigenbot\\FusionCAD.png",
                "images\\Eigenbot\\CadAgain.png"

            ],  
            skills: ["Fusion", "Fusion Simulation", "3D Printing and Slicing"],
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
        
        // {
        //     id: "suspension-system",
        //     title: "Active Suspension System",
        //     shortDescription: "Developed semi-active suspension system for Formula SAE vehicle, incorporating magnetorheological dampers and real-time control algorithms for optimal handling.",
        //     fullDescription: "Designed and implemented an advanced semi-active suspension system for a Formula SAE race car. The system uses magnetorheological dampers with real-time control based on vehicle dynamics sensors. Developed control algorithms in MATLAB/Simulink that adjust damping characteristics within milliseconds based on road conditions and driving mode. The suspension geometry was optimized using Adams Car software to minimize tire scrub and maintain optimal camber through the suspension travel.",
        //     thumbnail: "https://placehold.co/400x250",
        //     images: [
        //         "https://placehold.co/800x600",
        //         "https://placehold.co/800x600",
        //         "https://placehold.co/800x600",
        //         "https://placehold.co/800x600",
        //         "https://placehold.co/800x600"
        //     ],
        //     skills: ["Adams Car", "MATLAB/Simulink", "Control Systems", "Vehicle Dynamics", "FEA"],
        //     links: [
        //         { title: "Competition Presentation", url: "#" },
        //         { title: "Track Testing Data", url: "#" },
        //         { title: "Control System Code", url: "#" }
        //     ],
        //     details: {
        //         "Response Time": "< 5 ms",
        //         "Weight": "4.2 kg per corner",
        //         "Travel": "50 mm",
        //         "Adjustability": "32 settings"
        //     }
        // },
        // {
        //     id: "medical-device",
        //     title: "Prosthetic Joint Design",
        //     shortDescription: "Developed biomechanically optimized knee joint prosthetic with enhanced range of motion and durability, meeting ISO 13485 medical device standards.",
        //     fullDescription: "Engineered an innovative knee joint prosthetic that mimics natural biomechanics more closely than existing designs. The device features a polycentric mechanism that provides variable center of rotation throughout the gait cycle. Materials were carefully selected for biocompatibility and wear resistance, with UHMWPE bearing surfaces and titanium structural components. The design underwent extensive ISO 10328 testing, exceeding durability requirements by 200%.",
        //     thumbnail: "https://placehold.co/400x250",
        //     images: [
        //         "https://placehold.co/800x600",
        //         "https://placehold.co/800x600",
        //         "https://placehold.co/800x600"
        //     ],
        //     skills: ["Fusion 360", "Biomechanics", "FDA Compliance", "FEA", "Material Science"],
        //     links: [
        //         { title: "Clinical Trial Results", url: "#" },
        //         { title: "FDA Submission", url: "#" }
        //     ],
        //     details: {
        //         "Range of Motion": "135°",
        //         "Weight": "580 g",
        //         "Cycles Tested": "10 million",
        //         "Patient Satisfaction": "94%"
        //     }
        // }
    ],
    personal: [
        {
            id: "CardSorter",
            title: "Trading Card Sorter",
            shortDescription: "(IN PROGRESS) Developing an automated machine that scans and sorts trading cards using computer vision.",
            fullDescription: "It is clear that trading cards are one of the biggest industries in games and toys today. Currently, there are only commercial solutions for the sorting and organization of these cards. This open source project aims to create a version, as capable as commercial solutions, without the hefty price tag. This is done through a majority of 3d printed pieces including belts, pulleys, and card rollers. To scan the card, this machine would use already made software, Manabox, for its speed and collection documentation (not affiliated). Additionally, it is designed in such a way that each sorter module can be independently detached from one another. This allows for better repairability and enhanced customizability. The number of piles this machine can sort is only determined by the strength of the motor and not the design itself. \n This design is actually not the first I’ve created. My initial designs include a much less modular solution with larger moving pieces. While I never started the assembly phase for versions 1 or 2, the CAD was developed. The links for it are below. ",
            thumbnail: "images\\CardSorter\\Screenshot 2025-09-06 164749.png",
            images: [
                "images\\CardSorter\\Screenshot 2025-09-06 164749.png",
                "images\\CardSorter\\Screenshot 2025-09-06 164910.png",
                "images\\CardSorter\\Screenshot 2025-09-06 164956.png"
            ],
            skills: ["Onshape", "Arduino", "3D Printing and Slicing", "Electronics and Wiring"],
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
            id: "MeltyBrain",
            title: "Melty Brain Combat Robot",
            shortDescription: "Built and competed with a combat robot using an advanced control system allowing translation and rotation through high-RPM spinning and precise motor pulsing",
            fullDescription: "When I joined Northeastern University Combat Robotics, the introductory project included designing and building for a 1lb plastic competition. While I could have selected more mainstream robot types, (drum spinner, vertical/horizontal spinner, flipper) I tried for an unconventional robot type – Meltybrain. Building off a horizontal spinner, the whole robot spins at thousands of RPMs. It moves forwards through the intermittent pulsing of the motor every 180° cycle. For my bot I focused on repairability and damage. This means it splits into 5 different pieces – two lids, one weapon, and two motor mounts. The motor mounts and weapon are all clamped down between the two lid pieces. After competing at the spring competition, I learned a few different things. First, my current design is way too large. While they barely fit the weight requirements, structurally, they were terrible. The whole design needs to be shrunk down in order for it to be viable. Second, programming is hard. I tried to use already made open source code to make my meltybrain move. Unfortunately, this code was never fully functioning and It was hard to pinpoint why exactly it wasn’t moving in the right way. I’d love to revisit this project based on what I’ve learned and improve Wicked Cyclone for another 1lb competition. Not only does the design need improvement, but I need more help understanding the software side. Additionally, I’m curious as to what help simulation software such as Ansys could provide for weapon shape. ",
            thumbnail: "images\\Melty\\cpm35 2025-03-08 172244.662.jpg",
            images: [
                "images\\Melty\\cpm35 2025-03-08 172244.662.jpg",
                "images\\Melty\\IMG_4033.JPEG",
                "images\\Melty\\Screenshot 2025-09-12 181947.png",
                "images\\Melty\\7827612557748026968.mp4"
            ],
            skills: ["Onshape", "Arduino", "3D Printing and Slicing", "Electronics and Wiring"],
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
            fullDescription: "",
            thumbnail: "images\\Voron\\IMG_3987.JPEG",
            images: [
                "images\\Voron\\IMG_3987.JPEG",
                "images\\Voron\\IMG_3981.MP4",
                "images\\Voron\\IMG_3986.JPEG",
                "images\\Voron\\IMG_3671.MP4",
                "images\\Voron\\IMG_3988.JPEG",
            ],
            skills: ["Mechanical Design", "G-code", "Firmware Development", "Precision Assembly"],
            links: [
                { title: "Firmware Config", url: "#" },
                { title: "Bill of Materials", url: "#" }
            ],
            details: {
                "Max Speed": "200 mm/s",
                "Materials": "PLA, ABS, PETG"
            }
        },
        {
            id: "",
            title: "",
            shortDescription: "",
            fullDescription: "",
            thumbnail: "https://placehold.co/400x250",
            images: [
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600"
            ],
            skills: ["", "", "", "", ""],
            links: [
                { title: "", url: "#" },
                { title: "", url: "#" }
            ],
            details: {
                " ": "",
                "": "",
                "": "",
                "": ""
            }
        },
        {
            id: "",
            title: "",
            shortDescription: "",
            fullDescription: "",
            thumbnail: "https://placehold.co/400x250",
            images: [
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600"
            ],
            skills: ["", "", "", "", ""],
            links: [
                { title: "", url: "#" },
                { title: "", url: "#" }
            ],
            details: {
                " ": "",
                "": "",
                "": "",
                "": ""
            }
        },
        {
            id: "",
            title: "",
            shortDescription: "",
            fullDescription: "",
            thumbnail: "https://placehold.co/400x250",
            images: [
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600"
            ],
            skills: ["", "", "", "", ""],
            links: [
                { title: "", url: "#" },
                { title: "", url: "#" }
            ],
            details: {
                " ": "",
                "": "",
                "": "",
                "": ""
            }
        },
        
    ]
};
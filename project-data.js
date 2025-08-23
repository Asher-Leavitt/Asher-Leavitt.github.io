// projects-data.js - All project information in one place

const projectsData = {
    professional: [
        {
            id: "turbine-optimization",
            title: "Turbine Blade Optimization",
            shortDescription: "Designed and optimized turbine blade geometry using CFD analysis, achieving 15% efficiency improvement and reduced material stress through innovative cooling channel design.",
            fullDescription: "This project involved a complete redesign of high-pressure turbine blades for a gas turbine engine. Using computational fluid dynamics and finite element analysis, I developed an innovative internal cooling channel configuration that reduced blade temperature by 120°C while maintaining structural integrity. The design incorporated film cooling holes positioned using AI-assisted optimization algorithms, resulting in a 15% improvement in overall turbine efficiency. The project required extensive collaboration with manufacturing teams to ensure the complex geometry could be produced using investment casting techniques.",
            thumbnail: "https://placehold.co/400x250",
            images: [
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600"
            ],
            skills: ["ANSYS Fluent", "SolidWorks", "FEA Analysis", "CFD", "Heat Transfer", "MATLAB"],
            links: [
                { title: "Technical Report", url: "#" },
                { title: "CFD Simulation Video", url: "#" }
            ],
            details: {
                "Duration": "6 months",
                "Team Size": "4 engineers",
                "Industry": "Aerospace",
                "Impact": "Saved $2M annually in fuel costs"
            }
        },
        {
            id: "robotic-arm",
            title: "6-DOF Robotic Arm",
            shortDescription: "Developed a six-degree-of-freedom robotic arm for precision manufacturing, including kinematic modeling, servo control system, and custom end-effector design.",
            fullDescription: "Designed and built a fully functional 6-DOF robotic arm capable of 0.1mm positioning accuracy for automated assembly operations. The project encompassed mechanical design, control system development, and software integration. I implemented inverse kinematics algorithms in MATLAB and developed a real-time control system using Arduino and custom motor drivers. The arm features automatic collision detection, force feedback control, and can be programmed through a graphical interface or by physical teaching.",
            thumbnail: "https://placehold.co/400x250",
            images: [
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600"
            ],
            skills: ["MATLAB", "Fusion 360", "Arduino", "Inverse Kinematics", "Control Systems", "C++"],
            links: [
                { title: "GitHub Repository", url: "#" },
                { title: "Demo Video", url: "#" },
                { title: "Control Algorithm Paper", url: "#" }
            ],
            details: {
                "Payload": "5 kg",
                "Reach": "850 mm",
                "Repeatability": "±0.1 mm",
                "Cost": "$3,500"
            }
        },
        {
            id: "heat-exchanger",
            title: "Compact Heat Exchanger",
            shortDescription: "Engineered a high-efficiency compact heat exchanger for automotive applications, reducing size by 30% while maintaining thermal performance through advanced fin design.",
            fullDescription: "Developed an innovative plate-fin heat exchanger design for electric vehicle battery cooling systems. Through extensive thermal modeling and optimization, achieved a 30% reduction in volume while maintaining the same heat transfer capacity. The design features variable fin density and novel flow distribution channels that minimize pressure drop. Prototypes were tested in automotive thermal cycling conditions, demonstrating superior performance compared to conventional designs.",
            thumbnail: "https://placehold.co/400x250",
            images: [
                "https://placehold.co/800x600",
                "https://placehold.co/800x600"
            ],
            skills: ["COMSOL", "CATIA V5", "Thermal Analysis", "CFD", "Design Optimization"],
            links: [
                { title: "Patent Application", url: "#" },
                { title: "Test Results", url: "#" }
            ],
            details: {
                "Heat Transfer Rate": "15 kW",
                "Pressure Drop": "2.5 kPa",
                "Weight Reduction": "35%",
                "Material": "Aluminum 6061"
            }
        },
        {
            id: "gearbox-design",
            title: "Planetary Gearbox System",
            shortDescription: "Designed compact planetary gearbox with 100:1 reduction ratio for industrial robotics. Achieved 95% efficiency with minimal backlash through precision gear profiling.",
            fullDescription: "Created a high-precision planetary gearbox for collaborative robot applications. The design features a two-stage planetary configuration with optimized gear profiles generated using KISSsoft. Special attention was paid to minimizing backlash through precise tolerancing and preloading mechanisms. The gearbox housing incorporates integrated sensors for predictive maintenance monitoring. Extensive FEA was performed to ensure adequate safety factors under peak loading conditions.",
            thumbnail: "https://placehold.co/400x250",
            images: [
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600"
            ],
            skills: ["CATIA V5", "KISSsoft", "FEA Analysis", "GD&T", "Manufacturing Design"],
            links: [
                { title: "Design Documentation", url: "#" },
                { title: "Load Testing Report", url: "#" }
            ],
            details: {
                "Ratio": "100:1",
                "Efficiency": "95%",
                "Backlash": "< 1 arcmin",
                "Rated Torque": "250 Nm"
            }
        },
        {
            id: "suspension-system",
            title: "Active Suspension System",
            shortDescription: "Developed semi-active suspension system for Formula SAE vehicle, incorporating magnetorheological dampers and real-time control algorithms for optimal handling.",
            fullDescription: "Designed and implemented an advanced semi-active suspension system for a Formula SAE race car. The system uses magnetorheological dampers with real-time control based on vehicle dynamics sensors. Developed control algorithms in MATLAB/Simulink that adjust damping characteristics within milliseconds based on road conditions and driving mode. The suspension geometry was optimized using Adams Car software to minimize tire scrub and maintain optimal camber through the suspension travel.",
            thumbnail: "https://placehold.co/400x250",
            images: [
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600"
            ],
            skills: ["Adams Car", "MATLAB/Simulink", "Control Systems", "Vehicle Dynamics", "FEA"],
            links: [
                { title: "Competition Presentation", url: "#" },
                { title: "Track Testing Data", url: "#" },
                { title: "Control System Code", url: "#" }
            ],
            details: {
                "Response Time": "< 5 ms",
                "Weight": "4.2 kg per corner",
                "Travel": "50 mm",
                "Adjustability": "32 settings"
            }
        },
        {
            id: "medical-device",
            title: "Prosthetic Joint Design",
            shortDescription: "Developed biomechanically optimized knee joint prosthetic with enhanced range of motion and durability, meeting ISO 13485 medical device standards.",
            fullDescription: "Engineered an innovative knee joint prosthetic that mimics natural biomechanics more closely than existing designs. The device features a polycentric mechanism that provides variable center of rotation throughout the gait cycle. Materials were carefully selected for biocompatibility and wear resistance, with UHMWPE bearing surfaces and titanium structural components. The design underwent extensive ISO 10328 testing, exceeding durability requirements by 200%.",
            thumbnail: "https://placehold.co/400x250",
            images: [
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600"
            ],
            skills: ["Fusion 360", "Biomechanics", "FDA Compliance", "FEA", "Material Science"],
            links: [
                { title: "Clinical Trial Results", url: "#" },
                { title: "FDA Submission", url: "#" }
            ],
            details: {
                "Range of Motion": "135°",
                "Weight": "580 g",
                "Cycles Tested": "10 million",
                "Patient Satisfaction": "94%"
            }
        }
    ],
    personal: [
        {
            id: "rc-aircraft",
            title: "Custom RC Aircraft",
            shortDescription: "Designed and built a custom RC aircraft with 2-meter wingspan, featuring aerodynamic optimization for extended flight time and FPV camera integration.",
            fullDescription: "Built a fully custom RC aircraft from scratch, including aerodynamic design, structural analysis, and electronics integration. The aircraft features a high-aspect-ratio wing optimized for efficiency, achieving flight times over 45 minutes. Incorporated FPV system with head tracking and long-range telemetry. The fuselage was 3D printed in lightweight PLA with carbon fiber reinforcement at stress points.",
            thumbnail: "https://placehold.co/400x250",
            images: [
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600"
            ],
            skills: ["Aerodynamics", "3D Printing", "Electronics", "Composite Materials", "CAD"],
            links: [
                { title: "Build Log", url: "#" },
                { title: "Flight Videos", url: "#" }
            ],
            details: {
                "Wingspan": "2 meters",
                "Flight Time": "45+ minutes",
                "Range": "5 km",
                "Cruise Speed": "45 km/h"
            }
        },
        {
            id: "3d-printer",
            title: "CoreXY 3D Printer",
            shortDescription: "Built a high-speed CoreXY 3D printer from scratch with automatic bed leveling, dual extrusion, and custom Marlin firmware configuration.",
            fullDescription: "Designed and constructed a high-performance CoreXY 3D printer capable of 200mm/s print speeds with excellent quality. Features include automatic mesh bed leveling, dual independent extruders for multi-material printing, and a heated chamber for printing engineering plastics. The frame uses precision-machined aluminum extrusions with linear rails on all axes. Custom Marlin firmware includes advanced features like input shaping and pressure advance.",
            thumbnail: "https://placehold.co/400x250",
            images: [
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600"
            ],
            skills: ["Mechanical Design", "Arduino", "G-code", "Firmware Development", "Precision Assembly"],
            links: [
                { title: "Thingiverse Page", url: "#" },
                { title: "Firmware Config", url: "#" },
                { title: "Bill of Materials", url: "#" }
            ],
            details: {
                "Build Volume": "300x300x400 mm",
                "Resolution": "0.05 mm",
                "Max Speed": "200 mm/s",
                "Materials": "PLA, ABS, PETG, Nylon"
            }
        },
        {
            id: "stirling-engine",
            title: "Stirling Engine Model",
            shortDescription: "Designed and machined a working Stirling engine model demonstrating thermodynamic principles, achieving 600 RPM with simple alcohol burner heat source.",
            fullDescription: "Created a fully functional beta-type Stirling engine as a demonstration of thermodynamic principles. All components were personally machined on a lathe and mill to tolerances of ±0.01mm. The engine features a glass power cylinder to visualize the power piston motion, and precision-fitted graphite pistons for minimal friction. Achieved consistent operation at 600 RPM with just an alcohol burner as the heat source.",
            thumbnail: "https://placehold.co/400x250",
            images: [
                "https://placehold.co/800x600",
                "https://placehold.co/800x600"
            ],
            skills: ["CNC Machining", "Thermodynamics", "Precision Assembly", "Material Selection"],
            links: [
                { title: "Machining Process", url: "#" },
                { title: "Performance Analysis", url: "#" }
            ],
            details: {
                "Type": "Beta Configuration",
                "Displacement": "15 cc",
                "Operating Speed": "600 RPM",
                "Materials": "Brass, Steel, Graphite"
            }
        },
        {
            id: "electric-skateboard",
            title: "Electric Longboard",
            shortDescription: "Custom electric longboard with dual hub motors, regenerative braking, and 25-mile range. Features custom battery management system and wireless control.",
            fullDescription: "Built a high-performance electric longboard with custom-designed components throughout. Features dual 1500W hub motors providing 45 km/h top speed and hill-climbing capability up to 25% grade. Designed and built a 12S4P lithium battery pack with integrated BMS supporting regenerative braking. The wireless controller uses nRF24 modules with failsafe features and telemetry display showing speed, battery level, and range.",
            thumbnail: "https://placehold.co/400x250",
            images: [
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600"
            ],
            skills: ["Motor Control", "Battery Design", "CAD Design", "Electronics", "Embedded Systems"],
            links: [
                { title: "Build Tutorial", url: "#" },
                { title: "Range Test Video", url: "#" }
            ],
            details: {
                "Top Speed": "45 km/h",
                "Range": "40 km",
                "Power": "3000W total",
                "Battery": "12S4P 18650"
            }
        },
        {
            id: "workshop-automation",
            title: "Workshop Automation",
            shortDescription: "Automated workshop environment with custom-built CNC tool changer, automated dust collection, and IoT-enabled machine monitoring system.",
            fullDescription: "Transformed my workshop with comprehensive automation systems. Developed an automatic tool changer for my CNC router with capacity for 8 tools and repeatability of 0.02mm. Created a smart dust collection system that automatically activates based on which machine is running and adjusts flow rates accordingly. Implemented IoT monitoring using ESP32 modules to track machine usage, maintenance schedules, and environmental conditions, all accessible through a custom web dashboard.",
            thumbnail: "https://placehold.co/400x250",
            images: [
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600"
            ],
            skills: ["IoT", "Raspberry Pi", "Automation", "Python", "Web Development", "PLC Programming"],
            links: [
                { title: "Dashboard Demo", url: "#" },
                { title: "Automation Code", url: "#" },
                { title: "Workshop Tour", url: "#" }
            ],
            details: {
                "Machines Automated": "5",
                "Tool Positions": "8",
                "Sensors": "24",
                "Response Time": "< 100ms"
            }
        },
        {
            id: "kinetic-sculpture",
            title: "Kinetic Sculpture",
            shortDescription: "Mechanical kinetic sculpture featuring complex gear trains and cam mechanisms, creating mesmerizing patterns through synchronized motion.",
            fullDescription: "Created an intricate kinetic sculpture combining mechanical engineering with artistic expression. The sculpture features multiple interconnected mechanisms including Geneva drives, cam followers, and differential gears, all driven by a single motor. Each mechanism controls different elements that move in carefully choreographed patterns. The entire assembly is displayed in a custom acrylic case with LED lighting that highlights the mechanical motion.",
            thumbnail: "https://placehold.co/400x250",
            images: [
                "https://placehold.co/800x600",
                "https://placehold.co/800x600",
                "https://placehold.co/800x600"
            ],
            skills: ["Mechanism Design", "Artistic Engineering", "Kinematics", "CAD", "Fabrication"],
            links: [
                { title: "Motion Study", url: "#" },
                { title: "Gallery Exhibition", url: "#" }
            ],
            details: {
                "Mechanisms": "12 unique",
                "Parts Count": "247",
                "Dimensions": "60x60x80 cm",
                "Materials": "Brass, Steel, Acrylic"
            }
        }
    ]
};
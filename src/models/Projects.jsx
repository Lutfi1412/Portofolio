const ProjectsModel = [
  {
    web: [
      {
        tittle: "Attendance Web",
        deskripsi:
          "Attendance Web based on geolocation and face recognition to ensure valid and accurate presence. The system verifies the user's location while matching their face with the registered data, making attendance more secure, efficient, and difficult to falsify. This project won 4th place in the Unlimatid Software Building competition.",
        image: "/images/web/absen.png",

        tags: ["React Js", "Express", "Face Recognition", "My SQL"],
        liveUrl: null,
        githubUrl: "https://github.com/Lutfi1412",
      },
      {
        tittle: "Fidusiaku",
        deskripsi:
          "Fidusiaku is an Angular-based application I developed during my internship, focusing on asset ownership management with banking service integration. This project was built in collaboration with Bank Mega to support transparency and security in ownership records. (private github)",
        image: "/images/web/fidusiaku.png",

        tags: ["Angular"],
        liveUrl: "https://app-dev.fidusiaku.id/account/login/option/1",
        githubUrl: "https://github.com/Lutfi1412",
      },
      {
        tittle: "Portfolio Website",
        deskripsi:
          "A personal portfolio website built with React.js to showcase my profile, skills, and completed projects. It is designed with a modern, interactive, and responsive interface to make it easy for people to explore my work.",
        image: "/images/web/porto.png",

        tags: ["React Js"],
        liveUrl: null,
        githubUrl: "https://github.com/Lutfi1412/Portofolio",
      },
      {
        tittle: "Queue Management Web",
        deskripsi:
          "Queue Management Web is a digital queuing system built with TypeScript for the frontend, Golang for the backend, and PostgreSQL as the main database. This application is designed to simplify queue management efficiently, quickly, and in a structured manner.",
        image: "/images/web/antrian.png",

        tags: ["TypeScript", "Golang", "Postgres"],
        liveUrl: "https://web-antrian-dun.vercel.app/",
        githubUrl: "https://github.com/Lutfi1412/web-antrian",
      },
      {
        tittle: "E-Commerce",
        deskripsi:
          "An E-Commerce platform built with Laravel and integrated with the Midtrans payment system. This application was developed to support secure and efficient online transactions, featuring product management, shopping cart, and a fully integrated checkout with payment gateway.",
        image: "/images/web/ecommerse.png",

        tags: ["Laravel"],
        liveUrl: null,
        githubUrl: "https://github.com/Lutfi1412/Laravel-ecommerce",
      },
    ],

    be: [
      {
        tittle: "api-tax",
        deskripsi:
          "Tax API is a service that provides real-time vehicle tax data by scraping directly from the official SAMSAT site, integrated with a plate recognizer API to automatically detect and recognize vehicle numbers. This project is part of my scientific writing at university.",
        image: "/images/postman_menhara.png",

        tags: ["Golang"],
        liveUrl: null,
        githubUrl: "https://github.com/Lutfi1412/api-pi",
      },
      {
        tittle: "api-sport",
        deskripsi:
          "API Sport is a Golang-based backend service I developed to support a sports application. This API provides core data and features needed by the app, focusing on performance, scalability, and ease of integration.",
        image: "/images/postman_menhara.png",

        tags: ["Golang", "Postgres"],
        liveUrl: null,
        githubUrl: "https://github.com/Lutfi1412/api-sport",
      },
      {
        tittle: "api-queue",
        deskripsi:
          "Queue API is a backend service built with Golang and PostgreSQL to manage digital queue systems. It is designed to make the queuing process more structured, efficient, and easily integrated with frontend applications.",
        image: "/images/postman_menhara.png",

        tags: ["Golang", "Postgres"],
        liveUrl: null,
        githubUrl: "https://github.com/Lutfi1412/api-antrian",
      },
      {
        tittle: "api-mobile-legend-analysis",
        deskripsi:
          "API Mobile Legend Analysis is a backend service that provides real-time insights into Mobile Legends heroes that are currently meta, overpowered, or underrated. Data is collected through scraping from relevant sources and stored in a database to deliver up-to-date analysis that can be integrated into applications.",
        image: "/images/postman_menhara.png",

        tags: ["Golang"],
        liveUrl: null,
        githubUrl: "https://github.com/Lutfi1412/mobille-legend-analys",
      },
    ],

    ml: [
      {
        tittle: "Image Classification",
        deskripsi:
          "Image Classification project using TensorFlow, NumPy, Python, and Matplotlib to classify animal images into three categories: Dogs, Butterflies, and Spiders. The model was trained to recognize visual patterns and distinguish between each class using deep learning techniques and data visualization.",
        image: "/images/menhera_ml.png",

        tags: ["Tensorflow", "Numpy", "Python", "matplotlib"],
        liveUrl: null,
        githubUrl: "https://github.com/Lutfi1412/dbs-klasifikasi-gambar",
      },
      {
        tittle: "Data Analysis",
        deskripsi:
          "E-Commerce Data Analysis project aimed at evaluating sales trends, customer behavior, and product performance. This analysis applies data processing techniques to generate insights that support business strategies and decision-making.",
        image: "/images/menhera_ml.png",

        tags: ["Pandas", "Numpy", "Seaborn", "Python", "matplotlib"],
        liveUrl: null,
        githubUrl: "https://github.com/Lutfi1412/dbs-analisis-data",
      },
      {
        tittle: "Clustering and Data Classification",
        deskripsi:
          "Clustering and Data Classification project on beverage sales with the goal of grouping products based on sales patterns and classifying data to identify beverage categories with high or low performance. This analysis helps to understand consumer trends and support marketing strategies.",
        image: "/images/menhera_ml.png",

        tags: ["Pandas", "Skearn", "Seaborn", "Python", "matplotlib"],
        liveUrl: null,
        githubUrl: "https://github.com/Lutfi1412/dbs-klasifikasi-gambar",
      },
    ],

    mobile: [
      {
        tittle: "Student Application",
        deskripsi:
          "My first mobile application as a freelancer for MiMath learning company. This app helps students access materials, exercises, and learning activities digitally.",
        image: "/images/mobile/mimath.jpeg",
        tags: ["Kotlin", "Supabase"],
        liveUrl: null,
        githubUrl: "https://github.com/Lutfi1412/",
      },
      {
        tittle: "Tax Application",
        deskripsi:
          "A desktop application that automatically takes a screenshot every 5 seconds, then processes and scrapes data from the images for tax analysis purposes.",
        image: "/images/mobile/pajak.png",
        tags: ["Kotlin", "Golang", "Postgres"],
        liveUrl: null,
        githubUrl: "https://github.com/Lutfi1412/aplikasi-pajak",
      },
      {
        tittle: "Mobile Legend Analysis",
        deskripsi:
          "A Mobile Legend analysis application that uses data scraping to identify heroes that are currently meta, overpowered, or underrated in real-time.",
        image: "/images/mobile/analis.jpeg",
        tags: ["Kotlin", "Golang"],
        liveUrl:
          "https://drive.google.com/file/d/1QJe0EImntjiYgjUvoUz6X40jhv1gjqLt/view?usp=sharing",
        githubUrl: "https://github.com/Lutfi1412/mobille-legend-analys",
      },
      {
        tittle: "VSGA Project",
        deskripsi:
          "The final project in the VSGA program as a requirement to obtain the Mobile Junior Developer certificate from BNSP. This app was developed with Kotlin as proof of mobile development competency.",
        image: "/images/mobile/VSGA.jpeg",
        tags: ["Kotlin"],
        liveUrl: null,
        githubUrl: "https://github.com/Lutfi1412/ProjekAkhirVSGA",
      },
      {
        tittle: "SQLite Application",
        deskripsi:
          "A mobile application built with Kotlin integrated with SQLite to store and manage data locally, designed as an implementation of offline data management.",
        image: "/images/mobile/sql.png",
        tags: ["Kotlin"],
        liveUrl: null,
        githubUrl: "https://github.com/Lutfi1412/ProjekAkhirVSGA",
      },
    ],
  },
];

export default ProjectsModel;

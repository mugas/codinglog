//Create email to be sent
document.getElementById("contact-me").addEventListener("click", function () {
    var emailAddress = "ricardo.d.moreira.rm@gmail.com"; // Your email address
    var subject = "I want to Hire you"; // Email subject
    var body = "Hello!"; // Email body
    var mailtoLink = "mailto:" + emailAddress + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
});

// Function to create a new log entry
function addDailyLog(date, text, imageSrc) {
    const logsContainer = document.getElementById("logs-container");

    // Create new log element
    const newLog = document.createElement("div");
    newLog.classList.add("daily-log");

    // Create container for date and content
    const logWrapper = document.createElement("div");

    // Create link element for date (clickable)
    const dateLink = document.createElement("a");
    dateLink.textContent = date;
    dateLink.classList.add("log-date");
    dateLink.href = "#"; // Prevent default link behavior

    // Add event listener to toggle expansion on click
    newLog.addEventListener("click", function () {
        newLog.classList.toggle("expanded");
    });

    logWrapper.appendChild(dateLink);

    // Create container for log content (initially hidden)
    const logContent = document.createElement("div");
    logContent.classList.add("log-content");

    // Create paragraphs for each topic with bullet points
    const topics = text.split("---"); // Split text into topics
    topics.forEach(topicText => {
        const topicParagraph = document.createElement("p");
        topicParagraph.innerHTML = `• ${topicText.trim().replace(/\n+/g, '<br>• ')}`; // Add bullet points
        logContent.appendChild(topicParagraph);
    });

    // Create image element (optional)
    if (imageSrc) {
        const image = document.createElement("img");
        image.src = imageSrc;
        image.alt = "Log Image";
        logContent.appendChild(image);
    }

    logWrapper.appendChild(logContent);
    newLog.appendChild(logWrapper);

    // Add new log to container
    logsContainer.appendChild(newLog);
}

// Daily log data (replace with your actual data)
const dailyLogs = [
    {
        date: "2024-03-14",
        text: `Today I explored creating interactive elements in HTML. Here are some key concepts I learned:

        ---Creating buttons for user interaction.
        ---Using forms to collect user input.
        ---Implementing event listeners to respond to user actions.

      These concepts will be useful for building dynamic and engaging web experiences.
      `,
        imageSrc: "https://res.cloudinary.com/mugas/image/upload/v1685472339/Websites_that_work_for_you_vbat1t.png" // Replace with your image URL
    },
    {
        date: "2024-03-15",
        text: `Today I learned about working with APIs in JavaScript. I explored fetching data from external sources and using it to populate web pages. This will enable me to build applications that interact with real-time data.
      `,
        imageSrc: "[image source URL 2]" // Replace with your image URL
    },
    {
        date: "2024-03-15",
        text: `Today I learned about working with APIs in JavaScript. I explored fetching data from external sources and using it to populate web pages. This will enable me to build applications that interact with real-time data.
      `,
        imageSrc: "[image source URL 2]" // Replace with your image URL
    },
    {
        date: "2024-03-15",
        text: `Today I learned about working with APIs in JavaScript. I explored fetching data from external sources and using it to populate web pages. This will enable me to build applications that interact with real-time data.
      `,
        imageSrc: "[image source URL 2]" // Replace with your image URL
    },
    {
        date: "2024-03-15",
        text: `Today I learned about working with APIs in JavaScript. I explored fetching data from external sources and using it to populate web pages. This will enable me to build applications that interact with real-time data.
      `,
        imageSrc: "[image source URL 2]" // Replace with your image URL
    },
    {
        date: "2024-03-15",
        text: `Today I learned about working with APIs in JavaScript. I explored fetching data from external sources and using it to populate web pages. This will enable me to build applications that interact with real-time data.
      `,
        imageSrc: "[image source URL 2]" // Replace with your image URL
    },
    {
        date: "2024-03-15",
        text: `Today I learned about working with APIs in JavaScript. I explored fetching data from external sources and using it to populate web pages. This will enable me to build applications that interact with real-time data.
      `,
        imageSrc: "[image source URL 2]" // Replace with your image URL
    },
    {
        date: "2024-03-15",
        text: `Today I learned about working with APIs in JavaScript. I explored fetching data from external sources and using it to populate web pages. This will enable me to build applications that interact with real-time data.
      `,
        imageSrc: "[image source URL 2]" // Replace with your image URL
    },
    {
        date: "2024-03-15",
        text: `Today I learned about working with APIs in JavaScript. I explored fetching data from external sources and using it to populate web pages. This will enable me to build applications that interact with real-time data.
      `,
        imageSrc: "[image source URL 2]" // Replace with your image URL
    },
    {
        date: "2024-03-15",
        text: `Today I learned about working with APIs in JavaScript. I explored fetching data from external sources and using it to populate web pages. This will enable me to build applications that interact with real-time data.
      `,
        imageSrc: "[image source URL 2]" // Replace with your image URL
    },
    // Add entries for future dates here
];

// Function to add all daily logs
function addDailyLogs() {
    const logsContainer = document.getElementById("logs-container");

    for (const logEntry of dailyLogs) {
        addDailyLog(logEntry.date, logEntry.text, logEntry.imageSrc);
    }
}

// Call the function to add logs
addDailyLogs();

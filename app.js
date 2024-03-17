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
        date: "2024-03-17",
        text: `Before a short 2 day trip to go see Idles in Sweden I:

        ---I continued my Web Design Certification in Free Code Camp. Doing a cat with CSS😊
        ---Stateful vs Stateless methods in C#. First lines of code with C# in Visual Studio Code
        ---Installed Lua and add it to Visual Studio Code

      `,
        imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1710706176/cat_html.png"
    },
    {
        date: "2024-03-16",
        text: `Today I created the log diary using html + css + js.What I am learning and building is:

        ---learning C# with Microsoft and Free Code Camp
        ---Finnish my Web Design certification with Free Code Camp
        ---Planning a T-shirt priting product with no code tools

      
      `,
        imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1710624068/Ricardo_moreira_g8ixnr.png"
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

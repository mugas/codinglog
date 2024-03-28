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
    date: "2024-03-28",
    text: `CSS variables go

    ---New module of my web design course is about css variable and I am building a city skyline.
    ---More time spending with debuggin Visual Studio Code then with C# but could make half of the challenge;
    ---Went back again to C# in the evening to look again to the code. Make sense now. Tomorrow practice and practice

    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1711659088/morec_tunq53.png"
  },
  {
    date: "2024-03-27",
    text: `One step more near certification

    ---Another module finished for my web design certification, 2 more to go.
    ---Finished the project for C# about foreach and now I am doing a challenge that test these skills.

    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1711595869/c__daily_juzh3d.png"
  },
  {
    date: "2024-03-26",
    text: `More deep in C#

        ---Piano done. Now have another project certification to finnish this module- Do a documentation page
        ---In C#, first mode complete program written.Develop foreach and if-elseif-else structures to process array data in C#.
        
      `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1711426971/piano_v71d53.png"
  },
  {
    date: "2024-03-25",
    text: `javascript helped.

        ---Another module in my web design certification. Starting building a piano with CSS
        ---Did more exercises about arrays and foreach in C# and also about how to write readable code. my previous knowledge of javascript was usefull.
        -- First code steps with Lua. Data variables, multi line string,concatenation, etc
        
      `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1711426972/lua_de4ou1.png"
  },
  {
    date: "2024-03-24",
    text: `A code a day makes it worth the day

        ---Sunday with begin of working with arrays in C#. Syntax not much different then javascript
        ---Continue preparing the open application letters and CV
      `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1711298051/arra_sczyw7.png"
  },
  {
    date: "2024-03-23",
    text: `A short day filled with some exercises

        ---To get more confortable with C#, did more exercises about if statements
        ---Finishing my store on printity and on Etsy to be able to launch the T-shirt business
      `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1711231178/chameleon_rh0iub.png"
  },
  {
    date: "2024-03-22",
    text: `If I do it everyday, then I will learn more.

        ---Finished the cat, made with CSS. Next will be to do a piano and I finish another section on the Web Design Certification
        ---Lesson about if and then statement with C#. Will practice with more exercises tomorrow
        ---My T-shirt store start to get shape. Testing first models
      `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1711147517/cat_x8qmtr.png"
  },
  {
    date: "2024-03-21",
    text: `Back to coding and feels good.

        ---My cat is almost finished.These were some of the skills I was lacking in CSS - creating images from a div
        ---Finished the lesson "Call methods from the .NET. The end was a small exercise about methods in .Net
        ---First line of code with Lua.
      `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1711057858/c_s5hhkj.png"
  },
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
